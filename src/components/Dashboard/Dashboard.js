import React from 'react';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
  //console.log("logged in: " + JSON.stringify(props.location.state.user));
  //if (props.auth !== true) {
  //return <Redirect to="/signin" />;
  //}
  const url = 'http://localhost:7000/match/get/';
  const updateUrl = 'http://localhost:7000/match/';
  const email = 'sharline@email.com';
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
        <button
          onClick={() => setInput(!input)}
          className="collection-update-button"
        >
          Edit Name
        </button>
        {input && (
          <input
            onChange={e => setNewName(e.target.value)}
            type="text"
            className="collection-update-input"
          />
        )}
        {input && (
          <button onClick={updateName} className="collection-update-button">
            Save
          </button>
        )}
        <button
          className="collection-update-button collection-delete-button"
          onClick={deleteEntry}
        >
          Delete Account
        </button>
        <div>Name: {user[0].name}</div>
        <div>Age: {user[0].age}</div>
        <div>Favorite Coding Languages</div>
        <div className="icon-container">
          {user[0].favoriteCoding.map(code => {
            return (
              <div className="code-lang-icon">
                <img src={codingImages[code.id]}></img>
              </div>
            );
          })}
        </div>
        <div>Favorite Activities</div>
        <div className="icon-container">
          {user[0].favoriteActivities.map(activity => {
            return (
              <div className="code-lang-icon">
                <img src={activityImages[activity.id]}></img>
              </div>
            );
          })}
        </div>
        <div>My Kept Matches</div>

        {user[0].keep.map((matchUser, i) => {
          return (
            <div>
              <img src={matchUser.image} alt={matchUser.name} />
              <button value={i} onClick={onRemove}>
                Delete
              </button>
            </div>
          );
        })}
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default Dashboard;
