import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Switch, Route, Router, Redirect } from 'react-router-dom';

function SignIn() {
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

        <button type="submit">
          Sign In
        </button>
      </form>
    </div>
  );
}

export default SignIn;
