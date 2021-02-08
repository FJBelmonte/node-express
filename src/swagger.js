const swaggerAutogen = require("swagger-autogen")("pt-BR");
require("dotenv-safe").config();

const doc = {
    info: {
        version: "1.0.0",
        title: "ISGSA - API CHAT OPS",
        description: "Desenvolvido por <b>Truly</br>",
    },
    host: `${
        process.env.URL === "localhost"
            ? "localhost:" + process.env.PORT
            : process.env.URL
    }`,
    basePath: "/",
    schemes: ["https"],
    consumes: ["application/json"],
    produces: ["application/json"],
    tags: [],
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
const endpointsFiles = ["./src/routes.js"];

swaggerAutogen(outputFile, endpointsFiles, doc).then(() => {
    require("./index");
});
