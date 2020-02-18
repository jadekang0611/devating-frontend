import React from 'react';
import QuestOne from './QuestOne';
import QuestTwo from './QuestTwo';
import QuestThree from './QuestThree';
import QuestFour from './QuestFour';
import './question.css';

import { Switch, Route, Router, Redirect } from 'react-router-dom';

function Question() {
  return (
    <Switch>
      <Route path="/question/1" component={QuestOne} />
      <Route path="/question/2" component={QuestTwo} />
      <Route path="/question/3" component={QuestThree} />
      <Route path="/question/4" component={QuestFour} />
    </Switch>
  );

}

export default Question;
