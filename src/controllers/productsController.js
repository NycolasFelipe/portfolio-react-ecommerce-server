const db = require("../config/dbConnect.js");

class ProductsController {
  static listarProdutos = async (req, res) => {
    db.query('select * from product', (err, rows) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).send(rows);
    });
  }

  static listarProdutosPorId = async (req, res) => {
    const id = req.params.id;
    db.query('select * from product where ProductId = ' + id, (err, rows) => {
      if (err) {
        return res.status(400).send({ message: `${err.message} - Id do produto não localizado.` });
      }
      return res.status(200).send(rows);
    });
  }
}

module.exports = ProductsController;