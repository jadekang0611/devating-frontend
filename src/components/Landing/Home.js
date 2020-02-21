import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col className="home-logo">
            <img
              src="./images/devating-landing-logo.svg"
              alt="our logo"
              className="landing-content"
            ></img>
          </Col>
        </Row>
      </Container>
      <Container className="landing-button-container text-center">
        <Row className="home-intro">
          <Col>
            <h3 className="intro-content">
              Stop feeling guilty for loving coding. <br></br>Find romance from pair
              programming
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/createAccount">
              <button className="create-button-landing landing-button">
                create account
              </button>
            </Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <Link to="/signin">
              <button className="sign-in-button-landing landing-button">
                Sign In
              </button>
            </Link>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
