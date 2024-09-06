const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'dinkarhimanshu78@gmail.com',
    pass: '',  // Use app-specific password if needed
  },
});

const sendEmail = (emails, message) => {
  const mailOptions = {
    from: 'dinkarhimanshu78@gmail.com',
    to: emails,
    subject: 'Emergency Alert',
    text: message,
  };

 return new Promise((resolve,reject)=>{
  transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      return reject(error);
    }
    resolve(info);
  });
 });
};

module.exports = sendEmail;
