import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';

import AlertItem from '../../layouts/AlertItem';

// REDUX
import { connect } from 'react-redux';
import { createLead } from '../../actions/lead';
import setAlert from '../../actions/alert';

const LeadModal = ({ alert, createLead, setAlert }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    country: '',
    description: ''
  });

  const { name, email, country, description } = formData;

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
        'LEAD_CREATE_ERROR'
      );
    } else {
      const body = { name, email, country, description };
      createLead(body);

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
      <button
        type='button'
        className='btn btn-primary'
        data-toggle='modal'
        data-target='#modelId'
      >
        Create Leads
      </button>

      <div
        className='modal fade'
        id='modelId'
        tabIndex='-1'
        role='dialog'
        aria-labelledby='modelTitleId'
        aria-hidden='true'
      >
        <div className='modal-dialog' role='document'>
          <div className='modal-content'>
            <form onSubmit={e => onSubmit(e)}>
              <div className='modal-header'>
                <h5 className='modal-title'>Leads</h5>
                <button
                  type='button'
                  className='close'
                  data-dismiss='modal'
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
              <div className='modal-body'>
                <div className='form-group'>
                  {alert.map(
                    alrt =>
                      alrt.typeId === 'LEAD_CREATE_ERROR' && (
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
              </div>
              <div className='modal-footer'>
                <button
                  type='button'
                  className='btn btn-secondary'
                  data-dismiss='modal'
                >
                  Close
                </button>
                <button type='submit' className='btn btn-primary'>
                  Save
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  alert: state.alert
});

export default connect(
  mapStateToProps,
  { createLead, setAlert }
)(LeadModal);
