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
    const order = new Order({
      user,
      orders: req.body.cart,
      totalPrice: req.body.total,
    });
    await order.save();
    res.json('sahi ja rahe h');
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.get('/orderplaced', auth, async (req, res) => {
  try {
    const pendingOrders = await Order.find({ isOpen: true }).populate(
      'user',
      'name branch'
    );
    res.json(pendingOrders);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.put('/orderplaced/:id', auth, async (req, res) => {
  try {
    const order = await Order.findOneAndUpdate(
      { _id: req.params.id },
      { isOpen: false },
      { new: true }
    );
    res.json(order);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

router.post('/orderplaced/:id', auth, async (req, res) => {
  try {
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
});

module.exports = router;
