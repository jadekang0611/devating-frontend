import React from 'react';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

const axios = require('axios');

function Dashboard(props) {
  //console.log("logged in: " + JSON.stringify(props.location.state.user));
  //if (props.auth !== true) {
  //return <Redirect to="/signin" />;
  //}
  const url = 'http://localhost:7000/match/get/';
  const email = 'sharline@email.com';
  const updateNameUrl = 'http://localhost:7000/' + email;

  const [user, setUser] = useState([]);
  const [input, setInput] = useState(false);
  const [newName, setNewName] = useState('');

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

  if (user.length > 0) {
    console.log(user[0].keep);
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
        <div>Favorite Coding Languages: {user[0].name}</div>
        <div className="icon-container">
          {user[0].favoriteCoding.map(code => {
            return (
              <div className="code-lang-icon">
                <img src={code.image}></img>
              </div>
            );
          })}
        </div>
        <div>Favorite Activities</div>
        <div className="icon-container">
          {user[0].favoriteActivities.map(activity => {
            return (
              <div className="code-lang-icon">
                <img src={activity.image}></img>
              </div>
            );
          })}
        </div>
        <div>My Kept Matches</div>

        {user[0].keep.map((matchUser, i) => {
          return (
            <div>
              <img src={matchUser.image} alt={matchUser.name} />
              {/* <button value={i} onClick={removeKeepUser}>
                Delete
              </button> */}
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
