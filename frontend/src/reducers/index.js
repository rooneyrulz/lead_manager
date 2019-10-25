import { combineReducers } from 'redux';

// IMPORT REDUCERS
import auth from './auth.js';
import lead from './lead';
import alert from './alert';

export default combineReducers({
  auth,
  lead,
  alert
});