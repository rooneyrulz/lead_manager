import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

// REDUX
import { connect } from 'react-redux';
import { registerUser } from '../../actions/auth';
import setAlert from '../../actions/alert';

const Register = ({ isAuthenticated, registerUser, setAlert, history }) => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    password2: ''
  });

  if (isAuthenticated) history.push('/dashboard');

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });
  
  const { username, email, password, password2 } = formData;

  const onSubmit = e => {
    e.preventDefault();

    if (
      !username.trim() ||
      !email.trim() ||
      !password.trim() ||
      !password2.trim()
    ) {
      setAlert('Please fill out all fields!', 400, 'danger');
    } else if (password !== password2 ) {
      setAlert('Password does not match!', 400, 'danger');
    } else {
      registerUser(formData);
      setFormData({
        ...formData,
        username: '',
        email: '',
        password: '',
        password2: ''
      });
    }
  };

  return (
    <div style={{ width: '60%', margin: 'auto' }} className='Register'>
      <header>
        <h3 style={{ fontWeight: 'bold' }}>Register</h3>
      </header>
      <hr />
      <Form onSubmit={e => onSubmit(e)}>
        <FormGroup>
          <Label htmlFor='username'>Username</Label>
          <Input
            id='username'
            type='text'
            name='username'
            value={username}
            className='form-control'
            placeholder='Enter username'
            onChange={e => onChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            name='email'
            value={email}
            className='form-control'
            placeholder='Enter email'
            onChange={e => onChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            type='text'
            name='password'
            value={password}
            className='form-control'
            placeholder='Enter password'
            onChange={e => onChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password2'>Confirm password</Label>
          <Input
            id='password2'
            type='password'
            name='password2'
            value={password2}
            className='form-control'
            placeholder='Confirm password'
            onChange={e => onChange(e)}
          />
        </FormGroup>
        <Button type='submit' color='primary'>Register</Button>
      </Form>
      <br/>
      <p className='text-muted text-center'>
        If you already have an account? Let's <Link to='/login'>Login</Link>
      </p>
    </div>
  )
}

Register.propTypes = {
  isAuthenticated: PropTypes.bool,
  registerUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { registerUser, setAlert })(Register);
