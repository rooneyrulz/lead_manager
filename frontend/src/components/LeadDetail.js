import React, { Fragment, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardText,
  CardHeader,
  CardFooter,
  Button
} from 'reactstrap';
import PropTypes from 'prop-types';

// COMPONENTS
import LeadUpdateModal from '../components/modals/LeadUpdateModal';

// REDUX
import { connect } from 'react-redux';
import { getLead, deleteLead } from '../actions/lead';
import setAlert from '../actions/alert';

const LeadDetail = ({
  lead: { loading, lead },
  alert,
  getLead,
  deleteLead,
  setAlert,
  history,
  match
}) => {
  useEffect(() => {
    getLead(match.params.id);
  }, [getLead, match.params.id]);

  const onDelete = id => {
    deleteLead(id, history);
  };

  return loading || lead === null ? (
    <h1>Loading...</h1>
  ) : (
    <Fragment>
      <Card>
        <CardHeader>
          <h1>{lead.name}</h1>
        </CardHeader>
        <CardBody>
          <CardText>{lead.email}</CardText>
          <CardText>{lead.country}</CardText>
          <CardText>{lead.description}</CardText>
        </CardBody>
        <CardFooter>
          <LeadUpdateModal lead={lead} />
          <Button color='danger' onClick={e => onDelete(lead.id)}>
            Delete
          </Button>
        </CardFooter>
      </Card>
    </Fragment>
  );
};

LeadDetail.propTypes = {
  lead: PropTypes.object.isRequired,
  alert: PropTypes.array.isRequired,
  getLead: PropTypes.func.isRequired,
  deleteLead: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  lead: state.lead,
  alert: state.alert
});

export default connect(
  mapStateToProps,
  { getLead, deleteLead, setAlert }
)(LeadDetail);
