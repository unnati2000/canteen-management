import axios from 'axios';
import {
  ADD_TO_CART,
  CLEAR_ITEM_FROM_CART,
  REMOVE_FROM_CART,
  POST_HISTORY,
  GET_HISTORY,
} from './types';

export const AddToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
});

export const clearItemFromCart = (itemId) => ({
  type: CLEAR_ITEM_FROM_CART,
  payload: itemId,
});

export const removeFromCart = (item) => ({
  type: REMOVE_FROM_CART,
  payload: item,
});

export const PostHistory = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/orders', formData);
    dispatch({
      type: POST_HISTORY,
      payload: res.data,
    });
    console.log(res.data);
  } catch (error) {
    console.log(error);
  }
};

export const GetHistory = () => async (dispatch) => {
  try {
    const res = await axios.get('/userorder');

    dispatch({
      type: GET_HISTORY,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
