const Knex = require('knex');
const config = require('./knexfile');
const environment = process.env.NODE_ENV || 'development';
const dbConfig = config[environment];

const knex = Knex(dbConfig);
// const knex = Knex({
//   client: config.client,
//   port: config.port,
//   connection: {
//     host: config.connection.host,
//     database: config.connection.database
//   }
// });

module.exports = {
  shops: require('./shops')(knex),
  locations: require('./locations')(knex),
  geocode: require('./geocode')(knex)
};