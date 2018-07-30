
exports.up = function(knex, Promise) {
  return knex.schema.createTable('geocode', (t) => {
    t.increments()
      .index();
    t.string('address', 255)
      .notNullable()
      .index(); 
    t.string('position', 255)
      .notNullable()
      .index();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('geocode');
};
