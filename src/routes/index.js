const user = require("./userRoute");
const products = require("./productsRoutes");

const routes = (app) => {
  app.use(user, products);
}

module.exports = routes;