const { Pool } = require("pg");

const pool = new Pool({
  host: "db",
  port: 5432,
  user: "root",
  password: "2405",
  database: "clients",
});

module.exports = pool;
