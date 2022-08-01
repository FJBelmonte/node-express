import "dotenv/config";
import connection from "../../../knex/knex.js";
import jwt from "jsonwebtoken";
import { compare } from "../../utils/security.js";

const login = async (req, res) => {
    const { username, password } = req.body;
    const user = await connection("user")
        .where("username", username)
        .then((data) => {
            return data.length !== 0 ? data[0] : null;
        });
    if (user !== null) {
        if (compare(password, user.password)) {
            const { id } = user;
            let token = jwt.sign({ id }, process.env.SECRET, {
                algorithm: "HS256",
                expiresIn: 300,
            });
            return res.json({ "x-access-token": token });
        }
        // Aqui seria apenas a senha errada, porém isso pode dar pistas suficientes que o usuário existe, alterando o status ou mensagem
        return res.status(401);
    }
    return res.status(401);
};

export default { login };
