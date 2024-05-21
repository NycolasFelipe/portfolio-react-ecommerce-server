const mysql = require('mysql2');
require("dotenv").config();

const db = mysql.createConnection({
  database: process.env.DB_NAME,
  uri: process.env.DB_URI,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

module.exports = db;