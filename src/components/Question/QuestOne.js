import React from 'react';
import QuestTwo from './QuestTwo'
import { useState } from 'react';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

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
                <input type="text" placeholder="Age" id="age" value={userAge} onChange={handleAgeChange} />
                <p>Your Gender</p>
                <input type="image" src="https://user-images.githubusercontent.com/58707118/74623751-dbad0800-5113-11ea-81e9-462ee661a1c0.png" alt="submit" value={Usergender}/>
                <input type="image" src="https://user-images.githubusercontent.com/58707118/74623934-7f96b380-5114-11ea-84a9-0fe8daf9122b.png" alt="submit" value={Usergender}/>
                <Link to='/2'>
                <button type="submit"> 1 / 4 => Next</button>
                </Link>
                <Switch>
                    <Route path='/2' exact component={QuestTwo}/>
                </Switch>
            </form>
        </div>
    );
}

export default QuestOne;