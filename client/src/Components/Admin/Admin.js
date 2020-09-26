import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AddFood } from '../../actions/admin';
const Admin = ({ AddFood, admin }) => {
  const [formData, setFormData] = useState({
    foodItem: '',
    name: '',
    price: '',
    postImage: '',
  });

  const { foodItem, name, price, postImage } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onImageSelect = (e) => {
    setFormData({ ...formData, postImage: e.target.files });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const food = new FormData();
    food.append('foodItem', foodItem);
    food.append('name', name);
    food.append('price', price);

    food.append('postImage', postImage[0]);
    AddFood(food);
    window.location.reload();
  };

  return (
    <div>
      <div className="admin">
        <div className="admin_card">
          <form onSubmit={onSubmit} className="admin_form">
            <h2>Admin only</h2>
            <h3>Add food Item</h3>
            <label>Enter your option</label>
            <br />
            <select
              name="foodItem"
              onChange={onChange}
              value={foodItem}
              id="cars"
            >
              <option value="null">Select your option</option>

              <option value="breakfast">Breakfast</option>
              <option value="chinese">Chinese</option>
              <option value="indian">Indian</option>
              <option value="chat">Chat</option>
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
            <input type="file" name="postImage" onChange={onImageSelect} />
            <br />
            <button>Submit</button>
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
