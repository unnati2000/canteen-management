const express = require('express');
const mongoose = require('mongoose');
const User = require('../Models/auth');
const Food = require('../Models/FoodItem');
const router = express.Router();
const auth = require('../Middleware/auth');
const { check, validationResult } = require('express-validator');

// add item : POST
router.post(
  '/additem',
  [
    auth,
    check('name', 'FoodName is required'),
    check('foodItem', 'Food category is required'),
    check('price', 'Price is required'),
    check('quantity', 'Qunatity is required'),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const id = req.user.id;
      const isadmin = await User.findById(id);
      if (isadmin.isAdmin === true) {
        const { foodItem, name, price, quantity } = req.body;
        const food = new Food({
          foodItem,
          name,
          price,
          quantity,
        });

        await food.save();
        res.json('added item');
      } else {
        res.json('Unauthorized');
      }
    } catch (error) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// delete item: DELETE

router.delete('/delete/:id', auth, async (req, res) => {
  try {
    const id = req.user.id;
    const isadmin = await User.findById(id);
    if (isadmin.isAdmin === true) {
      const del = await Food.findByIdAndDelete(req.params.id);
      res.json('deleted');
    } else {
      res.json('unauthorised');
    }
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// get chinese: GET

router.get('/chinese', auth, async (req, res) => {
  try {
    const chinese = await Food.find({ foodItem: 'chinese' });
    res.json(chinese);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// get breakfast: GET
router.get('/breakfast', auth, async (req, res) => {
  try {
    const breakfast = await Food.find({ foodItem: 'breakfast' });
    res.json(breakfast);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// get CHAT: GET
router.get('/chat', auth, async (req, res) => {
  try {
    const chat = await Food.find({ foodItem: 'chat' });
    res.json(chat);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// get Indian: GET
router.get('/indian', auth, async (req, res) => {
  try {
    const indian = await Food.find({ foodItem: 'indian' });
    res.json(indian);
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
