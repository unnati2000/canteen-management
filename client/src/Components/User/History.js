import React, { useState } from 'react';
import Moment from 'react-moment';
import { connect } from 'react-redux';
import { GetHistory } from '../../actions/cart';
import Spinner from '../Spinner/Spinner';
const History = ({ auth: { user }, GetHistory, history }) => {
  useState(() => {
    GetHistory();
  }, [GetHistory]);

  return (
    <div className="history">
      <div className="personal_data">
        {user ? (
          <div>
            <h1>Orders</h1>
            <img
              src="https://www.buropropiedades.com/assets/agent/gravatar-f2fcbefa79b7e622df3128e40098e22b419ac04287ffc9dcb8725b8aeb7b6b0c.png"
              alt="bio"
            />
            <h2>Personal Data</h2>
            <h3>Name: {user.name}</h3>
            <h3>Branch: {user.branch}</h3>
          </div>
        ) : (
          ''
        )}
      </div>

      <div>
        {history ? (
          <div className="history_box">
            {history.length ? (
              history.map((order) => (
                <div className="order_box">
                  {order.orders.map((ord) => (
                    <div>
                      <h2>FoodItem: {ord.foodItem}</h2>
                      <h3>Name: {ord.name}</h3>
                      <h3>Price: {ord.price}</h3>
                    </div>
                  ))}
                  <h2>
                    Date: <Moment date={order.date} />
                  </h2>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <h1>Total Price: {order.totalPrice}</h1>
                  {order.isOpen === true ? <h2>Not Ready</h2> : <h2>Ready</h2>}
                </div>
              ))
            ) : (
              <h1>No orders placed yet</h1>
            )}
          </div>
        ) : (
          <Spinner />
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  history: state.cart.history,
  auth: state.auth,
});

export default connect(mapStateToProps, { GetHistory })(History);
