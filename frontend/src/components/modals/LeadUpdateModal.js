import React, { Fragment, useState, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import PropTypes from 'prop-types';

// COMPONENTS
import AlertItem from '../../layouts/AlertItem';

// REDUX
import { connect } from 'react-redux';
import { updateLead } from '../../actions/lead';
import setAlert from '../../actions/alert';

const LeadUpdateModal = ({ lead, alert, updateLead, setAlert, history }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({...lead});
  
  const { id, name, email, country, description } = formData;

  const toggle = e => setIsOpen(!isOpen);

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    if (
      !name.trim() ||
      !email.trim() ||
      !country.trim() ||
      !description.trim()
    ) {
      setAlert(
        'Please fill in all fields!',
        400,
        'danger',
        'LEAD_UPDATE_ERROR'
      );
    } else {
      const body = { name, email, country, description };
      updateLead(body, id, history);
      setFormData({
        name: '',
        email: '',
        country: '',
        description: ''
      });
    }
  };

  return (
    <Fragment>
      <Button color="primary" onClick={e => toggle(e)}>Edit</Button>
      <Modal isOpen={isOpen} toggle={e => toggle(e)}>
        <ModalHeader toggle={e => toggle(e)}>Leads</ModalHeader>
        <ModalBody>
          <form onSubmit={e => onSubmit(e)}>
                <div className='form-group'>
                  {alert.map(
                    alrt =>
                      alrt.typeId === 'LEAD_UPDATE_ERROR' && (
                        <AlertItem alert={alrt} />
                      )
                  )}
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='name'
                    id='name'
                    className='form-control'
                    placeholder='Name'
                    value={name}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='email'
                    name='email'
                    id='email'
                    className='form-control'
                    placeholder='Email'
                    value={email}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <input
                    type='text'
                    name='country'
                    id='country'
                    className='form-control'
                    placeholder='Country'
                    value={country}
                    onChange={e => onChange(e)}
                  />
                </div>
                <div className='form-group'>
                  <textarea
                    type='text'
                    name='description'
                    id='description'
                    className='form-control'
                    placeholder='Description'
                    value={description}
                    onChange={e => onChange(e)}
                  ></textarea>
                </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  onClick={e => toggle(e)}
                >
                  Close
                </button>
                <button type='submit' className='btn btn-primary'>
                  Update
                </button>
              </div>
            </form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};

LeadUpdateModal.propTypes = {
  lead: PropTypes.object.isRequired,
  alert: PropTypes.array.isRequired,
  updateLead: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(mapStateToProps, { updateLead, setAlert })(withRouter(LeadUpdateModal));
