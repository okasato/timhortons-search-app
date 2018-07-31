const Knex = require('knex');
const config = require('./knexfile');
const environment = process.env.NODE_ENV || 'development';
const dbConfig = config[environment];

const knex = Knex(dbConfig);

module.exports = {
  shops: require('./shops')(knex),
  locations: require('./locations')(knex),
  geocode: require('./geocode')(knex)
};