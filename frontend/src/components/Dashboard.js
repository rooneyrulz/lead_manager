import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Dashboard = ({ auth: { loading, user } }) => {
  return loading ? <h1>Loading...</h1> : (
    <div className='Dashboard'>
      <h1 style={{ fontWeight: 'bold' }} className='display-4'>Dashboard</h1>
      <p className='lead'>Welcome { user.name }</p>
    </div>
  )
}

Dashboard.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(Dashboard);
