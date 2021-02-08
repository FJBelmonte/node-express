const morgan = require("morgan");
const path = require("path");
const rfs = require("rotating-file-stream");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger_output.json");

const http = require("http");
const PORT = process.env.PORT || 3333;
const app = require("./app");

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

console.log(
    `Please open ${
        process.env.URL === "localhost"
            ? "localhost:" + process.env.PORT
            : process.env.URL
    }/doc in your browser`
);

http.createServer(app).listen(PORT);
