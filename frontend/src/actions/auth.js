import axios from 'axios';
import {
  USER_LOADING,
  USER_LOADED,
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  AUTH_ERROR,
  LOGOUT_SUCCESS,
} from './types';
import setAuthToken from '../utils/setAuthToken';

const uri = 'http://localhost:8000';

export const loadUser = () => async dispatch => {
  if (localStorage.token) setAuthToken(localStorage.token);

  // DISPATCH USER_LOADING
  dispatch({ type: USER_LOADING });

  // SET HEADERS
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const { data } = await axios.get(`${uri}/api/auth/user`, config);

    // DISPATCH USER_LOADED
    dispatch({ type: USER_LOADED, payload: data });
  } catch (error) {

    // DISPATCH AUTH_ERROR
    dispatch({ type: AUTH_ERROR });
  }
};

export const loginUser = ({username, password }) => async dispatch => {
  // SET HEADERS
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  const body = { username, password };

  try {
    const { data } = await axios.post(`${uri}/api/auth/login`, body, config);

    // DISPATCH LOGIN_SUCCESS
    dispatch({ type: LOGIN_SUCCESS, payload: data });

    // DISPATCH LOAD USER
    dispatch(loadUser())
  } catch (error) {

    // DISPATCH LOGIN_FAIL
    dispatch({ type: LOGIN_FAIL });
  }
};