const express = require("express");
const cors = require("cors");
const db = require("./config/dbConnect.js");
const routes = require("./routes/index.js");

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to the remote database');
});

const app = express();
app.use(express.json(), cors({ origin: "*" }));

routes(app);

module.exports = app;