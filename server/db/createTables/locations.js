const locationsJSON = require('../seeds/locations.json');

exports.seed = (knex, Promise) => {
  return knex('locations').del()
    .then(() => {
      return knex('locations').insert(locationsJSON);
    });
};