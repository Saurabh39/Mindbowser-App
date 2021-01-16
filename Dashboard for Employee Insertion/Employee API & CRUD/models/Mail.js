var nodemailer = require('nodemailer');


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'saurabhnavade@gmail.com',
    pass: 'sunita9890'
  }
});

var mailOptions = {
  from: 'saurabhnavade@gmail.com',
  to: 'saurabhnavade@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});