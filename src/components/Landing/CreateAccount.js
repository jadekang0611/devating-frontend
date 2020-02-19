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
      pathname: '/question/1',
      state: { name: name, email: email, password: password }
    });
  };

  return (
    <div className="sign-up-container">
      <img
        className="mb-4"
        src="./images/logo3.png"
        alt="devating"
        width="150"
        height="150"
      />
      <h2 className="sign-up-prompt">Create a new account</h2>
      <Form className="sign-up-form " onSubmit={handleSubmit}>
        <Form.Group className="input-field">
          <Form.Control
            type="text"
            value={name}
            placeholder="Name"
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlID="formGroupEmail" className="input-field">
          <Form.Control
            type="text"
            value={email}
            placeholder="dev@devating.com"
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlID="formGroupEmail" className="input-field">
          <Form.Control
            type="text"
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
