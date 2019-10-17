import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const PrivateRoute = ({
  component: Component,
  auth: { 
    loading,
    isAuthenticated
  },
  ...rest
}) => {
  return (
    <Route
      render={props =>{
        if (loading) {
          return <h1>Loading</h1>
        } else if (!isAuthenticated) {
          return <Redirect to='/login' />
        } else {
          return <Component {...props} />
        }
      }}
      {...rest}
    />
  );
}

PrivateRoute.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(PrivateRoute);
