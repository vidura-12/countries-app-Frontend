const express = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');

const router = express.Router();

// Sign Up
router.post('/signup', async (req, res) => {
  const { username, password, confirmPassword } = req.body;
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    const exists = await User.findOne({ username });
    if (exists) return res.status(409).json({ message: 'User already exists' });

    const hashed = await bcrypt.hash(password, 10);
    const newUser = new User({ username, password: hashed, history: [] });
    await newUser.save();
    res.status(201).json({ message: 'Signup successful' });
  } catch (err) {
    res.status(500).json({ message: 'Error signing up' });
  }
});

// Login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: 'Invalid credentials' });

    res.status(200).json({ message: 'Login successful', user: { username } });
  } catch (err) {
    res.status(500).json({ message: 'Error logging in' });
  }
});


router.get('/history/:username', async (req, res) => {
    const { username } = req.params;
    if (!username) return res.status(400).json({ message: 'Username is required' });
  
    try {
      const user = await User.findOne({ username });
      if (!user) return res.status(404).json({ message: 'User not found' });
  
      res.status(200).json({ history: user.history });
    } catch (err) {
      res.status(500).json({ message: 'Error fetching history' });
    }
  });
  


router.post('/history/:username', async (req, res) => {
  const { username } = req.params;
  const { term } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.history.unshift(term);
    user.history = [...new Set(user.history)].slice(0, 10);
    await user.save();
    res.status(200).json({ history: user.history });
  } catch (err) {
    res.status(500).json({ message: 'Error updating history' });
  }
});


module.exports = router;
