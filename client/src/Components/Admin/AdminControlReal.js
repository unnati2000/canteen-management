import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { GetAllSelectedItems } from '../../actions/admin';

const AdminControlReal = ({ GetAllSelectedItems, items: { items } }) => {
  useEffect(() => {
    GetAllSelectedItems('/food');
  }, []);

  return (
    <div className="food_div">
      {items ? (
        <div>
          <nav className="chinese_nav">
            <h1>{items.foodItem}</h1>
          </nav>
          <div className="menu">
            <div className="food_menu">
              {items.length > 0 ? (
                <div className="items_item">
                  <img src="https://choosinfo.net/wp-content/uploads/2020/03/AN138-Pizza-732x549-Thumb_0.jpg" />
                  <h2>{items.name}</h2>
                  <h3>₹ {items.price}</h3>
                  <h4>Quantity: {items.quantity}</h4>
                  <button>Order Now</button>
                </div>
              ) : (
                <h1>No Items Availablw</h1>
              )}
            </div>
          </div>
          <footer></footer>
        </div>
      ) : (
        <h1>Loading</h1>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  items: state.items,
});
export default connect(mapStateToProps, { GetAllSelectedItems })(
  AdminControlReal
);
