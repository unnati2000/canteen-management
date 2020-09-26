import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../actions/auth';
import '../style.css';
import { setAlert } from '../../actions/alert';
const SignUp = ({ signup, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    branch: '',
  });

  const { email, password, name, branch } = formData;

  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    signup({ email, password, name, branch });
    setAlert('Test');
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="signup">
        <div className="signup_card">
          <form onSubmit={onSubmit} className="signup_form">
            <h2>Sign Up </h2>
            <label>Enter Name</label>
            <br />
            <input
              type="text"
              name="name"
              value={name}
              placeholder="Enter Name"
              onChange={onChange}
            />
            <br />
            <label>Enter Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={email}
              placeholder="Enter Email"
              onChange={onChange}
            />
            <br />
            <label>Enter Password</label>
            <br></br>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
              placeholder="Enter Password"
            />
            <br />
            <label>Enter your branch</label>
            <br />
            <select name="branch" value={branch} onChange={onChange} id="cars">
              <option value="null">Select your option </option>

              <option value="CMPN">CMPN</option>
              <option value="IT">IT</option>
              <option value="EXTC">EXTC</option>
              <option value="ETRX">ETRX</option>
              <option value="MECHANICAL">MECHANICAL</option>
              <option value="CIVIL">CIVIL</option>
            </select>
            <br />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(SignUp);
