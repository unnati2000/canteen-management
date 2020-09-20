import React from 'react';
const Orders = () => {
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
            <th>Food Type</th>
            <th>Food Name</th>
            <th>Quantity</th>
          </tr>
        </table>
      </div>
    </div>
  );
};
export default Orders;
