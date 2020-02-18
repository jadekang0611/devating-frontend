import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function QuestThree(props) {
  //const [favActivities, setFavActivities] = useState([]);
  let favActivities = [];
  let activities = [];
  function handleToggle(e) {
    e.preventDefault();

    // let obj = {
    //   id: e.target.value
    // };

    let arr = favActivities;
    if (arr.includes(e.target.value)) {
      let index = arr.indexOf(e.target.value);
      if (index > -1) {
        arr.splice(index, 1);
      }
    } else {
      arr.push(e.target.value);
    }
    //arr.push(e.target.value);

    //   const uniqueSet = new Set(arr);
    //   const unique = [...uniqueSet];

    //   console.log("Unique : " + JSON.stringify(unique));

    favActivities = arr;
    // TODO: add code to toggle image class on/off
    console.log('fav ' + favActivities);
  }

  const handleSubmit = el => {
    el.preventDefault();
    for (let i = 0; i < favActivities.length; i++) {
      let obj = {
        id: favActivities[i]
      };
      activities.push(obj);
    }
    console.log('Final array: ' + JSON.stringify(activities));

    props.history.push({
      pathname: '/question/4',
      state: {
        name: props.location.state.name,
        email: props.location.state.email,
        password: props.location.state.password,
        age: props.location.state.age,
        gender: props.location.state.gender,
        wantGender: props.location.state.wantGender,
        activities: activities
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
        <div>
          <p>3 of 4</p>

          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default QuestThree;
