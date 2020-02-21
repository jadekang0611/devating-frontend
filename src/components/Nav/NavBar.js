import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg">
      <h1 className="navTitle">{''}</h1>
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="navbar-toggler-right"
      />
      
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link className="nav-item">
            <Link to="/" className="items">
              Home
            </Link>
          </Nav.Link>
          <Nav.Link className="nav-item">
            <Link to="/about" className="items">
              About
            </Link>
          </Nav.Link>
          <Nav.Link className="nav-item">
            <Link to="/signin" className="items">
              Sign In
            </Link>
          </Nav.Link>
          <Nav.Link className="nav-item">
            <Link to="/createAccount" className="items">
              Create account
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavBar;
