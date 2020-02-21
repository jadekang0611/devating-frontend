import React from 'react';
import { useState } from 'react';
import './CreateAccount.css';
import Form from 'react-bootstrap/Form';

function CreateAccount(props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.history.push({
      pathname: '/question/avatar',
      state: { name: name, email: email, password: password }
    });
  };

  return (
    <div className="sign-up-container">
      <img src="/images/devating-landing-logo.svg" className="nav-logo"></img>
      <img
        className="mb-4 logo-container"
        src="./images/devatinglogo.gif"
        alt="devating"
        width="120"
        height="120"
      />
      <h2 className="sign-up-prompt">Let's get started</h2>
      <Form className="sign-up-form " onSubmit={handleSubmit}>
        <Form.Group className="input-field">
          <Form.Control
            type="text"
            value={name}
            placeholder="Name"
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group className="input-field">
          <Form.Control
            type="email"
            value={email}
            placeholder="dev@devating.com"
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlID="formGroupEmail" className="input-field">
          <Form.Control
            type="password"
            value={password}
            placeholder="love1234"
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className="text-center sign-up-button-container">
          <button className="sign-up-button" type="submit">
            Next
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateAccount;
