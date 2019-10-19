import { combineReducers } from 'redux';

// IMPORT REDUCERS
import auth from './auth.js';
import alert from './alert';

export default combineReducers({
  auth,
  alert
});