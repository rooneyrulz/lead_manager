import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  CardText,
  CardFooter,
  ListGroupItem
} from 'reactstrap';


const LeadItem = ({ lead }) => {
  const { id, name, email, country, description, author } = lead;

  return (
    <div
      id={`accordianId-${lead.id}`}
      role='tablist'
      aria-multiselectable='true'
    >
      <Card>
        <CardHeader
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}
          role='tab'
          id={`section1HeaderId-${lead.id}`}
        >
          <h5 className='mb-0'>{name}</h5>
          <a
            className='btn btn-dark'
            data-toggle='collapse'
            data-parent={`#accordianId-${lead.id}`}
            href={`#section1ContentId-${lead.id}`}
            aria-expanded='true'
            aria-controls={`section1ContentId-${lead.id}`}
          >
            Check
          </a>
        </CardHeader>
        <div
          id={`section1ContentId-${lead.id}`}
          className='collapse in'
          role='tabpanel'
          aria-labelledby={`section1HeaderId-${lead.id}`}
        >
          <CardBody>
            <ListGroupItem>
              <strong>Email</strong>
              <CardText>{email}</CardText>
            </ListGroupItem>
            <ListGroupItem>
              <strong>Country</strong>
              <CardText>{country}</CardText>
            </ListGroupItem>
            <ListGroupItem>
              <strong>Description</strong>
              <CardText>{description}</CardText>
            </ListGroupItem>
          </CardBody>
          <CardFooter>
            <Link to={`/leads/${id}`}>View Lead</Link>
          </CardFooter>
        </div>
      </Card>
    </div>
  );
};

LeadItem.propTypes = {
  lead: PropTypes.object.isRequired
};

export default LeadItem;
