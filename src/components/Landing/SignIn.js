import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Switch, Route, Router, Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
const axios = require('axios');

function SignIn(props) {
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');

  function handleEmailChange(e) {
    e.preventDefault();
    setInputEmail(e.target.value);
    console.log(e.target.value);
  }

  function handlePasswordChange(e) {
    e.preventDefault();
    setInputPassword(e.target.value);
    console.log(e.target.value);
  }

  function handleSignIn(e) {
    e.preventDefault();

    console.log('Email' + inputEmail);
    console.log('Password' + inputPassword);

    axios.get(url + '/' + inputEmail + '/' + inputPassword).then(res => {
      let user = res.data;
      if (user.length !== 0) {
        props.history.push({
          pathname: '/dashboard',
          state: {user: user} 
        });
      } else {
        alert('SOMETHING WENT WRONG');
      }
    });
  }

  const url = 'http://localhost:7000/signin';

  return (
    <div>
      <p>Please sign in</p>
      <form>
        <input
          type="text"
          value={inputEmail}
          placeholder="dev@devating.com"
          onChange={handleEmailChange}
        ></input>
        <input
          type="text"
          value={inputPassword}
          placeholder="love1234"
          onChange={handlePasswordChange}
        ></input>

        <button type="submit" onClick={handleSignIn}>
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
