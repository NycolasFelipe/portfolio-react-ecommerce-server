const user = require("./userRoute");
const products = require("./productsRoute");
const mail = require("./mailRoute");

const routes = (app) => {
  app.use(user, products, mail);
}

module.exports = routes;