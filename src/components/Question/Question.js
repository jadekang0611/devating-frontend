import React from 'react';
import Avatar from './Avatar';
import QuestOne from './QuestOne';
import QuestTwo from './QuestTwo';
import QuestThree from './QuestThree';
import QuestFour from './QuestFour';
import './question.css';

import { Switch, Route } from 'react-router-dom';

function Question() {
  return (
    <div>
      <img src="/images/devating-landing-logo.svg" className="nav-logo"></img>
      <Switch>
        <Route path="/question/avatar" component={Avatar} />
        <Route path="/question/1" component={QuestOne} />
        <Route path="/question/2" component={QuestTwo} />
        <Route path="/question/3" component={QuestThree} />
        <Route path="/question/4" component={QuestFour} />
      </Switch>
    </div>
  );
}

export default Question;
