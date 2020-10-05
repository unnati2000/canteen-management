import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import {
  clearItemFromCart,
  removeFromCart,
  AddToCart,
  PostHistory,
} from '../../actions/cart';
import { getCartTotal } from '../../Utils/cart';
import StripeButton from '../pAYMENT/payment';
import NavBar from '../Navbar/Navbar';
const Orders = ({
  auth: { user },
  cart,
  AddToCart,
  removeFromCart,
  clearItemFromCart,
  PostHistory,
}) => {
  const total = getCartTotal(cart);
  const history = useHistory();
  return (
    <div className="order">
      <div className="orders">
        <div className="food_title">
          <div className="food_h1">
            <h1>Orders</h1>
          </div>
          <div className="navbar">
            <NavBar />
          </div>
        </div>
      </div>
      {user ? (
        <div className="personal">
          <h1>Personal Info</h1>
          <img
            src="https://img2.pngio.com/pamela-wilkins-country-stitches-gravatar-png-400_400.png"
            alt="User avatar"
          />
          <h3>Name: {user.name}</h3>
          <h3>Branch: {user.branch}</h3>
        </div>
      ) : (
        ''
      )}

      <div className="canteen_table">
        <table>
          <tr className="title_table">
            <th>Food Item Type</th>
            <th>Food name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Increase</th>
            <th>Decrease</th>
            <th>Clear Cart</th>
          </tr>
          {cart.map((cartItem) => {
            return (
              <tr className="content_table">
                <th>{cartItem.foodItem}</th>
                <th>{cartItem.name}</th>
                <th>{cartItem.price}</th>
                <th>{cartItem.quantity}</th>
                <th>
                  <button className="add" onClick={() => AddToCart(cartItem)}>
                    +
                  </button>
                </th>
                <th>
                  <button
                    className="remove"
                    onClick={() => removeFromCart(cartItem)}
                  >
                    -
                  </button>
                </th>
                <th>
                  <button
                    className="clear"
                    onClick={() => clearItemFromCart(cartItem._id)}
                  >
                    x
                  </button>
                </th>
              </tr>
            );
          })}
        </table>

        <br />

        <br />
      </div>
      <div>
        {<h1 className="get_total">Total Price: {getCartTotal(cart)}</h1>}
      </div>

      <div>
        <StripeButton />

        <br />
        <br />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart.cartItems,
  auth: state.auth,
});
export default connect(mapStateToProps, {
  AddToCart,
  removeFromCart,
  clearItemFromCart,
  PostHistory,
})(Orders);
