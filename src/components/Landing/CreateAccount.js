import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Switch, Route, Router, Redirect } from 'react-router-dom';

function CreateAccount(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push({
      pathname: '/question/1',
      state: { name: name, email: email, password: password }
    });
  };

  return (
    <div>
      <p>Please fill out the following information</p>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          placeholder="Name"
          onChange={e => setName(e.target.value)}
        ></input>
        <input
          type="text"
          value={email}
          placeholder="dev@devating.com"
          onChange={e => setEmail(e.target.value)}
        ></input>
        <input
          type="text"
          value={password}
          placeholder="love1234"
          onChange={e => setPassword(e.target.value)}
        ></input>

        <button type="submit">Next</button>
      </form>
    </div>
  );
}

export default CreateAccount;
