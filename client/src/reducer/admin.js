import {
  ADD_ITEM,
  GET_ITEM,
  DELETE_ITEM,
  ADD_ITEM_ERROR,
} from '../actions/types';

const initialState = {
  items: [],
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
    default: {
      return {
        ...state,
      };
    }
  }
}
