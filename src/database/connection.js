const knex = require("knex");
const config = require("./knexfile");
require("dotenv-safe").config();

let selectedConfig;

switch (process.env.NODE_ENV) {
    case "dev":
        selectedConfig = config.development;
        break;
    case "production":
        selectedConfig = config.production;
        break;
    default:
        throw new Error("invalid node_env -> ", process.env.NODE_ENV);
}

const connection = knex(selectedConfig);

module.exports = connection;
