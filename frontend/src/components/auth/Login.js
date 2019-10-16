import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Login = () => {

  const onChange = e => {};

  return (
    <div style={{ width: '60%', margin: 'auto' }} className='Login'>
      <header>
        <h3 style={{ fontWeight: 'bold' }}>Log In</h3>
      </header>
      <hr />
      <Form>
        <FormGroup>
          <Label htmlFor='username'>Username</Label>
          <Input
            id='username'
            type='text'
            name='username'
            className='form-control'
            placeholder='Enter username'
            onChange={e => onChange(e)}
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            type='text'
            name='password'
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

export default Login;
