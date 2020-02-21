import React from 'react';
import { useState, useEffect } from 'react';
import './Dashboard.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardDeck from 'react-bootstrap/CardDeck';

import csharp from '../../icons/csharp.svg';
import java from '../../icons/java.svg';
import javascript from '../../icons/javascript.svg';
import nodeJS from '../../icons/nodeJS.svg';
import php from '../../icons/php.svg';
import python from '../../icons/python.svg';
import react from '../../icons/react.svg';
import sql from '../../icons/sql.svg';
import swift from '../../icons/swift.svg';
import cooking from '../../icons/cooking.svg';
import gaming from '../../icons/gaming.svg';
import skiing from '../../icons/skiing.svg';
import traveling from '../../icons/traveling.svg';
import trekking from '../../icons/trekking.svg';
import running from '../../icons/running.svg';

const axios = require('axios');

function Dashboard(props) {
  const url = 'https://devating-backend.herokuapp.com/match/get/';
  const updateUrl = 'https://devating-backend.herokuapp.com/match/';
  const email = props.location.state.email;
  const updateNameUrl = 'https://devating-backend.herokuapp.com/' + email;
  const activityImages = [
    cooking,
    gaming,
    skiing,
    traveling,
    trekking,
    running
  ];
  const codingImages = [
    csharp,
    java,
    javascript,
    nodeJS,
    php,
    python,
    react,
    sql,
    swift
  ];

  const [user, setUser] = useState([]);
  const [input, setInput] = useState(false);
  const [newName, setNewName] = useState('');
  const [updatekeepArray, setUpdateKeepArray] = useState([]);

  useEffect(() => {
    axios.get(url + email).then(res => setUser(res.data));
  }, []);

  const updateName = e => {
    axios
      .put(updateNameUrl + '/' + newName)
      .then(() => window.location.reload());

    // axios
    //   .put(url + '/' + props.outfit._id, { name: newName })
    //   .then(() => window.location.reload());
  };
  const deleteEntry = () => {
    axios.delete(updateNameUrl).then(() => {
      return (window.location.href = '/');
    });
  };

  const onRemove = e => {
    setUpdateKeepArray(user[0].keep.splice(e.target.value, 1));
    axios.put(updateUrl + 'update/' + email, { keep: user[0].keep });
  };

  if (user.length > 0) {
    //console.log(user[0].keep);
    // console.log(user[0].keep[0].name);
    return (
      <div>
        <div className="dashboard-container">
          <img
            src="/images/devating-landing-logo.svg"
            className="nav-logo"
            alt="logo"
          ></img>
          {/* <Container className="edit-delete-button-container">
          <Row>
            <button className="name-button" onClick={() => setInput(!input)}>
              Edit my name
            </button>
            {input && (
              <input
                onChange={e => setNewName(e.target.value)}
                type="text"
                className="name-update-input"
              />
            )}
            {input && (
              <button onClick={updateName} className="name-save-button">
                Save
              </button>
            )}
          </Row>
          <Row>
            <button className="account-delete-button" onClick={deleteEntry}>
              Delete my account
            </button>
          </Row>
        </Container> */}
          <Container className="user-profile-info-container">
            <Row>
              <Col className="profile-name-col">
                <div className="profile-info">
                  {/* <span className="info-title">Name:</span>{' '} */}
                  <span className="user-profile-name">{user[0].name}</span>
                </div>
              </Col>
              <Col className="delete-button-col">
                {/* {' '}
                <p className="name-button" onClick={() => setInput(!input)}>
                  Edit my name
                </p>
                {input && (
                  <input
                    onChange={e => setNewName(e.target.value)}
                    type="text"
                    className="name-update-input"
                  />
                )}
                {input && (
                  <button onClick={updateName} className="name-save-button">
                    Save
                  </button>
                )} */}
                <button id="account-delete-button" onClick={deleteEntry}>
                  Delete account
                </button>
              </Col>
            </Row>
          </Container>
          {/* <div className="profile-info">
            <span className="info-title">Age:</span>{' '}
            <span className="profile-content">{user[0].age}</span>
          </div> */}

          <Container className="coding-language-activities-container">
            <Row>
              <Col xs={6} className="profile-coding-col">
                <p className="info-title">Your Fav Coding Languages</p>

                <div className="profile-icon-container-parent">
                  {user[0].favoriteCoding.map(code => {
                    return (
                      <div className="profile-icon-container">
                        <img
                          className="profile-code-lang-icon"
                          src={codingImages[code.id - 1]}
                          alt={code.id}
                        ></img>
                      </div>
                    );
                  })}
                </div>
              </Col>
              <Col xs={6}>
                <p className="info-title">Your Fav Activities</p>

                <div className="profile-icon-container-parent">
                  {user[0].favoriteActivities.map(activity => {
                    return (
                      <div className="profile-icon-container">
                        <img
                          className="profile-code-lang-icon"
                          src={activityImages[activity.id - 1]}
                          alt={activity.id}
                        ></img>
                      </div>
                    );
                  })}
                </div>
              </Col>
            </Row>
          </Container>

          <Container className="keep-match-container">
            <div className="profile-info">
              <span className="profile-match-title">Your Matches</span>
            </div>
            <Row className="keep-match-row">
              {user[0].keep.map((matchUser, i) => {
                return (
                  <CardDeck>
                    <Card
                      // style={{ width: '16rem' }}
                      className="keep-card-container"
                    >
                      <Card.Img
                        className="profile-match-card-image"
                        src={matchUser.image}
                        alt={matchUser.name}
                      />
                      <Card.Body>
                        <Card.Title className="match-name-age">
                          {matchUser.name}
                        </Card.Title>
                      </Card.Body>

                      <button
                        value={i}
                        onClick={onRemove}
                        className="match-card-delete-button"
                      >
                        Delete Match
                      </button>
                    </Card>
                  </CardDeck>
                );
              })}
            </Row>
          </Container>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Dashboard;
