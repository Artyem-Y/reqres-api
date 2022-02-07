const express = require('express');
const router = express.Router();
const emailService = require('../email/email_service');

/* POST emails. */
router.post('/send', (req, res, next) => {
  try {
    const {emails, emailBody} = req.body
    emailService.sendNotification(emails, emailBody)
    res.send('emails sent');
  } catch(err) {
    next(err)
  }
});

module.exports = router;
