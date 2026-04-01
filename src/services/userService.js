const userRepository = require('../repositories/userRepository');
const emailService = require('../utils/emailService');

async function registerUser(userData) {
  const user = await userRepository.save(userData); 
  await emailService.sendWelcomeEmail(user.email); 
  return user; 
}

module.exports = { registerUser };