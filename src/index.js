const express = require("express");
const http = require("http");
const cors = require("cors");
const morgan = require("morgan");
const path = require("path");
const rfs = require("rotating-file-stream");
const swaggerUi = require("swagger-ui-express");
const { errors } = require("celebrate");
const routes = require("./routes");
const swaggerFile = require("./swagger_output.json");
require("./initialize")();

const app = express();

const MORGAN_LOG = ":method:url :status :response-time ms :date[iso]";

app.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(
    morgan(MORGAN_LOG, {
        stream: rfs.createStream("access.log", {
            interval: "1d",
            path: path.join(__dirname, "..", "log"),
        }),
    })
);
app.use(morgan(MORGAN_LOG));
app.use(routes);
app.use(errors());

console.log(
    `Please open ${
        process.env.URL === "localhost"
            ? "localhost:" + process.env.PORT
            : process.env.URL
    }/doc in your browser`
);

const PORT = process.env.PORT || 3333;

http.createServer(app).listen(PORT);
