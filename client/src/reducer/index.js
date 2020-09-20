import { combineReducers } from 'redux';
import auth from './auth';
import admin from './admin';
import food from './food';
export default combineReducers({ auth, admin, food });
