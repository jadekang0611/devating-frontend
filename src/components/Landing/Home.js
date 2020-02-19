import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <Container>
        <Row>
          <Col className="Home-Logo">
            <img
              src="./images/devating-landing-logo.svg"
              className="landing-content"
            ></img>
          </Col>
        </Row>
      </Container>
      <Container className="landing-button-container text-center">
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
