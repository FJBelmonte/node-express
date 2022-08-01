import "dotenv/config";
import express from "express";
import cors from "cors";
import { errors } from "celebrate";
import routes from "./routes/index.js";
import morgan from "morgan";
import path from "path";
import rfs from "rotating-file-stream";
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger_output.json" assert { type: "json" };
import initialize from "./initialize.js";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import http from "http";
const PORT = process.env.PORT || 3333;
const app = express();

const MORGAN_LOG = ":method:url :status :response-time ms :date[iso]";

initialize();

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

app.use("*", (req, res) => {
    res.redirect("/doc");
});

console.log(`Please open ${process.env.URL === "localhost" ? "localhost:" + process.env.PORT : process.env.URL}/doc in your browser`);

http.createServer(app).listen(PORT);

export default app;
