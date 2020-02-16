import React from 'react';
import QuestOne from './QuestOne';
import QuestTwo from './QuestTwo';
import QuestThree from './QuestThree';
import QuestFour from './QuestFour';


function Question() {
    return (
        <div>
        <h3>This is question component: to hold 4 questions component</h3>
        <QuestOne />
        <QuestTwo />
        <QuestThree />
        <QuestFour />
        </div>
    );
}

export default Question;