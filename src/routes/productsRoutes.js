const express = require("express");
const ProductsController = require("../controllers/productsController.js");

const products = express.Router();

products
  .get("/products", ProductsController.getProducts)
  .get("/products/:id", ProductsController.getProductsById)
  .get("/products/:id/detail", ProductsController.getProductDetailById);

module.exports = products;