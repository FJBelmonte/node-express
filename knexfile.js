import { fileURLToPath } from "url";
import path from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
// Update with your config settings.
const config = {
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

export default config;
