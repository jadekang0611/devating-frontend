import React from 'react';
import QuestTwo from './QuestTwo'
import { useState } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

function QuestOne() {
    const [userAge, setUserAge] = useState('');
    const [gender, setUserGender] = useState('');
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
                <input type="text" placeholder="Age" id="age" value={userAge} onChange={handleAgeChange} />
                <input type="image" src="https://user-images.githubusercontent.com/58707118/74623751-dbad0800-5113-11ea-81e9-462ee661a1c0.png" alt="submit" value={gender}/>
                <input type="image" src="https://user-images.githubusercontent.com/58707118/74623934-7f96b380-5114-11ea-84a9-0fe8daf9122b.png" alt="submit" value={gender}/>
                <Link to='/2'>
                <button type="submit">=> Next</button>
                </Link>
                <Switch>
                    <Route path='/2' exact component={QuestTwo}/>
                </Switch>
                <p>1 / 4</p>
            </form>
        </div>
    );
}

export default QuestOne;