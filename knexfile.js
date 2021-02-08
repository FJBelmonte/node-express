// Update with your config settings.

module.exports = {
    development: {
        client: "sqlite3",
        connection: {
            filename: __dirname + "/knex/dev.sqlite3",
        },
        migrations: {
            directory: __dirname + "/knex/migrations",
        },
    },
    development: {
        client: "sqlite3",
        connection: {
            filename: __dirname + "/knex/test.sqlite3",
        },
        migrations: {
            directory: __dirname + "/knex/migrations",
        },
    },
};
