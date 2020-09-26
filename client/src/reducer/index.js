import { combineReducers } from 'redux';
import auth from './auth';
import admin from './admin';
import food from './food';
import cart from './cart';
import alert from './alert';
export default combineReducers({ auth, admin, food, cart, alert });
