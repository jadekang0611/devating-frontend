import React from 'react';
import Login from '../Landing/Login';
import About from '../About/About';
import Dashboard from '../Dashboard/Dashboard';
import Loading from '../Loading/Loading';
import MatchCard from '../MatchCard/MatchCard';
import Question from '../Question/Question';
import Results from '../Results/Results';
// import { Link, Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div>
      <nav><h1>Devating</h1></nav>
      <Login />
      <About />
      <Dashboard />
      <Loading />
      <MatchCard />
      <Question />
      <Results />
      <footer>Copyright &copy; 2020</footer>
    </div>
  );
}

export default App;
