import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signin } from '../../actions/auth';
import '../style.css';

const SignIn = ({ signin, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;
  console.log(formData);
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: [e.target.value] });
  };
  const onSubmit = (e) => {
    e.preventDefault();
    signin(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to="/" />;
  }
  return (
    <div>
      <div className="signup">
        <div className="signup_card">
          <form className="signup_form" onSubmit={onSubmit}>
            <h2>Sign In </h2>

            <label>Enter Email</label>
            <br />
            <input
              type="email"
              name="email"
              value={email}
              required
              placeholder="Enter Email"
              onChange={onChange}
            />
            <br />
            <label>Enter Password</label>
            <br></br>
            <input
              type="password"
              value={password}
              name="password"
              required
              placeholder="Enter Password"
              onChange={onChange}
            />
            <br />

            <button>Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signin })(SignIn);
