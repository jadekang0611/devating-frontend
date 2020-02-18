import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../devating-logo.png';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" className="justify-content-end ">
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        className="navbar-toggler-right"
      />

      <Navbar.Collapse id="responsive-navbar-nav">
        <Link to="/">
          <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="30%"
              height="auto"
              className="d-inline-block align-top"
            />
          </Navbar.Brand>
        </Link>
        <Nav className="ml-auto">
          <Nav.Link className="nav-item">
            <Link to="about" className="items">
              About
            </Link>
          </Nav.Link>
          <Nav.Link className="nav-item">
            <Link to="/dashboard" className="items">
              Matches
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