const shopsJSON = require('../seeds/shops.json');

exports.seed = (knex, Promise) => {
  return knex('shops').del()
    .then(() => {
      return knex('shops').insert(shopsJSON);
    });
};