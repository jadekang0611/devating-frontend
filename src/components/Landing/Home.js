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
              Stop feeling guilty for loving coding. Find romance from pair
              programming
            </h3>
          </Col>
        </Row>
        <Row>
          <Col>
            <button className="create-button-landing">
              <Link to="/createAccount">Create account</Link>
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
    </>
  );
}

export default Home;
