import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Nav,
  Navbar,
  NavItem,
  Collapse,
  Container,
  NavbarBrand,
  NavbarToggler,
} from 'reactstrap';

const AppHeader = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = e => setIsOpen(!isOpen)

  return (
    <Navbar light color='light' expand='sm'>
      <Container>
        <NavbarBrand href='/'>Lead Manager</NavbarBrand>
        <NavbarToggler onClick={e => toggle(e)} />
        <Collapse navbar isOpen={isOpen}>
          <Nav navbar className='ml-auto'>
          <NavItem>
            <NavLink exact to='/' className='nav-link'>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to='/dashboard' className='nav-link'>Dashboard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to='/register' className='nav-link'>Register</NavLink>
          </NavItem>
          <NavItem>
            <NavLink exact to='login' className='nav-link'>Login</NavLink>
          </NavItem>
        </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default AppHeader;
