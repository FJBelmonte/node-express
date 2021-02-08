const connection = require("../knex/knex");
const { hash } = require("./utils/security");
require("dotenv-safe").config();

const verifyIfEmailExists = async (username) => {
    const user = await connection("user")
        .select("*")
        .where("username", username);

    return user.length !== 0;
};

const init = async () => {
    const userExist = await verifyIfEmailExists(process.env.ADMIN_USER);
    if (userExist) {
        console.log("admin already exists");
    } else {
        await connection("user").insert({
            username: process.env.ADMIN_USER || "admin",
            password: hash(process.env.ADMIN_PASSWORD || "admin"),
            role: "admin",
        });
        console.log("created admin");
    }
};

module.exports = init;
