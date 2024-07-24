require("dotenv").config();

class MailController {
  /**
   * Asynchronously handles incoming email contact messages and sends them using SendGrid.
   * 
   * @description
   * - HTTP Method: POST
   * - PATH: `/mail/post`
   * 
   * @param {object} req Request object containing information about the incoming HTTP request.
   * @param {object} res Response object used to send a response back to the client.
   * @returns {void}
   * 
   * @author Nycolas Felipe
  */

  static postMail = async (req, res) => {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const { msg } = req.body;
    const { userMail } = req.body;
    msg.html = `
      <h2>${msg.subject}</h2>
      <p>${msg.text}<p>
      <br>
      <p>Email enviado por <strong>${userMail}</strong></p>
    `;

    sgMail.send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      });
  }
}

module.exports = MailController;