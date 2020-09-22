const express = require('express');
const mongoose = require('mongoose');
const User = require('../Models/auth');
const Food = require('../Models/FoodItem');
const Order = require('../Models/Order');
const router = express.Router();
const auth = require('../Middleware/auth');

router.post('/orders', auth, async (req, res) => {
  try {
    console.log('entry');
    const { orders, totalPrice } = req.body;
    console.log('read');
    const user = req.user.id;
    console.log('user');
    const order = new Order({
      user,
      orders,
      totalPrice,
    });

    await order.save();
    console.log('sahi h');
    res.json('sahi ja rae h');
  } catch (error) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
