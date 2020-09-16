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
    console.log('step 1');
    const res = await axios.post('/signup', formData);
    console.log('step 2');
    dispatch({
      type: SIGNUP,
      payload: res.data,
    });
    console.log('step 3');
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
  }
};

export const signin = (email, password) => async (dispatch) => {
  const body = { email, password };
  try {
    const res = await axios.post('/signin', body);
    dispatch({
      type: SIGNIN,
      payload: res.data,
    });
    dispatch(loadUser());
  } catch (error) {
    console.log(error);
  }
};
