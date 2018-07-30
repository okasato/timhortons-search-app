const Knex = require('knex');
const config = require('./knexfile');

const knex = Knex({
  client: config.client,
  port: config.port,
  connection: {
    host: config.connection.host,
    database: config.connection.database
  }
});

module.exports = {
  shops: require('./shops')(knex),
  locations: require('./locations')(knex),
  geocode: require('./geocode')(knex)
};