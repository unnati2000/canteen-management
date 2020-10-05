import {
  ADD_ITEM,
  GET_ITEM,
  DELETE_ITEM,
  ADD_ITEM_ERROR,
  GET_ADMIN_ORDERS,
  ORDER_READY,
} from '../actions/types';

const initialState = {
  items: [],
  pendingOrders: [],
  item: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_ITEM: {
      return {
        ...state,
        post: payload,
      };
    }
    case GET_ITEM: {
      return {
        ...state,
        items: payload,
      };
    }

    case DELETE_ITEM: {
      return {
        ...state,
        items: state.items.filter((item) => item._id !== payload),
      };
    }
    case ADD_ITEM_ERROR: {
      return {
        ...state,
        item: null,
      };
    }
    case GET_ADMIN_ORDERS: {
      return { ...state, pendingOrders: payload };
    }
    case ORDER_READY: {
      return {
        ...state,
        pendingOrders: state.pendingOrders.filter(
          (item) => item._id !== payload
        ),
      };
    }
    default: {
      return {
        ...state,
      };
    }
  }
}
