// Update with your config settings.
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      database: "knex",
      user: "micha",
      password: "micha1?",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "db/migrations",
    },
    seeds: {
      directory: "db/seeds",
    },
  },
};
