const express = require("express");
const mongoose = require("mongoose");
const User = require("../Models/Auth");
const Food = require("../Models/FoodItem");
const router = express.Router();
const auth = require("../Middleware/auth");
const upload = require("../Middleware/cloudinary");
const { check, validationResult } = require("express-validator");

// add item : POST
router.post(
  "/additem",
  [
    auth,
    upload,
    [
      auth,
      check("name", "FoodName is required"),
      check("foodItem", "Food category is required"),
      check("price", "Price is required"),
      check("quantity", "Qunatity is required"),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const { foodItem, name, price } = req.body;

      // const food = {
      //   foodItem,
      //   name,
      //   price,
      //   image: req.file.path,
      // };

      // const ifexists = await Food.findById(id);
      // if (ifexists) {
      //   ifexists = await Food.findOneAndUpdate({ $set: food }, { $new: true });
      // }

      // ifexists = new Food(food);
      // await ifexists.save();

      const food = new Food({
        foodItem,
        name,
        price,
        image: req.file.path,
      });
      await food.save();
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Server Error");
    }
  }
);

// delete item: DELETE

router.delete("/delete/:id", auth, async (req, res) => {
  try {
    const del = await Food.findByIdAndDelete(req.params.id);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// get : GET

router.get("/:food", auth, async (req, res) => {
  const food = req.params.food;
  try {
    const foodItems = await Food.find({ foodItem: food });
    res.json(foodItems);
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
