const products = require("./productsRoutes.js");

const routes = (app) => {
  app.use(products);
}

module.exports = routes;