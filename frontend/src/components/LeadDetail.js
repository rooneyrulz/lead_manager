import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getLead } from '../actions/lead';
import setAlert from '../actions/alert';

const LeadDetail = ({
  id,
  lead: { loading, lead },
  alert,
  getLead,
  setAlert
}) => {
  useEffect(() => {
    getLead(id);
  }, [getLead, id]);

  return (
    <Fragment>
      <h1>Detail</h1>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  lead: state.lead,
  alert: state.alert
});

export default connect(
  mapStateToProps,
  { getLead, setAlert }
)(LeadDetail);
