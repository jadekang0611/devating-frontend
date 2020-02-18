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
import { Link, Switch, Route, Redirect } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

function App() {
  return (
    <div>
      <div className="content">
        <NavBar />
        <main>
          <Container>
            <Row>
              <Col>
                <h2 className="landing-content">
                  Sint adipisicing magna amet minim magna et pariatur officia id
                  Lorem velit. Qui do est adipisicing laborum irure deserunt
                  incididunt.
                </h2>
              </Col>
            </Row>
          </Container>
          <Container className="landing-button-container text-center">
            <Row>
              <Col>
                <button className="create-button-landing ">
                  <Link to="/createAccount">Create a new account</Link>
                </button>
              </Col>
            </Row>
            <Row>
              <Col>
                <button className="sign-in-button-landing">
                  <Link to="/signin">Sign In</Link>
                </button>
              </Col>
            </Row>
          </Container>
          <Switch>
            <Route exact path="/signin" component={SignIn} />
            <Route exact path="/createAccount" component={CreateAccount} />
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
