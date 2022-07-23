require("dotenv").config();

// Update with your config settings.
module.exports = {
  development: {
    client: "mysql2",
    connection: {
      database: "knex",
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
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
