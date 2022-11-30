const logger = require('../config/logger');
const { Event } = require('../models');
const sgMail = require('@sendgrid/mail');

sgMail.setApiKey('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');

const sendEmail = async (to, subject, text) => {
  const message = {
    from: 'rhythmshandlya@gmail.com',
    to,
    subject,
    text,
    html: `<p>${text}<p>`,
  };
  try {
    const res = await sgMail.send(message);
  } catch (e) {
    console.log(e);
  }
};

const sendResetPasswordEmail = async (to, token) => {
  const subject = 'Reset password';
  // replace this url with the link to the reset password page of your front-end app
  const resetPasswordUrl = `http://link-to-app/reset-password?token=${token}`;
  const text = `Dear user,
To reset your password, click on this link: ${resetPasswordUrl}
If you did not request any password resets, then ignore this email.`;
  await sendEmail(to, subject, text);
};

const sendVerificationEmail = async (to, token) => {
  const subject = 'Email Verification';
  // replace this url with the link to the email verification page of your front-end app
  const verificationEmailUrl = `http://link-to-app/verify-email?token=${token}`;
  const text = `Dear user,
To verify your email, click on this link: ${verificationEmailUrl}
If you did not create an account, then ignore this email.`;
  await sendEmail(to, subject, text);
};

const sendCertificateViaEmail = async (id) => {
  const event = await Event.findById(id);
  event.participants.forEach(async (participant, index) => {
    if (participant.email)
      await sendEmail(
        participant.email,
        'Certificate for ' + event.name,
        `http://localhost:3000/certificate/${id}/${index}`
      );
  });
};

module.exports = {
  sendEmail,
  sendResetPasswordEmail,
  sendVerificationEmail,
  sendCertificateViaEmail,
};
