const express = require("express");
const { auth } = require("express-oauth2-jwt-bearer");
const ProductsController = require("../controllers/productsController");

const checkJwt = auth({
  audience: 'https://portfolio-react-ecommerce-server.vercel.app/',
  issuerBaseURL: 'https://ecommerce-web.us.auth0.com/',
  tokenSigningAlg: 'RS256'
});

const products = express.Router();

products
  .get("/products", checkJwt, ProductsController.getProducts)
  .get("/products/:id", checkJwt, ProductsController.getProductsById)
  .get("/products/:id/detail", ProductsController.getProductDetailById)
  .get("/products/category/:category", ProductsController.getProductsByCategory);

module.exports = products;