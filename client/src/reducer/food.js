import { GET_ITEM } from "../actions/types";
const initialState = {
  food: [],
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

    default: {
      return {
        ...state,
      };
    }
  }
}
