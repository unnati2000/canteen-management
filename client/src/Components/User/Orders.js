import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
  clearItemFromCart,
  removeFromCart,
  AddToCart,
  PostHistory,
} from '../../actions/cart';
import { getCartTotal } from '../../Utils/cart';
import StripeButton from '../pAYMENT/payment';
const Orders = ({
  cart,
  AddToCart,
  removeFromCart,
  clearItemFromCart,
  PostHistory,
}) => {
  console.log('cart', cart);
  // const [formData, setFormData] = useState({
  //   orders: {
  //     foodItem: '',
  //     name: '',
  //     price: '',
  //     quantity: '',
  //   },
  //   total: '',
  // });

  const total = getCartTotal(cart);

  return (
    <div className="order">
      <div className="orders">
        <h1>Headers</h1>
      </div>
      <div>
        <h1>Personal Info</h1>
        <h3>Name:</h3>
        <h3>Branch:</h3>
      </div>

      <div className="canteen_table">
        <table>
          <tr>
            <th>Food Item Type</th>
            <th>Food name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
          {cart.map((cartItem) => {
            return (
              <div>
                <tr>
                  <td>{cartItem.foodItem}</td>
                  <td>{cartItem.name}</td>
                  <td>{cartItem.price}</td>
                  <td>{cartItem.quantity}</td>
                  <button onClick={() => AddToCart(cartItem)}>+</button>
                  <button onClick={() => removeFromCart(cartItem)}>-</button>
                  <button onClick={() => clearItemFromCart(cartItem._id)}>
                    x
                  </button>
                </tr>
              </div>
            );
          })}
        </table>
        <br />
        <div>{<h1>{getCartTotal(cart)}</h1>}</div>
        <button onClick={() => PostHistory({ cart, total })}>
          Place My order
        </button>
        <StripeButton />
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart.cartItems,
});
export default connect(mapStateToProps, {
  AddToCart,
  removeFromCart,
  clearItemFromCart,
  PostHistory,
})(Orders);
