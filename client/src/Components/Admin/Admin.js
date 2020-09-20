import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { AddFood } from '../../actions/admin';
const Admin = ({ AddFood, admin }) => {
  const [formData, setFormData] = useState({
    foodItem: '',
    name: '',
    price: '',
    quantity: '',
  });

  const { foodItem, name, price, quantity } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  console.log(formData);

  const onSubmit = (e) => {
    e.preventDefault();
    AddFood({ foodItem, name, price, quantity });
    window.location.reload();
  };

  return (
    <div>
      <div className="admin">
        <div className="admin_card">
          <form onSubmit={onSubmit} className="admin_form">
            <h2>Admin only</h2>
            <label>Enter your option</label>
            <br />
            <select
              name="foodItem"
              onChange={onChange}
              value={foodItem}
              id="cars"
            >
              <option value="BreakFast">Breakfast</option>
              <option value="Chinese">Chinese</option>
              <option value="Indian">Indian</option>
              <option value="Chat">Chat</option>
            </select>
            <br />
            <label>Enter Name of food Item</label>
            <br />
            <input
              type="text"
              name="name"
              onChange={onChange}
              value={name}
              placeholder="Enter Name"
            ></input>
            <br />
            <label>Enter Price of food Item</label>
            <br />
            <input
              type="text"
              name="price"
              value={price}
              onChange={onChange}
              placeholder="Enter Price"
            ></input>
            <br />
            <label>Enter Quantity</label> <br />
            <input
              type="text"
              name="quantity"
              value={quantity}
              onChange={onChange}
              placeholder="Enter Quantity"
            ></input>
            <br />
            <button>Submit</button>
            <br />
            <Link to="/admincontrolreal">AdminControlReal</Link>
            <br></br>
            <Link to="/admincontrol">admincontrol</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  admin: state.admin,
});

export default connect(mapStateToProps, { AddFood })(Admin);
