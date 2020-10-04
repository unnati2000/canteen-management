// pk_test_51HTtOGLAh83Cwg11JvbUvct463ayXzw7V6CfoA0uEpd5mFiBqTWv0udisLPVS07vrmmXuZuVRFDoFwgZ34jcqYWX00nxFiZCs6
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { withRouter } from 'react-router-dom';

const StripeButton = ({ price, history }) => {
  const publishableKey =
    'pk_test_51HTtOGLAh83Cwg11JvbUvct463ayXzw7V6CfoA0uEpd5mFiBqTWv0udisLPVS07vrmmXuZuVRFDoFwgZ34jcqYWX00nxFiZCs6';

  const onToken = (token) => {
    console.log(token);
    alert('Payment successful');
    history.push('/');
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

export default withRouter(StripeButton);
