import React from 'react';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import maleIcon from '../../icons/male.svg';
import femaleIcon from '../../icons/female.svg';
import './question.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function QuestOne(props) {
  const [userAge, setUserAge] = useState('');
  const [userGender, setUserGender] = useState('');

  function handleAgeChange(e) {
    e.preventDefault();
    setUserAge(e.target.value);
  }

  function handleGender(e) {
    e.preventDefault();
    setUserGender(e.target.value);
  }

  const handleSubmit = el => {
    el.preventDefault();
    props.history.push({
      pathname: '/question/2',
      state: {
        name: props.location.state.name,
        email: props.location.state.email,
        password: props.location.state.password,
        age: userAge,
        gender: userGender
      }
    });
  };

  return (
    <div className="question-container">
      <Form onSubmit={handleSubmit}>
        <Container>
          <h2 className="question-prompt">Tell us your age</h2>
          <Row>
            <Col>
              <Form.Group className="input-field">
                <Form.Control
                  type="text"
                  placeholder="Age"
                  id="age"
                  value={userAge}
                  onChange={handleAgeChange}
                  className="question-input"
                />
              </Form.Group>
            </Col>
          </Row>
          <div className="separate-div"></div>
          <h2 className="question-prompt">Select your gender</h2>
          <Row>
            <Col className="gender-icon">
              <input
                type="image"
                src={femaleIcon}
                width="110"
                height="110"
                alt="submit"
                value="Female"
                className="question-icon gender-icon"
                onClick={handleGender}
              />
            </Col>
            <Col className="gender-icon">
              <input
                type="image"
                src={maleIcon}
                width="110"
                height="110"
                alt="submit"
                value="Male"
                className="question-icon gender-icon"
                onClick={handleGender}
              />
            </Col>
          </Row>
          <div className="question-card-bottom">
            <button type="submit" className="next-button">
              Next
            </button>
          </div>
        </Container>
      </Form>
    </div>
  );
}

export default QuestOne;
