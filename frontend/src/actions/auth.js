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
import setAlert from './alert';

const uri = 'http://localhost:8000';

// LOAD USER
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

// LOGIN USER
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

    // DISPATCH SET ALERT
    dispatch(setAlert('Hia, You just logged in!', 200, 'success'));
  } catch (error) {
    // DISPATCH LOGIN_FAIL
    dispatch({ type: LOGIN_FAIL });

    // DISPATCH SET ALERT
    if (error.response.data) {
      error.response.data.username && error.response.data.username.map(err => dispatch(setAlert(`Username: ${err}`, error.response.status, 'danger')));

      error.response.data.password && error.response.data.password.map(err => dispatch(setAlert(`Password: ${err}`, error.response.status, 'danger')));

      error.response.data.non_field_errors && error.response.data.non_field_errors.map(err => dispatch(setAlert(err, error.response.status, 'danger')));
    }
  }
};

// REGISTER USER
export const registerUser = ({username, email, password }) => async dispatch => {
  // SET HEADERS
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  const body = { username, email, password };

  try {
    const { data } = await axios.post(`${uri}/api/auth/register`, body, config);

    // DISPATCH REGISTER_SUCCESS
    dispatch({ type: REGISTER_SUCCESS, payload: data });

    // DISPATCH LOAD USER
    dispatch(loadUser())

    // DISPATCH SET ALERT
    dispatch(setAlert('Hia, You just logged in!', 200, 'success'));
  } catch (error) {
    // DISPATCH REGISTER_FAIL
    dispatch({ type: REGISTER_FAIL });

    console.log(error.response.data);

    // DISPATCH SET ALERT
    if (error.response.data) {
      error.response.data.username && error.response.data.username.map(err => dispatch(setAlert(`Username: ${err}`, error.response.status, 'danger')));

      error.response.data.email && error.response.data.email.map(err => dispatch(setAlert(`Email: ${err}`, error.response.status, 'danger')));

      error.response.data.password && error.response.data.password.map(err => dispatch(setAlert(`Password: ${err}`, error.response.status, 'danger')));
    }
  }
};

// LOGOUT USER
export const logoutUser = () => async dispatch => {
  // SET HEADERS
  const config = {
    header: {
      'Content-Type': 'application/json'
    }
  };

  try {
    const res = await axios.post(`${uri}/api/auth/logout`, null, config);

    // DISPATCH LOGIN_SUCCESS
    dispatch({ type: LOGOUT_SUCCESS });

    // DISPATCH SET ALERT
    dispatch(setAlert('You are successfully logged out!', 200, 'success'));
  } catch (error) {
    console.log(error);
  }
};