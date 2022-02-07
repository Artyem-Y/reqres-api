const sgMail = require('@sendgrid/mail');
const config = require('./../config');

sgMail.setApiKey(config.sendGridKey);

const sendNotification = (emails, emailBody) => {

  emails.forEach(email => {
    let msg = {
      to: email,
      from: config.senderEmail,
      subject: 'testing email sending via send grid',
      text: emailBody,
      html: `<strong>${emailBody}</strong>`,
    };

    sgMail
    .send(msg)
    .then(() => {
    }, error => {
      console.error(error);

      if (error.response) {
        console.error(error.response.body)
      }
    });
  })
}


module.exports = {
  sendNotification
}
