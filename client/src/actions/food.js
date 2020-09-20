import { GET_ITEM, ORDERS } from './types';
import axios from 'axios';

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

export const PostOrders = (id) => async (dispatch) => {
  try {
    const res = await axios.put(`/orders/${id}`);
    dispatch({
      type: ORDERS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
  }
};
