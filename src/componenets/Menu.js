import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand className='fw-bolder fs-3' href="#home">Car Wash</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link to="#">Login</Link>
              <Link to="#">Register</Link>
              <Link to="#">Upcoming Schedule</Link>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;