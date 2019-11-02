import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

// REDUX
import { connect } from 'react-redux';

import AlertItem from './AlertItem';

const Alert = ({ alert }) => {
  const alertItems = alert.length > 0 && alert.map(
    alrt => alrt.typeId !== 'LEAD_CREATE_ERROR' && alrt.typeId !== 'LEAD_UPDATE_ERROR' && alrt.typeId !== 'LEAD_CREATE_SUCCESS' && <AlertItem key={alrt.id} alert={alrt} />
  );

  return (
    <Container style={{ width: '55%', margin: 'auto'}}>
      {alertItems}
    </Container>
  )
}

Alert.propTypes = {
  alert: PropTypes.array.isRequired
};

const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(mapStateToProps)(Alert);
