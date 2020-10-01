import React from "react";
import { connect } from "react-redux";
import Spinner from "../Spinner/Spinner";
import StripeButton from "../pAYMENT/payment";
import { getCartTotal } from "../../Utils/cart";
const Payment = ({ getCartTotal, cart }) => {
  let total = 0;
  cart.map((item) => {
    total = total + item.price * item.quantity;
  });
  return (
    <div>
      <div className="chinese_nav">Payment Please</div>
      {cart ? (
        <div className="cart">
          {cart.length > 0 ? (
            cart.map((item) => (
              <div>
                <h2>Food Item Type: {item.foodItem}</h2>
                <h3>Food Item name: {item.name}</h3>

                <h3> Price: {item.price}</h3>

                <h3>Quantity: {item.quantity}</h3>
              </div>
            ))
          ) : (
            <Spinner />
          )}
        </div>
      ) : (
        <Spinner />
      )}
      <div className="payment_buttons">
        <h1>Total Price: {total}</h1>

        <StripeButton />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  cart: state.cart.cartItems,
});
export default connect(mapStateToProps, { getCartTotal })(Payment);
