import React from 'react';
import { useState, useEffect } from 'react';

function CreateAccount() {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputPassword, setInputPassword] = useState('');
  const [inputPasswordConfirm, setInputPasswordConfirm] = useState('');

  function handleNameChange(e) {
    e.preventDefault();
    setInputName(e.target.value);
    console.log(e.target.value);
  }

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

  function handlePasswordConfirmChange(e) {
    e.preventDefault();
    setInputPasswordConfirm(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <p>Please fill out the following information</p>
      <form>
        <input
          type="text"
          value={inputName}
          placeholder="Name"
          onChange={handleNameChange}
        ></input>
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
        <input
          type="text"
          value={inputPasswordConfirm}
          placeholder="love1234"
          onChange={handlePasswordConfirmChange}
        ></input>
        <button type="submit" onClick>
          Next
        </button>
      </form>
    </div>
  );
}

export default CreateAccount;
