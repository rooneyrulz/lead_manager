import React from 'react';
import { Alert } from 'reactstrap';

const AlertItem = ({ alert }) => <Alert color={alert.alertType}>{alert.msg}</Alert>

export default AlertItem;
