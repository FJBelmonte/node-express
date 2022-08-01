import connection from "../../../knex/knex.js";
import { hash, compare } from "../../utils/security/index.js";
import validate from "./validate.js";

const _create = async (req, res, next) => {
    try {
        const { username, password } = req.body;
        const role = "user";
        await connection("user").insert({
            username,
            password: hash(password),
            role,
        });

        return res.status(201).json({ success: true });
    } catch (err) {
        return res.status(500).json({ success: false });
    }
};

const _read = async (req, res) => {};

const _update = async (req, res) => {};

const _delete = async (req, res) => {};

export default {
    create: _create,
    read: _read,
    update: _update,
    delete: _delete,
    validate,
};
