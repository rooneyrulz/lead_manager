import axios from 'axios';
import {
  GET_LEADS,
  GET_LEAD,
  CREATE_LEAD,
  UPDATE_LEAD,
  REMOVE_LEAD,
  LEAD_ERRORS
} from './types';

const uri = 'http://localhost:8000';

// GET ALL LEADS
export const getLeads = () => async dispatch => {
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
  } catch (error) {
    // DISPATCH LEAD_ERRORS
    console.log(error);
  }
};

// UPDATE LEAD
export const updateLead = (lead, id) => async dispatch => {
  // SET HEADERS
  const config = {
    'Content-Types': 'application/json'
  };

  try {
    const { data } = await axios.put(`${uri}/api/leads/${id}`, lead, config);
    console.log(data);

    // DISPATCH UPDATE_LEAD
    dispatch({ type: UPDATE_LEAD, payload: { id, lead } });
  } catch (error) {
    // DISPATCH LEAD_ERRORS
    console.log(error);
  }
};

// DELETE LEAD
export const deleteLead = id => async dispatch => {
  // SET HEADERS
  const config = {
    'Content-Types': 'application/json'
  };

  try {
    const res = await axios.delete(`${uri}/api/leads/${id}`, config);
    console.log(res);

    // DISPATCH REMOVE_LEAD
    dispatch({ type: REMOVE_LEAD, payload: id });
  } catch (error) {
    // DISPATCH LEAD_ERRORS
    console.log(error);
  }
};
