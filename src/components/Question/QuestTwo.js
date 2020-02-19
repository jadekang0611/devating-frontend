import React from 'react';
import { useState } from 'react';
import maleIcon from '../../icons/male.svg';
import femaleIcon from '../../icons/female.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Question.css';

function QuestTwo(props) {
  const [wantGender, setWantGender] = useState('');

  function handleWantGender(e) {
    e.preventDefault();
    setWantGender(e.target.value);
    console.log(e.target.value);
  }

  const handleSubmit = el => {
    el.preventDefault();
    props.history.push({
      pathname: '/question/3',
      state: {
        name: props.location.state.name,
        email: props.location.state.email,
        password: props.location.state.password,
        age: props.location.state.age,
        gender: props.location.state.gender,
        wantGender: wantGender
      }
    });
  };

  return (
    <div className="question-container">
      <form onSubmit={handleSubmit}>
        <Container>
          <h2 className="question-prompt">Select a gender of your interest</h2>
          <Row>
            <Col>
              <input
                type="image"
                src={femaleIcon}
                width="110"
                height="110"
                alt="submit"
                value="Female"
                className="question-icon gender-icon"
                onClick={handleWantGender}
              />
            </Col>
            <Col>
              <input
                type="image"
                src={maleIcon}
                width="110"
                height="110"
                alt="submit"
                value="Male"
                className="question-icon gender-icon"
                onClick={handleWantGender}
              />
            </Col>
          </Row>
          <div className="question-card-bottom">
            <button type="submit" className="next-button">
              Next
            </button>
          </div>
        </Container>
      </form>
    </div>
  );
}

export default QuestTwo;
