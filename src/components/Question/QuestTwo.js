import React from 'react';
import QuestThree from './QuestThree';
import { useState } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

function QuestTwo() {
  const [WantGender, setWantGender] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setWantGender(e.target.value);
    console.log(e.target.value);
  }

  return (
    <div>
      <form>
        <p>You're Interested In:</p>
        <input
          type='image'
          src='https://user-images.githubusercontent.com/58707118/74623751-dbad0800-5113-11ea-81e9-462ee661a1c0.png'
          alt='submit'
          value={WantGender}
        />
        <input
          type='image'
          src='https://user-images.githubusercontent.com/58707118/74623934-7f96b380-5114-11ea-84a9-0fe8daf9122b.png'
          alt='submit'
          value={WantGender}
        />
        <Link to='/3'>
          <button type='submit' onClick={handleSubmit}>
            2 / 4 => Next
          </button>
        </Link>
        <Switch>
          <Route path='/3' exact component={QuestThree} />
        </Switch>
      </form>
    </div>
  );
}

export default QuestTwo;