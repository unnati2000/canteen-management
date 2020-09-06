const mongoose = require('mongoose');
const HistorySchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
  },
  orders: [
    {
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
      date: {
        type: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model('history', HistorySchema);
