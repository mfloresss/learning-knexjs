exports.up = function (knex) {
  return knex.schema.createTable("user", (table) => {
    table.increments("id");
    table.string("name").notNullable();
    table.integer("age").notNullable();
    table.string("email").notNullable().unique();
    table.string("phone").notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTable("user");
};
