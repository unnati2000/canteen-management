const express = require('express');
const Order = require('../Models/Order');
const router = express.Router();
const auth = require('../Middleware/auth');

router.get('/orders', auth, async (req, res) => {
  try {
    const orders = await Order.find();
    res.json(orders);
  } catch (err) {
    console.error(err);
    res.send('Bruh moment');
  }
});

router.get('/userorder', auth, async (req, res) => {
  try {
    const result = await Order.find({ user: req.user.id });
    res.json(result);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.post('/orders', auth, async (req, res) => {
  try {
    const user = req.user.id;
    const d = new Date();
    const day = d.getDate();
    const m = d.getMonth();
    const y = d.getFullYear();
    const order = new Order({
      user,
      orders: req.body.cart,
      totalPrice: req.body.total,
      date: day + m + y,
    });
    await order.save();
    res.json('sahi ja rahe h');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
