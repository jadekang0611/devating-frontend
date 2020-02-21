import React from 'react';
import { useState } from 'react';
import axios from 'axios';
import csharp from '../../icons/csharp.svg';
import java from '../../icons/java.svg';
import javascript from '../../icons/javascript.svg';
import nodeJS from '../../icons/nodeJS.svg';
import php from '../../icons/php.svg';
import python from '../../icons/python.svg';
import react from '../../icons/react.svg';
import sql from '../../icons/sql.svg';
import swift from '../../icons/swift.svg';
import './question.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function QuestFour(props) {
  const [userData, setUserData] = useState([]);
  let favCoding = [];
  let coding = [];
  function handleToggle(e) {
    e.preventDefault();

    e.target.style.backgroundColor = 'gray';
    e.target.style.padding = '16px';
    e.target.style.outline = 'none';
    e.target.style.opacity = '0.4';
    e.target.style.border = '1px solid #ffffff';


    let arr = favCoding;
    if (arr.includes(e.target.value)) {
      let index = arr.indexOf(e.target.value);
      if (index > -1) {
        arr.splice(index, 1);
      }
    } else {
      arr.push(e.target.value);
    }

    favCoding = arr;
  }

  const handleSubmit = el => {
    el.preventDefault();
    const url = 'https://devating-backend.herokuapp.com/signup';

    for (let i = 0; i < favCoding.length; i++) {
      let obj = {
        id: favCoding[i]
      };
      coding.push(obj);
    }

    // TODO: Call API and create user. If user creates successfully, then go to the results page. Otherwise, display error message.
    // TODO: MAKE SURE that the object that we build to send to the API is formatted exactly the same as the object that the API accepts - otherwise, we will not have the proper data in our database.

    const newUser = {
      image: props.location.state.avatar,
      name: props.location.state.name,
      email: props.location.state.email,
      age: props.location.state.age,
      gender: props.location.state.gender,
      genderInterest: props.location.state.wantGender,
      password: props.location.state.password,
      favoriteActivities: props.location.state.activities,
      favoriteCoding: coding
    };

    setUserData(newUser);
    axios
      .post(url, newUser)
      .then(res => {
        let user = res.data;
        if (user.length !== 0) {
          props.history.push({
            pathname: '/results',
            state: {
              image: props.location.state.avatar,
              name: props.location.state.name,
              email: props.location.state.email,
              age: props.location.state.age,
              gender: props.location.state.gender,
              genderInterest: props.location.state.wantGender,
              favoriteActivities: props.location.state.activities,
              favoriteCoding: coding,
              user: user
            }
          });
        } else {
          alert('SOMETHING WENT WRONG');
        }
      })
      .catch(console.error);
  };
  return (
    <div className="question-container">
      <img src="/images/devating-landing-logo.svg" className="nav-logo"></img>
      <form onSubmit={handleSubmit}>
        <Container>
          <h2 className="question-prompt">
            Select some of your
            <br></br>
            favorite coding languages
          </h2>
          <Row>
            <Col className="codingIcon">
              <input
                type="image"
                src={csharp}
                alt="c#"
                width="80"
                height="auto"
                value="1"
                className="question-icon"
                onClick={handleToggle}
              />
            </Col>
            <Col className="codingIcon">
              <input
                type="image"
                src={java}
                alt="java"
                width="80"
                height="auto"
                value="2"
                className="question-icon"
                onClick={handleToggle}
              />
            </Col>
            <Col className="codingIcon">
              <input
                type="image"
                src={javascript}
                alt="javascript"
                width="80"
                height="auto"
                value="3"
                className="question-icon"
                onClick={handleToggle}
              />
            </Col>
          </Row>
          <Row>
            <Col className="codingIcon">
              <input
                type="image"
                src={nodeJS}
                alt="nodeJS"
                width="80"
                height="auto"
                value="4"
                className="question-icon"
                onClick={handleToggle}
              />
            </Col>
            <Col className="codingIcon">
              <input
                type="image"
                src={php}
                alt="php"
                width="80"
                height="auto"
                value="5"
                className="question-icon"
                onClick={handleToggle}
              />
            </Col>
            <Col className="codingIcon">
              <input
                type="image"
                src={python}
                alt="python"
                width="80"
                height="auto"
                value="6"
                className="question-icon"
                onClick={handleToggle}
              />
            </Col>
          </Row>
          <Row>
            <Col className="codingIcon">
              <input
                type="image"
                src={react}
                alt="react"
                width="80"
                height="auto"
                value="7"
                className="question-icon"
                onClick={handleToggle}
              />
            </Col>
            <Col className="codingIcon">
              <input
                type="image"
                src={sql}
                alt="sql"
                width="80"
                height="auto"
                value="8"
                className="question-icon"
                onClick={handleToggle}
              />
            </Col>
            <Col className="codingIcon">
              <input
                type="image"
                src={swift}
                alt="swift"
                width="80"
                height="auto"
                value="9"
                className="question-icon"
                onClick={handleToggle}
              />
            </Col>
          </Row>
          <div>
            <button type="submit" className="next-button">
              Sign Up
            </button>
          </div>
        </Container>
      </form>
    </div>
  );
}

export default QuestFour;
