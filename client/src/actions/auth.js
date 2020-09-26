import {
  SIGNUP,
  SIGNIN,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  REGISTER_FAIL,
  LOGOUT,
} from './types';
import axios from 'axios';
import setAuthToken from '../Utils/setAuthToken';
import { setAlert } from './alert';

export const loadUser = () => async (dispatch) => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }
  try {
    const res = await axios.get('/user');
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const signup = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/signup', formData);

    dispatch({
      type: SIGNUP,
      payload: res.data,
    });

    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(error.response.data.errors);
    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg)));
    }
    dispatch({
      type: REGISTER_FAIL,
    });
  }
};

export const signin = (formData) => async (dispatch) => {
  console.log(formData);
  try {
    const res = await axios.post('/signin', formData);
    dispatch({
      type: SIGNIN,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    const errors = error.response.data.errors;

    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg)));
    }
    dispatch({
      type: LOGIN_FAIL,
    });
  }
};

export const Logout = () => async (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
