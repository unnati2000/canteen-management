import React from 'react';
const Admin = () => {
  return (
    <div>
      <div className="admin">
        <div className="admin_card">
          <div className="admin_form">
            <h2>Admin only</h2>
            <label>Enter your option</label>
            <br />
            <select name="cars" id="cars">
              <option value="volvo">Breakfast</option>
              <option value="saab">Chinese</option>
              <option value="mercedes">Indian</option>
              <option value="audi">Chat</option>
            </select>
            <br />
            <label>Enter Name of food Item</label>
            <br />
            <input type="text" placeholder="Enter Name"></input>
            <br />
            <label>Enter Price of food Item</label>
            <br />
            <input type="text" placeholder="Enter Price"></input> <br />
            <label>Enter Quantity</label> <br />
            <input type="text" placeholder="Enter Quantity"></input> <br />
            <button>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
