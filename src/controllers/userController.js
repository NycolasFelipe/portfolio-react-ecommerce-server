const db = require("../config/dbConnect");

class UserController {
  static createUser = async (req, res) => {
    const data = req.body;
    const id = data?.sub?.replace("google-oauth2|", "");
    const query = "INSERT INTO user (UserId, PhoneNumber, Address) values (?)";
    const values = [[id, "", "{}"]];
    db.query(query, values, (err, data) => {
      if (err?.code === "ER_DUP_ENTRY") {
        return res.status(202).send({ message: "Usuário já existe." });
      }
      else if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).send({ message: `Usuário criado com sucesso.` });
    });
  }

  static getUser = async (req, res) => {
    const data = req.body;
    const id = data?.sub?.replace("google-oauth2|", "");
    const query = "SELECT * FROM user WHERE UserId = ?";
    db.query(query, id, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).send(data);
    });
  }

  static updateUser = async (req, res) => {
    const { data } = req.body;
    const id = data?.sub?.replace("google-oauth2|", "");
    const address = JSON.stringify(req.body.obj.Address);
    const phoneNumber = req.body.obj.PhoneNumber;
    const query = "UPDATE user SET PhoneNumber = ?, Address = ? WHERE UserId = ?";
    const values = [[phoneNumber], [address], [id]];
    db.query(query, values, (err, data) => {
      if (err) {
        return res.status(500).json(err);
      }
      return res.status(200).send({ message: `Informações do usuário atualizadas com sucesso.` });
    });
  }
}

module.exports = UserController;