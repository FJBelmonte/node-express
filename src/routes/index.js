const express = require("express");
const routes = express.Router();
const user = require("../controllers/user");

routes.get("/", (req, res) => {
    return res.send("Teste");
});

routes.post("/user", (req, res) => {
    /*
        #swagger.tags = ['user']
        #swagger.parameters['user'] = {
				in: 'body',
				description: 'user',
				required: true,
                type: 'object' ,
                schema: { $ref: "#/definitions/login" }
        }
    */
    // #swagger.responses[201]
    // #swagger.responses[400]
    user.create(req, res);
});

module.exports = routes;
