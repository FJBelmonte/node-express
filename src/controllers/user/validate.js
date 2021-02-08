const connection = require("../../../knex/knex");

const verifyIfEmailExists = async (username) => {
    const user = await connection("user")
        .select("*")
        .where("username", username);

    return user.length !== 0;
};

const _create = async (req, res, next) => {
    const { username, password } = req.body;
    const userExist = await verifyIfEmailExists(username);
    if (userExist) {
        return res.status(400);
    } else {
        next();
    }
};

const _read = (req, res, next) => {
    next();
};
const _update = (req, res, next) => {
    next();
};

const _delete = (req, res, next) => {
    next();
};

module.exports = {
    create: _create,
    read: _read,
    update: _update,
    delete: _delete,
};
