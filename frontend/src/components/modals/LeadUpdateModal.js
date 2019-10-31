import React, { Fragment, useState, useEffect } from 'react';
import { Modal, ModalBody, ModalHeader, Button } from 'reactstrap';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getLead } from '../../actions/lead';
import setAlert from '../../actions/alert';

const LeadUpdateModal = ({ id, lead: { loading, lead }, alert, getLead, setAlert }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    description: ''
  });
  
  useEffect(() => { 
    getLead(id)

    setTimeout(() => {
      setFormData({
      ...formData,
      name: loading || !lead.name ? '' : lead.name,
      email: loading || !lead.email ? '' : lead.email,
      country: loading || !lead.country ? '' : lead.country,
      description: loading || !lead.description ? '' : lead.description
    });
    }, 2000)
    
  }, [loading, getLead, id]);

  const { name, email, country, description } = formData;

  const toggle = e => setIsOpen(!isOpen);

  const onChange = e =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });

  const onSubmit = e => {
    e.preventDefault();
    console.log(formData);

    setFormData({
      name: '',
      email: '',
      country: '',
      description: ''
    });
  };

  return (
    <Fragment>
      <Button color="primary" onClick={e => toggle(e)}>Edit</Button>
      <Modal isOpen={isOpen} toggle={e => toggle(e)}>
        <ModalHeader toggle={e => toggle(e)}>Leads</ModalHeader>
        <ModalBody>
          <form onSubmit={e => onSubmit(e)}>
                {/* <div className='form-group'>
                  {alert.map(
                    alrt =>
                      alrt.typeId === 'LEAD_CREATE_ERROR' && (
                        <AlertItem alert={alrt} />
                      )
                  )}
                  {alert.map(
                    alrt =>
                      alrt.typeId === 'LEAD_CREATE_SUCCESS' && (
                        <AlertItem alert={alrt} />
                      )
                  )}
                </div> */}
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

const mapStateToProps = state => ({
  lead: state.lead,
  alert: state.alert
});

export default connect(mapStateToProps, { getLead, setAlert })(LeadUpdateModal);
