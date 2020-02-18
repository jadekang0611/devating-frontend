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
    </>
  );
}

export default Home;
