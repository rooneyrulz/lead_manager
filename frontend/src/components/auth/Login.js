import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

// REDUX
import { connect } from 'react-redux';
import { loginUser } from '../../actions/auth';
import setAlert from '../../actions/alert';

const Login = ({ isAuthenticated, loginUser, setAlert, history }) => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  if (isAuthenticated) history.push('/dashboard');

  const onChange = e => setFormData({
    ...formData,
    [e.target.name]: e.target.value
  });

  const { username, password } = formData;

  const onSubmit = e => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setAlert('Please fill out all fields!', 400, 'danger');
    } else {
      loginUser(formData);
      setFormData({
        ...formData,
        username: '',
        password: ''
      });
    }
  };

  return (
    <div style={{ width: '60%', margin: 'auto' }} className='Login'>
      <header>
        <h3 style={{ fontWeight: 'bold' }}>Log In</h3>
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
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            type='password'
            name='password'
            value={password}
            className='form-control'
            placeholder='Enter password'
            onChange={e => onChange(e)}
          />
        </FormGroup>
        <Button type='submit' color='primary'>Login</Button>
      </Form>
      <br/>
      <p className='text-muted text-center'>
        If you don't have an account? Let's <Link to='/register'>Register</Link>
      </p>
    </div>
  )
}

Login.propTypes = {
  isAuthenticated: PropTypes.bool,
  loginUser: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { loginUser, setAlert })(Login);
