const express = require('express');
const mongoose = require('mongoose');
const User = require('../Models/auth');
const Food = require('../Models/FoodItem');
const Order = require('../Models/Order');
const router = express.Router();
const auth = require('../Middleware/auth');

router.put('/orders/:id', auth, async (req, res) => {
  try {
    const id = req.params.id;
    const order = await Food.findById(id);
    const { foodItem, food, price, quantity } = order;
    const orderfood = await Order.findOne({ user: req.user.id });
    orderfood.orders.unshift({ foodItem, food, price, quantity });
    res.json({ foodItem, food, price, quantity });
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});
