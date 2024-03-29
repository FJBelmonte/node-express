// Update with your config settings.

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: __dirname + "/knex/database/dev.sqlite3",
        },
        migrations: {
            directory: __dirname + "/knex/migrations",
        },
    },
    test: {
        client: "sqlite3",
        connection: {
            filename: __dirname + "/knex/database/test.sqlite3",
        },
        migrations: {
            directory: __dirname + "/knex/migrations",
        },
    },
};
