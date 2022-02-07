require('dotenv').config();

const config = {
  port: parseInt(process.env.PORT, 10) || 3000,
  env: process.env.ENV || 'local',
  senderEmail: process.env.SENDEREMAIL,
  sendGridKey: process.env.SENDGRID_API_KEY,
};

module.exports = config;
