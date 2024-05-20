const mysql = require('mysql2');
require("dotenv").config();

const db = mysql.createConnection({
  database: "products",
  uri: process.env.URI,
  host: process.env.HOST,
  port: process.env.SERVER_PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
});

module.exports = db;