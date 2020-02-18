import React from 'react';
import Nav from '../Nav/Nav'
import SignIn from '../Landing/SignIn';
import CreateAccount from '../Landing/CreateAccount';
import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';
import Loading from '../Loading/Loading';
import MatchCard from '../MatchCard/MatchCard';
import Question from '../Question/Question';
import Results from '../Results/Results';
import { Link, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <div className="content">
        <Nav />
        <main>
          <h1>Devating Logo</h1>
          <button>
            <Link to="/createAccount">Create a new account</Link>
          </button>
          <button>
            <Link to="/signin">Sign In</Link>
          </button>

          <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/createAccount" component={CreateAccount} />
            <Route exact path="/about" component={About} />
            <Route exact path="/dashboard" component={Dashboard} />

            <Route exact path="/" component={Loading} />
            <Route exact path="/" component={Question} />
            <Route exact path="/results" component={MatchCard} />
          </Switch>
          {/* <Loading />
      <Question /> */}
          {/* <Results /> */}
        </main>
      </div>
      <footer>Copyright &copy; 2020</footer>
    </div>
  );
}

export default App;
