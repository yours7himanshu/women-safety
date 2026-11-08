const nodemailer = require('nodemailer');

const sendEmail = async (emails, message, env = {}) => {
  const user = (env.EMAIL_USER || process.env.EMAIL_USER || 'dinkarhimanshu78@gmail.com').trim();
  const pass = (env.EMAIL_PASS || process.env.EMAIL_PASS || '').trim();

  if (!pass) {
    throw new Error('EMAIL_PASS environment variable is not configured.');
  }

  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    pool: false,
    auth: {
      user,
      pass,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  const mailOptions = {
    from: `"Women Safety Alert" <${user}>`,
    to: emails,
    subject: 'Emergency Alert',
    text: message,
  };

  return await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
