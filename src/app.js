const express = require('express');
const app = express();
const { registerUser } = require('./services/userService');

app.use(express.json());

app.post('/users', async (req, res) => {
  try {
    const user = await registerUser(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = app;