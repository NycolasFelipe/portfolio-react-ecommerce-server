const db = require("../config/dbConnect.js");

class ProductsController {
  static getProducts = async (req, res) => {
    db.query('select * from product;', (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).send(data);
    });
  }

  static getProductsById = async (req, res) => {
    const id = req.params.id;
    db.query(`select * from product where ProductId = ${id};`, (err, data) => {
      if (err) {
        return res.status(400).send({ message: `${err.message} - Id do produto não localizado.` });
      }
      return res.status(200).send(data);
    });
  }

  static getProductDetailById = async (req, res) => {
    const id = req.params.id;
    db.query(`select * from product_detail where ProductId = ${id};`, (err, data) => {
      if (err) {
        return res.status(400).send({ message: `${err.message} - Detalhe do produto com não localizado.` });
      }
      return res.status(200).send(data);
    });
  }

  static getProductsByCategory = async (req, res) => {
    const category = req.params.category;
    console.log(category);
    db.query(`select * from product where Category = '${category}';`, (err, data) => {
      if (err) {
        return res.status(400).send({ message: `${err.message} - Não foi possível encontrar um produto com essa categoria.` });
      }
      return res.status(200).send(data);
    });
  }
}

module.exports = ProductsController;