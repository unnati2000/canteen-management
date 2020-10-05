import {
  ADD_ITEM,
  GET_ITEM,
  DELETE_ITEM,
  ADD_ITEM_ERROR,
  GET_ADMIN_ORDERS,
  ORDER_READY,
} from './types';
import axios from 'axios';
import { setAlert } from './alert';

export const AddFood = (formData) => async (dispatch) => {
  const config = {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  };
  try {
    const res = await axios.post('/additem', formData, config);
    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    });
  } catch (error) {
    const errors = error.response.data.errors;
    console.log(error.response.data.errors);
    if (errors) {
      errors.forEach((err) => dispatch(setAlert(err.msg)));
    }
    dispatch({
      type: ADD_ITEM_ERROR,
    });
  }
};
export const GetAllSelectedItems = (food) => async (dispatch) => {
  try {
    const res = await axios.get(`/${food}`);
    dispatch({
      type: GET_ITEM,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const DeleteItem = (id) => async (dispatch) => {
  try {
    await axios.delete(`/delete/${id}`);
    dispatch({
      type: DELETE_ITEM,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getAdminOrders = () => async (dispatch) => {
  try {
    const res = await axios.get('/orderplaced');
    dispatch({
      type: GET_ADMIN_ORDERS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const orderReady = (id) => async (dispatch) => {
  try {
    await axios.put(`/orderplaced/${id}`);
    dispatch({
      type: ORDER_READY,
      payload: id,
    });
  } catch (error) {
    console.log(error);
  }
};
