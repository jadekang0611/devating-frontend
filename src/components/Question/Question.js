import React from 'react';
import QuestOne from './QuestOne';
import QuestTwo from './QuestTwo';
import QuestThree from './QuestThree';
import QuestFour from './QuestFour';
import './question.css';


function Question() {
    return (
        <div>
            <h2>Create New</h2>
            <QuestOne />
            {/* <QuestTwo /> */}
            {/* <QuestThree />
            <QuestFour /> */}
        </div>
    );
}

export default Question;