import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

// REDUX
import { connect } from 'react-redux';
import { getLead } from '../../actions/lead';
import setAlert from '../../actions/alert';

const LeadUpdateModal = ({ id, lead, alert, getLead, setAlert }) => {
  useEffect(() => { getLead(id) }, [getLead, id]);

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
      <button
        type='button'
        className='btn btn-primary'
        data-toggle='modal'
        data-target='#modal-update'
      >
        Edit
      </button>

      <div
        className='modal fade'
        id='modal-update'
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
                  Update
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
  lead: state.lead,
  alert: state.alert
});

export default connect(mapStateToProps, { getLead, setAlert })(LeadUpdateModal);
