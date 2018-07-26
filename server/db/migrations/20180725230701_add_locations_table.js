
exports.up = function(knex, Promise) {
  return knex.schema.createTable('locations', (t) => {
    t.increments()
      .index();
    t.string('name', 255)
      .unique()
      .notNullable()
      .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('locations');
};
