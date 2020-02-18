import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

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
    <div>
      <form onSubmit={handleSubmit}>
        <p>You're Interested In:</p>
        <input
          type="image"
          src="https://user-images.githubusercontent.com/58707118/74623751-dbad0800-5113-11ea-81e9-462ee661a1c0.png"
          alt="submit"
          value="Female"
          onClick={handleWantGender}
        />
        <input
          type="image"
          src="https://user-images.githubusercontent.com/58707118/74623934-7f96b380-5114-11ea-84a9-0fe8daf9122b.png"
          alt="submit"
          value="Male"
          onClick={handleWantGender}
        />
        <div>
          <p>2 of 4</p>
          <button type="submit">Next</button>
        </div>
      </form>
    </div>
  );
}

export default QuestTwo;
