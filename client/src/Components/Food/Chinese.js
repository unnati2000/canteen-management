import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetAllSelectedItems } from '../../actions/food';
import { AddToCart } from '../../actions/cart';

const Chinese = ({ GetAllSelectedItems, AddToCart, food: { food } }) => {
  useEffect(() => {
    GetAllSelectedItems();
  }, [GetAllSelectedItems]);
  if (food) {
    console.log(food);
  } else {
    console.log('wait');
  }

  return (
    <div className="food_div">
      {food ? (
        <div>
          <nav className="chinese_nav">
            <h1>{food.foodItem}</h1>
            <a href="">Cart</a>
          </nav>
          <div className="menu">
            <div className="food_menu">
              {food.length > 0 ? (
                food.map((item) => (
                  <div className="food_item" key={item._id}>
                    <img src="https://choosinfo.net/wp-content/uploads/2020/03/AN138-Pizza-732x549-Thumb_0.jpg" />
                    <h2>{item.name}</h2>
                    <h3>₹ {item.price}</h3>
                    <h4>Quantity: {item.quantity}</h4>
                    <button onClick={() => AddToCart(item)}>Add to cart</button>
                    <Link to="/orders">Order Now</Link>
                  </div>
                ))
              ) : (
                <h1>No Items Available</h1>
              )}
            </div>
          </div>
          <footer> </footer>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  food: state.food,
});
export default connect(mapStateToProps, { GetAllSelectedItems, AddToCart })(
  Chinese
);
