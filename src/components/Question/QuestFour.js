import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

function QuestFour(props) {
  const [userData, setUserData] = useState([]);
  let favCoding = [];
  let coding = [];
  function handleToggle(e) {
    e.preventDefault();

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
    // TODO: add code to toggle image class on/off
    console.log('fav ' + favCoding);
  }

  const handleSubmit = el => {
    el.preventDefault();
    const url = 'http://localhost:7000/signup';

    for (let i = 0; i < favCoding.length; i++) {
      let obj = {
        id: favCoding[i]
      };
      coding.push(obj);
    }
    console.log('Final array: ' + JSON.stringify(coding));
    // TODO: Call API and create user. If user creates successfully, then go to the results page. Otherwise, display error message.
    // TODO: MAKE SURE that the object that we build to send to the API is formatted exactly the same as the object that the API accepts - otherwise, we will not have the proper data in our database.

    const newUser = {
      name: props.location.state.name,
      email: props.location.state.email,
      age: props.location.state.age,
      gender: props.location.state.gender,
      genderInterest: props.location.state.wantGender,
      password: props.location.state.password,
      favoriteActivities: props.location.state.activities,
      favoriteCoding: coding
    };
    console.log(JSON.stringify(newUser));
    setUserData(newUser);
    axios
      .post(url, newUser)
      .then(res => {})
      .catch(console.error);

    props.history.push({
      pathname: '/results',
      state: {
        name: props.location.state.name,
        email: props.location.state.email,
        age: props.location.state.age,
        gender: props.location.state.gender,
        genderInterest: props.location.state.wantGender,
        favoriteActivities: props.location.state.activities,
        favoriteCoding: coding
      }
    });
  };
  return (
    <div>
      <h3>Some of your favorite activities</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="image"
          src="https://via.placeholder.com/150"
          alt="submit"
          value="1"
          onClick={handleToggle}
        />
        <input
          type="image"
          src="https://via.placeholder.com/150"
          alt="submit"
          value="2"
          onClick={handleToggle}
        />
        <input
          type="image"
          src="https://via.placeholder.com/150"
          alt="submit"
          value="3"
          onClick={handleToggle}
        />
        <input
          type="image"
          src="https://via.placeholder.com/150"
          alt="submit"
          value="4"
          onClick={handleToggle}
        />
        <input
          type="image"
          src="https://via.placeholder.com/150"
          alt="submit"
          value="5"
          onClick={handleToggle}
        />
        <input
          type="image"
          src="https://via.placeholder.com/150"
          alt="submit"
          value="6"
          onClick={handleToggle}
        />
        <input
          type="image"
          src="https://via.placeholder.com/150"
          alt="submit"
          value="7"
          onClick={handleToggle}
        />
        <input
          type="image"
          src="https://via.placeholder.com/150"
          alt="submit"
          value="8"
          onClick={handleToggle}
        />
        <input
          type="image"
          src="https://via.placeholder.com/150"
          alt="submit"
          value="9"
          onClick={handleToggle}
        />
        <div>
          <p>4 of 4</p>

          <button type="submit">Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default QuestFour;
