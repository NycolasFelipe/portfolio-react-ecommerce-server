const express = require("express");
const UserController = require("../controllers/userController");

const user = express.Router();

user
  .post("/user/create", UserController.createUser)
  .get("/user/:id", UserController.getUserById)
  .patch("/user/:id", UserController.updateUserById)

module.exports = user;