import React from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="about">About</Link>
        </li>
        {/* <li>
            <Link to="/signin">Sign In</Link>
          </li> */}
        {/* <li> */}
        {/* {' '} <--- was this supposed to be something? or just an accident? */}
        {/* <Link to="/createAccount">Create a new account</Link>
          </li> */}
        <li>
          <Link to="/dashboard">See Your Saved Matches</Link>
        </li>
        <li>
          <Link to="/">Devating Gets Your Romantic Programmers</Link>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
