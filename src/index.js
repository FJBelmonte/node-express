const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");
const morgan = require("morgan");
const path = require("path");
const rfs = require("rotating-file-stream");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const http = require("http");
const PORT = process.env.PORT || 3333;
const app = express();

const MORGAN_LOG = ":method:url :status :response-time ms :date[iso]";

require("./initialize")();

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(
    morgan(MORGAN_LOG, {
        stream: rfs.createStream("access.log", {
            interval: "1d",
            path: path.join(__dirname, "..", "log", process.env.ENVIRONMENT),
        }),
    })
);
app.use(morgan(MORGAN_LOG));

app.use(cors());
app.use(express.json());
app.use(routes);
app.use(errors());

console.log(
    `Please open ${
        process.env.URL === "localhost"
            ? "localhost:" + process.env.PORT
            : process.env.URL
    }/doc in your browser`
);

http.createServer(app).listen(PORT);

module.exports = app;
