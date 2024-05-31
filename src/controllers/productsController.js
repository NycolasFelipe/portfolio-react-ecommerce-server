const db = require("../config/dbConnect");

class ProductsController {
  static getProducts = async (req, res) => {
    const query = "SELECT * FROM product";
    db.query(query, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).send(data);
    });
  }

  static getProductsById = async (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM product WHERE ProductId = ?";
    db.query(query, [id], (err, data) => {
      if (err) {
        return res.status(400).send({ message: `${err.message} - Id do produto não localizado.` });
      }
      return res.status(200).send(data);
    });
  }

  static getProductDetailById = async (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM product_detail WHERE ProductId = ?";
    db.query(query, [id], (err, data) => {
      if (err) {
        return res.status(400).send({ message: `${err.message} - Detalhe do produto com não localizado.` });
      }
      return res.status(200).send(data);
    });
  }

  static getProductsByCategory = async (req, res) => {
    const { category } = req.params;
    const query = "SELECT * FROM product WHERE Category = ?";
    db.query(query, [category], (err, data) => {
      if (err) {
        return res.status(400).send({ message: `${err.message} - Não foi possível encontrar um produto com essa categoria.` });
      }
      return res.status(200).send(data);
    });
  }
}

module.exports = ProductsController;