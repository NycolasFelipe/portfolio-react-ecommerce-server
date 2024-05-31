const express = require("express");
const ProductsController = require("../controllers/productsController");

const products = express.Router();

products
  .get("/products", ProductsController.getProducts)
  .get("/products/:id", ProductsController.getProductsById)
  .get("/products/:id/detail", ProductsController.getProductDetailById)
  .get("/products/category/:category", ProductsController.getProductsByCategory);

module.exports = products;