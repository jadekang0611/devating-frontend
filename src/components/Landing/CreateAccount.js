import React from 'react';
import { useState } from 'react';
import './CreateAccount.css';
import Form from 'react-bootstrap/Form';
// import request from 'superagent';

const axios = require('axios');

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

  // const [addPhoto, setAddPhoto] = useState();

  // const CLOUDINARY_UPLOAD_PRESET = 'pc6vexst';
  // const CLOUDINARY_UPLOAD_URL =
  //   'https://api.cloudinary.com/v1_1/your_cloudinary_app_name/devating/upload';

  // const [imageURL, setImageURL] = useState();

  // const fileChangedHandler = e => {
  //   setAddPhoto(e.target.files[0]);
  // };
  // const uploadHandler = file => {
  //   axios
  //     .post(
  //       'https://www.filestackapi.com/api/store/S3?key=AtohbgnYPRzSkH1dv3i7Hz',
  //       { fileUpload: file }
  //     )
  //     .then(res => console.log(res.data))
  //     .then(axios.get('https://cdn.filestackcontent.com/dzNWgTqaStOrGyvaTosP'));
  // };

  return (
    <div className='sign-up-container'>
      {/* <img
        className='mb-4'
        src='./images/devating-landing-logo.svg'
        alt='devating'
        width='150'
        height='150'
      /> */}
      <h2 className='sign-up-prompt'>Let's get started</h2>
      {/* <input type="file" onChange={fileChangedHandler} />
      <button onClick={uploadHandler}>Upload your image</button> */}
      <Form className='sign-up-form ' onSubmit={handleSubmit}>
        <Form.Group className='input-field'>
          <Form.Control
            type='text'
            value={name}
            placeholder='Name'
            onChange={e => setName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlID='formGroupEmail' className='input-field'>
          <Form.Control
            type='text'
            value={email}
            placeholder='dev@devating.com'
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlID='formGroupEmail' className='input-field'>
          <Form.Control
            type='text'
            value={password}
            placeholder='love1234'
            onChange={e => setPassword(e.target.value)}
          />
        </Form.Group>
        <div className='text-center sign-up-button-container'>
          <button className='sign-up-button' type='submit'>
            Next
          </button>
        </div>
      </Form>
    </div>
  );
}

export default CreateAccount;
