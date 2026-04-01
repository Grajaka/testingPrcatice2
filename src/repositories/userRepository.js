const userRepository = {
  save: async (userData) => {
    // In a real scenario, this would be: return await db.users.create(userData);
    return { id: Date.now(), ...userData };
  }
};

module.exports = userRepository;