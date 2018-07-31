module.exports = {
  developement: {
    client: 'pg',
    connection: {
      host: '127.0.0.1',
      database: 'timhortons'
    },
    port: 5432,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './createTables/'
    }
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL || `postgres://${process.env.USER}@127.0.0.1:5432/kovoel`,
    port: 5432,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    },
    seeds: {
      directory: './createTables/'
    }
  }
};