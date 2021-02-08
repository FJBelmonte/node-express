const express = require("express");
const routes = express.Router();
const jwt = require("jsonwebtoken");

routes.get("/", (req, res) => {
    return res.send("Teste");
});

module.exports = routes;
