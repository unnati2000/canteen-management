import { ADD_ITEM, GET_ITEM } from '../actions/types';

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
    default: {
      return {
        ...state,
      };
    }
  }
}
