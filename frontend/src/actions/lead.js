import axios from 'axios';
import {
  LEADS_LOADING,
  GET_LEADS,
  GET_LEAD,
  CREATE_LEAD,
  UPDATE_LEAD,
  REMOVE_LEAD,
  LEAD_ERRORS
} from './types';
import setAlert from './alert';

const uri = 'http://localhost:8000';

// SET LOADING
export const setLoading = () => dispatch => dispatch({ type: LEADS_LOADING });

// GET ALL LEADS
export const getLeads = () => async dispatch => {

  // DISPATCH LEADS_LOADING
  dispatch(setLoading());

  // SET HEADERS
  const config = {
    'Content-Types': 'application/json'
  };

  try {
    const { data } = await axios.get(`${uri}/api/leads`, config);
    console.log(data);

    // DISPATCH GET_LEADS
    dispatch({ type: GET_LEADS, payload: data });
  } catch (error) {
    // DISPATCH LEAD_ERRORS
    console.log(error);
  }
};

// GET LEAD
export const getLead = id => async dispatch => {
  // DISPATCH LEADS_LOADING
  dispatch(setLoading());

  // SET HEADERS
  const config = {
    'Content-Types': 'application/json'
  };

  try {
    const { data } = await axios.get(`${uri}/api/leads/${id}`, config);
    console.log(data);

    // DISPATCH GET_LEAD
    dispatch({ type: GET_LEAD, payload: data });
  } catch (error) {
    // DISPATCH LEAD_ERRORS
    console.log(error);
  }
};

// CREATE LEADS
export const createLead = lead => async dispatch => {
  // SET HEADERS
  const config = {
    'Content-Types': 'application/json'
  };

  try {
    const { data } = await axios.post(`${uri}/api/leads`, lead, config);
    console.log(data);

    // DISPATCH CREATE_LEAD
    dispatch({ type: CREATE_LEAD, payload: data });

    // DISPATCH SET ALERT
    dispatch(setAlert('Lead created successfully!', 200, 'success', 'LEAD_CREATE_SUCCESS'));
  } catch (error) {
    // DISPATCH LEAD_ERRORS
    console.log(error.response.data);

    // DISPATCH LEAD_ERRORS & SET ALERT
    if (error.response.data) {
      dispatch({ type: LEAD_ERRORS, payload:  error.response.data});

      error.response.data.name && error.response.data.name.map(err => dispatch(setAlert(`Name: ${err}`, error.response.status, 'danger', 'LEAD_CREATE_ERROR')));

      error.response.data.email && error.response.data.email.map(err => dispatch(setAlert(`Email: ${err}`, error.response.status, 'danger', 'LEAD_CREATE_ERROR')));

      error.response.data.country && error.response.data.country.map(err => dispatch(setAlert(`Country: ${err}`, error.response.status, 'danger', 'LEAD_CREATE_ERROR')));
    }
  }
};

// UPDATE LEAD
export const updateLead = (lead, id, history) => async dispatch => {
  // SET HEADERS
  const config = {
    'Content-Types': 'application/json'
  };

  try {
    const { data } = await axios.put(`${uri}/api/leads/${id}`, lead, config);
    console.log(data);

    // DISPATCH UPDATE_LEAD
    dispatch({ type: UPDATE_LEAD, payload: { id, lead } });

    // DISPATCH SET ALERT
    dispatch(setAlert('Lead updated successfully!', 200, 'success', 'LEAD_UPDATE_SUCCESS'));
    history.push(`/leads`);
  } catch (error) {
    // DISPATCH LEAD_ERRORS
    console.log(error.response.data);

    // DISPATCH LEAD_ERRORS & SET ALERT
    if (error.response.data) {
      dispatch({ type: LEAD_ERRORS, payload:  error.response.data});

      error.response.data.name && error.response.data.name.map(err => dispatch(setAlert(`Name: ${err}`, error.response.status, 'danger', 'LEAD_UPDATE_ERROR')));

      error.response.data.email && error.response.data.email.map(err => dispatch(setAlert(`Email: ${err}`, error.response.status, 'danger', 'LEAD_UPDATE_ERROR')));

      error.response.data.country && error.response.data.country.map(err => dispatch(setAlert(`Country: ${err}`, error.response.status, 'danger', 'LEAD_UPDATE_ERROR')));
    }
  }
};

// DELETE LEAD
export const deleteLead = (id, history) => async dispatch => {
  // SET HEADERS
  const config = {
    'Content-Types': 'application/json'
  };

  try {
      const res = await axios.delete(`${uri}/api/leads/${id}`, config);
      console.log(res);
  
      // DISPATCH REMOVE_LEAD
      dispatch({ type: REMOVE_LEAD, payload: id });
  
      // DISPATCH SET_ALERT
      dispatch(setAlert('Lead removed successfully!', 200, 'success'));
  
      history.push('/leads');
    } catch (error) {
      // DISPATCH LEAD_ERRORS
      console.log(error);
    }
};
