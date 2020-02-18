import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Switch, Route, Router, Redirect } from 'react-router-dom';
import { browserHistory } from 'react-router';
import './SignIn.css';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
          state: { user: user }
        });
      } else {
        alert('SOMETHING WENT WRONG');
      }
    });
  }

  const url = 'http://localhost:7000/signin';

  return (
    <div className="sign-in-container">
      <p className="sign-in-prompt">Please sign in</p>
      <Form className="sign-in-form">
        <Form.Group controlID="formGroupEmail" className="input-field">
          <Form.Control
            type="email"
            value={inputEmail}
            placeholder="Enter email"
            onChange={handleEmailChange}
          />
        </Form.Group>
        <Form.Group className="input-field" controlID="formGroupEmail">
          <Form.Control
            type="password"
            value={inputPassword}
            placeholder="Password"
            onChange={handlePasswordChange}
          />
        </Form.Group>
        <div className="text-center sign-in-button-container">
          <button
            className="sign-in-button"
            type="submit"
            onClick={handleSignIn}
          >
            Sign In
          </button>
        </div>
      </Form>
    </div>
  );
}

export default SignIn;
