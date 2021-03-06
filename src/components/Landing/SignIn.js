import React from 'react';
import { useState } from 'react';
import './SignIn.css';
import Form from 'react-bootstrap/Form';

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

    axios.get(url + '/' + inputEmail /*+ '/' + inputPassword*/ ).then(res => {
      let user = res.data;
      if (user.length !== 0) {
        props.history.push({
          pathname: '/dashboard',
          state: {
            email: inputEmail
          }
        });
      } else {
        alert('SOMETHING WENT WRONG');
      }
    });
  }

  const url = 'https://devating-backend.herokuapp.com/match';

  return (
    <div className="sign-in-container">
      <img src="/images/devating-landing-logo.svg" className="nav-logo"></img>
      <img
        className="mb-4 logo-container"
        src="./images/devatinglogo.gif"
        alt="devating"
        width="120"
        height="120"
      />
      <h2 className="sign-in-prompt">Please sign in</h2>
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
