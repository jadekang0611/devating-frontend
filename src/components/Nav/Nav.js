import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import './Nav.css';

function Nav() {
  return (
    <div>
      <Link to="/results">
        <h1 className="navlogo">Devating</h1>
      </Link>
      <ul>
        <li>
          <Link to="about">About</Link>
        </li>
        <li>
          <Link to="/dashboard">See Your Saved Matches</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/createAccount">Create account</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
