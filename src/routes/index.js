import express from "express";
import user from "../controllers/user/index.js";
const routes = express.Router();

routes.get("/", (req, res) => {
    return res.send("Teste");
});

routes.post("/user", user.validate.create, (req, res) => {
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

export default routes;
