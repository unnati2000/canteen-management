const mongoose = require('mongoose');
const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  orders: [
    {
      foodItem: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      quantity: {
        type: Number,
        required: true,
      },
    },
  ],
  totalPrice: {
    type: Number,
  },
  isOpen: {
    type: Boolean,
    default: true,
  },
  date: {
    type: Date,
  },
});

module.exports = mongoose.model('order', OrderSchema);
