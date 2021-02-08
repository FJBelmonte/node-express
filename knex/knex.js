require("dotenv-safe").config();
const knex = require("knex");
const config = require("../knexfile.js")[process.env.ENVIRONMENT];
console.log("env", process.env.ENVIRONMENT);
console.log("config", config);
const connection = knex(config);

module.exports = connection;
