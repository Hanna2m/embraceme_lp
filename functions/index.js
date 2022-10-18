const functions = require("firebase-functions");
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

let  transporter = nodemailer.createTransport({
  host: "smtp.sendgrid.net",
  port: 587,
  secure: false,
  auth: {
    user: "apikey",
    pass: process.env.ACCESS_KEY_SENDGRID
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
