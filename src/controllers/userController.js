const db = require("../config/dbConnect");

class UserController {
  static createUser = async (req, res) => {
    const { userId } = req.body;
    const query = "INSERT INTO user (UserId, PhoneNumber, Address) values (?)";
    const values = [[userId, "", ""]];
    db.query(query, values, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).send({ message: `Usuário criado com sucesso.` });
    });
  }

  static getUserById = async (req, res) => {
    const { id } = req.params;
    const query = "SELECT * FROM user WHERE UserId = ?";
    db.query(query, id, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).send(data);
    });
  }

  static updateUserById = async (req, res) => {
    const { id } = req.params;
    const { field, data } = req.body;
    let query;

    switch (field) {
      case "phone":
        query = "UPDATE user SET PhoneNumber = ? WHERE UserId = ?";
        break;
      case "address":
        query = "UPDATE user SET Address = ? WHERE UserId = ?";
        break;
      default:
        break;
    }

    const values = [[data], [id]];
    db.query(query, values, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).send({ message: `Informações do usuário atualizadas com sucesso.` });
    });
  }
}

module.exports = UserController;