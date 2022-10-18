const functions = require("firebase-functions");
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
// const { isEmailIdentifier } = require("firebase-admin/lib/auth/identifier");
admin.initializeApp();

let  transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "apikey",
    pass: "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"
  },
});

exports.sendEmail = functions.https.onRequest((request, response) => {
  const email_from = request.query.email_from
  const message = request.query.message

  const mailOptions = {
    from: 'hanna2mazur@gmail.com',
    to: 'hanna2mazur@gmail.com',
    subject: 'Message from landing page',
    html: `${message} <br><br> From ${email_from}`
  }

  transporter.sendMail(mailOptions, (error, info) => {
    if(error) {
      console.log(`Error: ${error.toString()}`)
      response.send(error.toString())
    }
    response.send('Your message was successfuly sent')
  })
})
