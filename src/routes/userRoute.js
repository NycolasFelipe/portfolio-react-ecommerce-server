const express = require("express");
const UserController = require("../controllers/userController");

const user = express.Router();

user
  .post("/user/create", UserController.createUser)
  .post("/user", UserController.getUser)
  .patch("/user/update", UserController.updateUser)

module.exports = user;