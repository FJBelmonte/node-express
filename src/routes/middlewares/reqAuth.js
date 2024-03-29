const jwt = require("jsonwebtoken");
require("dotenv-safe").config();

const reqAuth = async (req, res, next) => {
    const token = req.headers["x-access-token"];

    jwt.verify(token, process.env.SECRET, (err, decoded) => {
        if (err) {
            return res.status(401);
        }
        req.userId = decoded.id;
        next();
    });
};

module.exports = reqAuth;
