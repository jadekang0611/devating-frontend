import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function QuestOne() {
  const [userAge, setUserAge] = useState('');
  const [Usergender, setUserGender] = useState('');
  // const [submit, setSubmit] = useState('');

  function handleAgeChange(e) {
    e.preventDefault();
    setUserAge(e.target.value);
    console.log(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserGender(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <form onClick={handleSubmit}>
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
          value={Usergender}
        />
        <input
          type="image"
          src="https://user-images.githubusercontent.com/58707118/74623934-7f96b380-5114-11ea-84a9-0fe8daf9122b.png"
          alt="submit"
          value={Usergender}
        />
        <div>
          <p>1 of 4</p>
          <Link to="/question/2">
            <button type="submit">Next</button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default QuestOne;
