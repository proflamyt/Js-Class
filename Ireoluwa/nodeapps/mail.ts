

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'righteousnessakinbola@gmail.com',
    pass: 'ybfulqmjhkvfawmv'
  }
});

var mailOptions = {
  from: 'righteousnessakinbola@gmail.com',
  to: 'ponraider23@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error:string, info:any){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});