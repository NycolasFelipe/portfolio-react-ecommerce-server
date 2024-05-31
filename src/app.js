const express = require("express");
const cors = require("cors");
const db = require("./config/dbConnect");
const routes = require("./routes/index");

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the remote database');
});

const app = express();
app.use(express.json(), express.urlencoded({ extended: true }), cors({ origin: "*" }));

routes(app);

module.exports = app;