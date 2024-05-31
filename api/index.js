const app = require("../src/app");

const port = process.env.PORT;
app.listen(port);

module.exports = app;