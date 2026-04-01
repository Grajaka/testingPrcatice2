const emailService = {
  sendWelcomeEmail: async (email) => {
    console.log(`Sending email to ${email}...`);
    return true;
  }
};

module.exports = emailService;