import React from 'react';
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
      <header>
        <Link to="/home">
          <h1>Devating</h1>
        </Link>
      </header>
      <nav>
        <ul>
          <li>
            <Link to="about">About</Link>
          </li>
          {/* <li>
            <Link to="/signin">Sign In</Link>
          </li> */}
          {/* <li> */}
          {/* {' '} <--- was this supposed to be something? or just an accident? */}
          {/* <Link to="/createAccount">Create a new account</Link>
          </li> */}
          <li>
            <Link to="/dashboard">See Your Saved Matches</Link>
          </li>
          <li>
            <Link to="/">Devating Gets Your Romantic Programmers</Link>
          </li>
        </ul>
      </nav>
      <main>
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
          <Route exact path="/home" component={Results} />
        </Switch>
        {/* <Loading />
      <Question /> */}
        {/* <Results /> */}
      </main>
      <footer>Copyright &copy; 2020</footer>
    </div>
  );
}

export default App;
