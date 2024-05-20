const express = require("express");
const ProductsController = require("../controllers/productsController.js");

const products = express.Router();

products
  .get("/products", ProductsController.listarProdutos)
  .get("/products/:id", ProductsController.listarProdutosPorId);

module.exports = products;