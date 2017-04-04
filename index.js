const express = require('express')
const nodemailer = require('nodemailer');
const config = require('./config')

const app = express()


// create reusable transporter object using the default SMTP transport

// Don't forget to enable 'less secure apps' on gmail
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: config.email,
        pass: config.password
    }
});

// setup email data with unicode symbols
let mailOptions = {
    from: '"Brian Nodemailer" <node@mailer.com>', // sender address
    to: 'someperson@email.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world ?', // plain text body
    html: '<b>Hello world ?</b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message %s sent: %s', info.messageId, info.response);
});

app.listen(3000)