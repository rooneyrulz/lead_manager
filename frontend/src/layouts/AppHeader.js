import React, { Fragment, useState } from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { 
  Nav,
  Navbar,
  Button,
  NavItem,
  Collapse,
  Container,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';

// REDUX
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';

const AppHeader = ({ isAuthenticated, logoutUser }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = e => setIsOpen(!isOpen)

  const authLinks = (
    <Fragment>
      <NavItem>
        <NavLink exact to='/dashboard' className='nav-link'>Dashboard</NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to='/leads' className='nav-link'>Leads</NavLink>
      </NavItem>
      <NavItem>
        <Button onClick={e => logoutUser()} className='btn btn-light'>Logout</Button>
      </NavItem>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <NavItem>
        <NavLink exact to='/' className='nav-link'>Home</NavLink>
      </NavItem>
      <NavItem>
        <NavLink exact to='/register' className='nav-link'>Register</NavLink>
      </NavItem>
        <NavItem>
          <NavLink exact to='login' className='nav-link'>Login</NavLink>
        </NavItem>
    </Fragment>
  );

  return (
    <Navbar light color='light' expand='sm'>
      <Container>
        <NavbarBrand href='/'>Lead Manager</NavbarBrand>
        <NavbarToggler onClick={e => toggle(e)} />
        <Collapse navbar isOpen={isOpen}>
          <Nav navbar className='ml-auto'>
            { isAuthenticated ? authLinks : guestLinks }
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

AppHeader.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { logoutUser })(AppHeader);
