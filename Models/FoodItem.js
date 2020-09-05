const mongoose = require('mongoose');
const FoodItemSchema = new mongoose.Schema({
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
    type: String,
    required: truem,
  },
});

module.exports = mongoose.model('food', FoodItemSchema);
