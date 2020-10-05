import React from 'react';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner';
import { PostHistory } from '../../actions/cart';
import cart from '../../reducer/cart';
import { getCartTotal } from '../../Utils/cart';
import { useHistory } from 'react-router-dom';
const Payment = ({ getCartTotal, cart }) => {
  const history = useHistory();
  let total = 0;
  cart.map((item) => {
    total = total + item.price * item.quantity;
  });
  return (
    <div>
      <div className="chinese_nav">Payment Please</div>

      {cart ? (
        <div className="canteen_table">
          <table>
            <tr className="title_table">
              <th>Food Item Type</th>
              <th>Food name</th>
              <th>Price</th>
              <th>Quantity</th>
            </tr>
            {cart.length > 0 ? (
              cart.map((item) => (
                <tr>
                  <th>Food Item Type: {item.foodItem}</th>
                  <th>Food Item name: {item.name}</th>
                  <th> Price: {item.price}</th>
                  <th>Quantity: {item.quantity}</th>
                </tr>
              ))
            ) : (
              <Spinner />
            )}
          </table>
        </div>
      ) : (
        <Spinner />
      )}
      <div className="payment_buttons">
        <h1>Total Price: {total}</h1>

        <button
          className="order_button"
          onClick={() => {
            PostHistory({ cart, total });
            history.push('/history');
          }}
        >
          Done
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cartItems,
});
export default connect(mapStateToProps, { getCartTotal, PostHistory })(Payment);
