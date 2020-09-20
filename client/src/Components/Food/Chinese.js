import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { GetAllSelectedItems, PostOrders } from '../../actions/food';

const Chinese = ({ GetAllSelectedItems, PostOrders, food: { food } }) => {
  useEffect(
    (id) => {
      GetAllSelectedItems();
      PostOrders(id);
    },
    [GetAllSelectedItems]
  );
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
          </nav>
          <div className="menu">
            <div className="food_menu">
              {food.length > 0 ? (
                food.map((item) => (
                  <div className="food_item">
                    <img src="https://choosinfo.net/wp-content/uploads/2020/03/AN138-Pizza-732x549-Thumb_0.jpg" />
                    <h2>{item.name}</h2>
                    <h3>₹ {item.price}</h3>
                    <h4>Quantity: {item.quantity}</h4>
                    <Link to={PostOrders(`${item._id}`)}>Order Now</Link>
                  </div>
                ))
              ) : (
                <h1>No Items Availablw</h1>
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
export default connect(mapStateToProps, { GetAllSelectedItems, PostOrders })(
  Chinese
);
