import React from 'react';
import NavBar from '../Nav/NavBar';
import SignIn from '../Landing/SignIn';
import CreateAccount from '../Landing/CreateAccount';
import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';
import Loading from '../Loading/Loading';
import MatchCard from '../MatchCard/MatchCard';
import Question from '../Question/Question';
import Results from '../Results/Results';
import Home from '../Landing/Home';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faMars , faEnvelope } from '@fortawesome/free-solid-svg-icons';
library.add(faMars, fab, faEnvelope);

function App() {
  return (
    <div>
      <div className="content">
        <NavBar />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/signin" component={SignIn} />
            <Route path="/createAccount" component={CreateAccount} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/loading" component={Loading} />
            <Route path="/question" component={Question} />
            <Route exact path="/results" component={MatchCard} />
          </Switch>
        </main>
      </div>
      <footer>Copyright &copy; 2020 DevAting. All Rights Reserved</footer>
    </div>
  );
}

export default App;
