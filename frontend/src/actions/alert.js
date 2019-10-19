import { v4 } from 'uuid';
import { CREATE_ALERT, REMOVE_ALERT } from './types';

export default (
  msg,
  status,
  alertType,
  typeId=null,
  timeout=10000
) => dispatch => {
    // DISPATCH CREATE_MESSAGE
    id = v4();
    dispatch({ 
      type: CREATE_ALERT,
      payload: { id, msg, status, alertType, typeId }
    });

    // DISPATCH REMOVE_MESSAGE
    setTimeout(() => dispatch({
      type: REMOVE_ALERT,
      payload: id
    }), timeout);
  };

