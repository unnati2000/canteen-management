import { SIGNUP, SIGNIN, USER_LOADED } from './types';
import axios from 'axios';
import setAuthToken from '../Utils/setAuthToken';

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
    console.log(err);
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
    console.log(error);
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
    console.log(error);
  }
};
