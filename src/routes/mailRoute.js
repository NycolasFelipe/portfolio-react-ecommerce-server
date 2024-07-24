const express = require("express");
const MailController = require("../controllers/mailController");

const mail = express.Router();

mail.post("/mail/post", MailController.postMail);

module.exports = mail;