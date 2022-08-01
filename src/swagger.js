import "dotenv/config";
import swaggerAutogen from "swagger-autogen";

console.log(process.env.SCHEMES);

const doc = {
    info: {
        version: process.env.VERSION,
        title: process.env.PROJECT_NAME,
        description: process.env.PROJECT_DESCRIPTION,
    },
    host: `${process.env.URL === "localhost" ? "localhost:" + process.env.PORT : process.env.URL}`,
    basePath: "/",
    schemes: JSON.parse(process.env.SCHEMES),
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: JSON.parse(process.env.TAGS),
    securityDefinitions: {
        Basic: {
            type: "apiKey",
            name: "x-access-token",
            in: "header",
            scopes: {
                admin: "admin",
            },
        },
    },
    definitions: {
        login: {
            username: "username",
            password: "password",
        },
    },
};

const outputFile = "./src/swagger_output.json";
const endpointsFiles = ["./src/routes/index.js"];

swaggerAutogen()(outputFile, endpointsFiles, doc).then(async () => {
    await import("./index.js");
});
