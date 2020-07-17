// import packages
var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

// dotenv
require('dotenv').config();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TeeJ Lockwood' });
});

router.post('/contact_me', function(req, res, next){
  console.log(req.body);
  console.log(process.env.GMAIL_ACCOUNT)
  // authenticate gmail
  let transporter = nodemailer.createTransport({ 
    service: 'gmail', 
    auth: { 
        user: process.env.GMAIL_ACCOUNT, 
        pass: process.env.GMAIL_PASS
      } 
    }); 

  // setup email preferences
  var mailOptions = {
    to: 'thomas.lockwood.jr@gmail.com',
    subject: 'TeeJ Lockwood - New Message',
    text: req.body.name + ' || ' + req.body.phone + ' || ' + req.body.email + ' || ' + req.body.message
  };

  // send mail
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });

  res.send('');
});

module.exports = router;
