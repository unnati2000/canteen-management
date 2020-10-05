import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAdminOrders, orderReady } from '../../actions/admin';

const OrderPlaced = ({ pendingOrders, getAdminOrders, orderReady }) => {
  useEffect(() => {
    getAdminOrders();
  }, []);

  return (
    <div className="order_placed">
      <h1>Orders recently placed</h1>
      <div className="cardz">
        {pendingOrders ? (
          pendingOrders.map((order) => {
            return (
              <div className="order_cards">
                <h2>Name: {order.user.name}</h2>
                <h3>Branch: {order.user.branch}</h3>
                <h3>Orders</h3>
                <ul>
                  {order.orders.map((item) => {
                    return (
                      <li>
                        {item.name} * {item.quantity}
                      </li>
                    );
                  })}
                </ul>
                <button
                  onClick={() => orderReady(order._id)}
                  className="placing_button"
                >
                  Ready
                </button>
              </div>
            );
          })
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pendingOrders: state.admin.pendingOrders,
});

export default connect(mapStateToProps, { getAdminOrders, orderReady })(
  OrderPlaced
);
