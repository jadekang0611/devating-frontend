import React from 'react';
import { useState } from 'react';

function QuestOne() {
    const [userAge, setUserAge] = useState('');
    const [submit, setSubmit] = useState('');

    function handleAgeChange(e) {
        e.preventDefault();
        setUserAge(e.target.value);
        console.log(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        setSubmit(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div>
            <form>
                <input type="text" placeholder="Age" id="age" value={userAge} onChange={handleAgeChange} />
                <input type="image" src="https://user-images.githubusercontent.com/58707118/74623751-dbad0800-5113-11ea-81e9-462ee661a1c0.png" alt="submit" />
                <input type="image" src="https://user-images.githubusercontent.com/58707118/74623934-7f96b380-5114-11ea-84a9-0fe8daf9122b.png" alt="submit" />
                <button type="submit" onClick={handleSubmit}>=> Next</button>
                <p>1 / 4</p>
            </form>
        </div>
    );
}

export default QuestOne;