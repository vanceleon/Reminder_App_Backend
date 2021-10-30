
exports.up = function(knex) {
    return knex.schema.createTable("reminders", tbl => {
        tbl.increments();
        tbl
            .string('name', 127)
            .notNullable();
      });
    };

exports.down = function(knex) {
    return knex.schema.dropTableIfExists("reminders");
};
