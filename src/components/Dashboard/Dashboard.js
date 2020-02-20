import React from 'react';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './Dashboard.css';
import Card from 'react-bootstrap/Card';

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
  const url = 'http://localhost:7000/match/get/';
  const updateUrl = 'http://localhost:7000/match/';
  const email = props.location.state.email;
  const updateNameUrl = 'http://localhost:7000/' + email;
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
    console.log(user);
    //console.log(user[0].keep);
    // console.log(user[0].keep[0].name);
    return (
      <div>
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
        <button className="account-delete-button" onClick={deleteEntry}>
          Delete my account
        </button>
        <div className="profile-info">Name: {user[0].name}</div>
        <div className="profile-info">Age: {user[0].age}</div>
        <div className="profile-info">Favorite Coding Languages</div>
        <div className="profile-icon-container profile-info">
          {user[0].favoriteCoding.map(code => {
            return (
              <div className="profile-icon-container">
                <img
                  className="profile-code-lang-icon"
                  src={codingImages[code.id]}
                  alt={code.id}
                ></img>
              </div>
            );
          })}
        </div>
        <div className="profile-info">Favorite Activities</div>
        <div className="profile-icon-container profile-info">
          {user[0].favoriteActivities.map(activity => {
            return (
              <div className="profile-icon-container">
                <img
                  className="profile-code-lang-icon"
                  src={activityImages[activity.id]}
                  alt={activity.id}
                ></img>
              </div>
            );
          })}
        </div>
        <div className="profile-info">My Kept Matches</div>

        {user[0].keep.map((matchUser, i) => {
          return (
            <Card style={{ width: '24rem' }} className="keep-card-container">
              <Card.Img src={matchUser.image} alt={matchUser.name} />
              <Card.Body>
                <Card.Title className=" match-info match-name-age">
                  {matchUser.name}, {matchUser.age}
                </Card.Title>
              </Card.Body>
              <button value={i} onClick={onRemove}>
                Delete
              </button>
            </Card>
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Dashboard;
