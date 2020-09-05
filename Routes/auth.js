const express = require('express');
const mongoose = require('mongoose');
const User = require('../Models/auth');
const bcrypt = require('bcryptjs');
const router = express.Router();
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../Middleware/auth');

// sign up: POST
router.post('/signup', async (req, res) => {
  const { name, email, password, branch, isAdmin } = req.body;
  console.log(email, password);
  try {
    const salt = await bcrypt.genSalt(12);
    const encryptedpassword = await bcrypt.hash(password, salt);
    const user = new User({
      name,
      email,
      password: encryptedpassword,
      branch,
      isAdmin,
    });
    await user.save();

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(payload, config.get('JWTSecret'), (err, token) => {
      if (err) {
        throw err;
      }
      res.json({ token });
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).send('Server Token error');
  }
});

//sign in: POST
router.post('/signin', async (req, res) => {
  const { email, password } = req.body;

  try {
    let user = await User.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ errors: [{ msg: 'Email does not exist' }] });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ errors: [{ msg: 'Invalid Credentials' }] });
    }

    // JWT Token

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      config.get('JWTSecret'),

      (err, token) => {
        if (err) throw err;
        res.json({ token });
      }
    );
  } catch (error) {
    console.log(err.message);
    res.status(500).send('Server error');
  }
});

//get user: GET

router.get('/user', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    /// console.log(user);
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

module.exports = router;
