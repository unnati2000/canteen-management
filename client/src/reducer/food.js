import { GET_ITEM, ORDERS } from '../actions/types';
const initialState = {
  food: [],
  orders: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_ITEM: {
      return {
        ...state,
        food: payload,
      };
    }
    case ORDERS: {
      return {
        ...state,
        orders: payload,
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
