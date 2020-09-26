import {
  SIGNIN,
  SIGNUP,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGOUT,
  REGISTER_FAIL,
} from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticated: null,
  loading: null,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SIGNUP: {
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    }
    case SIGNIN: {
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticated: true,
        loading: false,
      };
    }
    case USER_LOADED: {
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        user: payload,
      };
    }
    case (AUTH_ERROR, LOGIN_FAIL, REGISTER_FAIL, LOGOUT): {
      return {
        ...state,
        isAuthenticated: false,
        loading: false,
        user: null,
        token: null,
      };
    }
    default:
      return state;
  }
}
