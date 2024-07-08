const db = require("../config/dbConnect");
const getId = require("../scripts/getId");

class UserController {
  /**
   * This function takes user data from the request body, attempts to extract an ID, and inserts
   * the user information into the database.
   * 
   * @description
   * - HTTP Method: POST
   * - PATH: `/user/create`
   * 
   * @param {object} req Request object containing information about the incoming HTTP request.
   * @param {object} res Response object used to send a response back to the client.
   * @returns {void}
   * 
   * @author Nycolas Felipe
  */

  static createUser = async (req, res) => {
    try {
      // Extract user ID
      const data = req.body;
      const id = getId(data);

      // Prepare SQL and check for successful insertion
      const query = "INSERT INTO user (UserId, PhoneNumber, Address, FavoriteProducts) values (?)";
      const values = [[id, "", "{}", "[]"]];
      db.query(query, values, (error) => {
        if (error) {
          console.error("Failed to create user");
        } else {
          return res.status(200).send({ message: "User created successfully." });
        }
      });
    } catch (error) {
      if (error.code === 'ER_DUP_ENTRY') {
        return res.status(202).send({ message: "User already exists." });
      } else {
        console.error("Error creating user:", error);
        return res.status(500).send({ message: "Error creating user" });
      }
    }
  }

  /**
   * This function retrieves user information from a database based on a provided token.
   * It extracts a user ID from the token, performs a database query, and sends the user data
   * back in the response if found.
   * 
   * @description
   * - HTTP Method: POST
   * - PATH: `/user`
   * 
   * @param {object} req Request object containing information about the incoming HTTP request.
   * @param {object} res Response object used to send a response back to the client.
   * @returns {void}
   * 
   * @author Nycolas Felipe
  */

  static getUser = async (req, res) => {
    try {
      // Validate token
      if (!req.body.token) {
        throw new Error("Missing token in request body");
      }

      // Extract user ID
      const { token } = req.body;
      const id = getId(token);

      // Prepare SQL and check for successful request
      const query = "SELECT * FROM user WHERE UserId = ?";
      db.query(query, id, (error, data) => {
        if (error) {
          console.error("Failed to get user");
        } else {
          // Check for user existence
          if (data.length === 0) {
            return res.status(404).send({ message: "User not found" });
          }
          return res.status(200).send(data);
        }
      });
    } catch (error) {
      console.error("Error getting user:", error);
      return res.status(500).send({ message: "Error retrieving user" });
    }
  }

  /**
   * This function updates user information from a database based on a provided token.
   * It extracts a user ID from the token, prepares an update based on the provided data,
   * and sends a success or error response.
   * 
   * @description
   * - HTTP Method: PATCH
   * - PATH: `/user/update`
   * 
   * @param {object} req Request object containing information about the incoming HTTP request.
   * @param {object} res Response object used to send a response back to the client.
   * @returns {void}
   * 
   * @author Nycolas Felipe
  */

  static updateUser = async (req, res) => {
    try {
      // Validate token
      if (!req.body.token) {
        throw new Error("Missing token in request body");
      }

      // Extract user ID and prepare data
      const { token } = req.body;
      const { obj } = req.body;
      const id = getId(token);

      const updateData = {};
      if (obj?.Address) {
        updateData.address = JSON.stringify(obj.Address);
      }
      if (obj?.PhoneNumber !== undefined) {
        updateData.phoneNumber = obj.PhoneNumber;
      }
      if (obj?.FavoriteProducts) {
        updateData.favoriteProducts = JSON.stringify(obj.FavoriteProducts);
      }

      // Prepare SQL statement with placeholders
      let query = "UPDATE user SET ";
      const entries = [];
      const values = [];
      Object.entries(updateData).forEach(([field, value]) => {
        entries.push(`${field} = ?`);
        values.push(value);
      });
      query += entries.join(", ");
      query += " WHERE UserId = ?";
      values.push(id);

      // Execute update query
      db.query(query, values, (error) => {
        if (error) {
          console.error("Failed to update user");
        }
        return res.status(200).send({ message: "User information updated successfully." });
      });
    } catch (error) {
      console.error("Error updating user:", error);
      return res.status(500).send({ message: "Error updating user information" });
    }
  }
}

module.exports = UserController;