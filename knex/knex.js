import "dotenv/config";
import knex from "knex";
import config from "../knexfile.js";
const connection = knex(config[process.env.ENVIRONMENT]);

export default connection;
