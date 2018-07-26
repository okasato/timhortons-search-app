module.exports = knex => ({
  list: require('./list')(knex)
});