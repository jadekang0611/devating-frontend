import React from 'react';
import './Nav.css';
import { Link, Switch, Route, Redirect } from 'react-router-dom';



export default function Nav() {
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
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          {/* {' '} <--- was this supposed to be something? or just an accident? */}
          <Link to="/createAccount">Create account</Link>
        </li>
        <li>
          <Link to="/dashboard">See Your Saved Matches</Link>
        </li>
        {/* <li>
            <Link to="/">Devating Gets Your Romantic Programmers</Link>
          </li> */}
      </ul>
    </div>
  );
}
