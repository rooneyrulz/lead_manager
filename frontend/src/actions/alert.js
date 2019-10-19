import uuid from 'uuid';
import { CREATE_ALERT, REMOVE_ALERT } from './types';

export default (
  msg,
  status,
  alertType,
  typeId=null,
  timeout=4000
) => dispatch => {
    // DISPATCH CREATE_MESSAGE
    const id = uuid.v4();
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

