import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function QuestOne(props) {
  console.log("Hit page QuestionOne");
  const [userAge, setUserAge] = useState('');
  const [userGender, setUserGender] = useState('');
  // const [submit, setSubmit] = useState('');

  function handleAgeChange(e) {
    e.preventDefault();
    setUserAge(e.target.value);
    console.log(e.target.value);
  }

  function handleGender(e) {
    e.preventDefault();
    setUserGender(e.target.value);

    console.log(e.target.value);
    console.log(props.location.state.name);
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Age"
          id="age"
          value={userAge}
          onChange={handleAgeChange}
        />
        <p>Your Gender</p>
        <input
          type="image"
          src="https://user-images.githubusercontent.com/58707118/74623751-dbad0800-5113-11ea-81e9-462ee661a1c0.png"
          alt="submit"
          value="Female"
          onClick={handleGender}
        />
        <input
          type="image"
          src="https://user-images.githubusercontent.com/58707118/74623934-7f96b380-5114-11ea-84a9-0fe8daf9122b.png"
          alt="submit"
          value="Male"
          onClick={handleGender}
        />
        <div>
          <p>1 of 4</p>

          <button type="submit">
            Next
          </button>
        </div>
      </form>
    </div>
  );

}

export default QuestOne;
