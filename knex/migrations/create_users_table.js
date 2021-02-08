exports.up = function (knex) {
    return knex.schema.createTable("user", (table) => {
        table.increments();
        table.string("username").notNullable();
        table.string("password").notNullable();
        table.string("role").notNullable();
    });
};

exports.down = function (knex) {
    return knex.schema.dropTable("user");
};
