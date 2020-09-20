import { ADD_ITEM, GET_ITEM } from './types';
import axios from 'axios';

export const AddFood = (formData) => async (dispatch) => {
  try {
    const res = await axios.post('/additem', formData);
    dispatch({
      type: ADD_ITEM,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
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
