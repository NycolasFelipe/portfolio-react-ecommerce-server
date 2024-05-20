const app = require("./src/app.js");

const port = process.env.PORT;
app.listen(port);

module.exports = app;