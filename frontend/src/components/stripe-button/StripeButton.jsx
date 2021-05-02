import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { setpaymentStatus } from "../../redux/order/order.actions";
import { setAlert } from "../../redux/alert/alert.actions";
import { connect } from "react-redux";

const StripeButton = ({ price, id, setpaymentStatus }) => {
  const publishableKey = process.env.PUBLISH_KEY;

  const onToken = (token) => {
    console.log(token);
    setAlert("Payment successful", "success");
    setpaymentStatus(id);
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="Canteen Bill."
      billingAddress
      shippingAddress
      image="https://st2.depositphotos.com/1341440/7182/v/950/depositphotos_71824861-stock-illustration-chef-hat-vector-black-silhouette.jpg"
      description={`Your total is ${price}`}
      amount={price}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default connect(null, { setpaymentStatus })(StripeButton);
