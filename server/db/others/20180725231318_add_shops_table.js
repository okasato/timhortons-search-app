
exports.up = function(knex, Promise) {
  return knex.schema.createTable('shops', (t) => {
    t.string('closeTime', 255)
      .notNullable()
      .index();
    t.string('driveThruCloseTime', 255)
      .index();
    t.string('floor', 255)
      .index();    
    t.increments()
      .index();  
    t.string('name', 255)
      .notNullable()
      .index();
    t.string('phone', 255)
      .notNullable()
      .index();
    t.string('postalCode', 255)
      .notNullable()
      .index();
    t.string('street', 255)
      .notNullable()
      .index();
    t.integer('location_id')
      .unsigned()
      .notNullable()
      .index();
    t.foreign('location_id')
      .references('id')
      .inTable('locations');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('shops');
};
