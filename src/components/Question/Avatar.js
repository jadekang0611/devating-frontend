import React from 'react';
import { useState } from 'react';
import maleIcon from '../../icons/male.svg';
import femaleIcon from '../../icons/female.svg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './question.css';
import person1 from '../../avatar/001-man.svg';
import person2 from '../../avatar/002-woman.svg';
import person3 from '../../avatar/003-man.svg';
import person4 from '../../avatar/004-woman.svg';
import person5 from '../../avatar/005-man.svg';
import person6 from '../../avatar/006-woman.svg';
import person7 from '../../avatar/007-man.svg';
import person8 from '../../avatar/008-woman.svg';
import person9 from '../../avatar/009-man.svg';

function Avatar(props) {
  const [avatar, setAvatar] = useState('');

  const profileAvatar = [
    person1,
    person2,
    person3,
    person4,
    person5,
    person6,
    person7,
    person8,
    person9,
  ];

  function handleAvatar(e) {
    e.preventDefault();
    setAvatar(e.target.value);
  }

  const handleSubmit = el => {
    el.preventDefault();
    props.history.push({
      pathname: '/question/1',
      state: {
        avatar: avatar,
        name: props.location.state.name,
        email: props.location.state.email,
        password: props.location.state.password
      }
    });
  };

  return (
    <div>
      <img src="/images/devating-landing-logo.svg" className="nav-logo"></img>
      <form onSubmit={handleSubmit}>
        <Container>
          <h2 className="sign-up-prompt">Select your avatar</h2>
          <Row>
            {profileAvatar.map(avatar => {
              return (
                <Col className="gender-icon">
                  <input
                    type="image"
                    src={avatar}
                    width="110"
                    height="110"
                    alt="submit"
                    value={avatar}
                    className="question-icon gender-icon"
                    onClick={handleAvatar}
                  />
                </Col>
              );
            })}
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

export default Avatar;
