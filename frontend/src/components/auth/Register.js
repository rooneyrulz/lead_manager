import React from 'react';
import { Link } from 'react-router-dom';
import { Form, FormGroup, Input, Label, Button } from 'reactstrap';

const Register = () => {

  const onChange = e => {};

  return (
    <div style={{ width: '60%', margin: 'auto' }} className='Register'>
      <header>
        <h3 style={{ fontWeight: 'bold' }}>Register</h3>
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
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            name='email'
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

export default Register;
