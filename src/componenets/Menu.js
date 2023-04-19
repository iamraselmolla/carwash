import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {MdOutlineNotifications} from "react-icons/md"

const Menu = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container>
          <Link className="text-decoration-none"  to="/"><Navbar.Brand className='fw-bolder fs-3' href="#home">Car Wash</Navbar.Brand></Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex align-items-center">
              <Link className='fw-bolder px-3 text-decoration-none text-dark' to="/login">Login</Link>
              <Link className='fw-bolder px-3 text-decoration-none text-dark' to="/register">Register</Link>
              <Link className='fw-bolder px-3 text-decoration-none text-dark' to="#">Upcoming Schedule</Link>
              <MdOutlineNotifications className='fs-3'></MdOutlineNotifications>
             
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
};

export default Menu;