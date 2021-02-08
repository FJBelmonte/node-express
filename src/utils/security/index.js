const md5 = require("md5");

const hash = (rawString, options = {}) => {
    const salt = options.salt ? options.salt : new Date().getTime();
    const rounds = options.round ? options.round : 10;

    let hashed = md5(rawString + salt);
    for (let i = 0; i <= rounds; i++) {
        hashed = md5(hashed);
    }
    return `${salt}$${rounds}${hashed}`;
};

const compare = (rawString, hashedString) => {
    try {
        const [salt, rounds] = hashedString.split("$");
        const newHashedString = module.exports.hash(rawString, {
            salt,
            rounds,
        });

        return hashedString === newHashedString;
    } catch (e) {
        throw Error(e.message);
    }
};

module.exports = { compare, hash };
