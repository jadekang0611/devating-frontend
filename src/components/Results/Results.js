import React from 'react';
import { useState, useEffect } from 'react';
import './Results.css';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const axios = require('axios');

function Results(props) {
  const url = 'http://localhost:7000/';
  const email = props.location.state.email;
  //const email = "sharline@email.com";
  const [matches, setMatch] = useState([]);
  const [user, setUser] = useState([]);
  const [matchNum, setMatchNum] = useState(0);

  useEffect(() => {
    axios.get(url + 'match/' + email).then(res => setMatch(res.data));
  }, []);

  useEffect(() => {
    axios.get(url + 'match/get/' + email).then(res => setUser(res.data));
  }, []);

  //console.log("User prop: " + props.state.location.user);

  const lastClick = () => {
    console.log('lastClick');
    console.log(matchNum);
    console.log(matches.length);
    if (matchNum === matches.length - 1) {
      setMatchNum(matchNum + 1);
      let keptObj = {
        name: matches[matchNum].name,
        image: matches[matchNum].image
      };
      let keptArray = user[0].keep;
      keptArray.push(keptObj);
      console.log(keptArray);
      axios.put(url + 'match/update/' + email, { keep: keptArray }).then(
        props.history.push({
          pathname: '/dashboard',
          state: {
            email: email
          }
        })
      );
    }
  };

  const mehClick = () => {
    setMatchNum(matchNum + 1);
  };

  const lastMehClick = () => {
    props.history.push({
      pathname: '/dashboard',
      state: {
        email: email
      }
    });
  };

  //console.log(arr[0]);

  const onClick = () => {
    if (matchNum < matches.length - 1) {
      setMatchNum(matchNum + 1);
      // new code
      let keepObj = {
        name: matches[matchNum].name,
        image: matches[matchNum].image
      };
      let keepArray = user[0].keep;
      keepArray.push(keepObj);
      axios.put(url + 'match/update/' + email, { keep: keepArray });
    } else {
      setMatchNum(0);
    }
  };

  if (matches.length > 0) {
    if (matchNum === matches.length - 1) {
      return (
        <div>
          <h1>Find your match...</h1>
          <Card className="match-container">
            <Card.Img
              variant="top"
              src={matches[matchNum].image}
              className="profile-picture"
            />
            <Card.Body>
              <Card.Title>
                {matches[matchNum].name}, {matches[matchNum].age}
              </Card.Title>
              <Card.Text>
                Both you and {matches[matchNum].name} like these languages..
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
            <div className="icon-container">
              {matches[matchNum].favoriteCoding.map(code => {
                return (
                  <Container>
                    <Row>
                      <Col>
                        <img className="coding-icon" src={code.image}></img>
                      </Col>
                    </Row>
                  </Container>
                );
              })}
            </div>
          </Card>
          {/* <div className="card-container">
            <div>
              <img src={matches[matchNum].image} alt="flower"></img>
              <div className="match-info">
                <h3 className="match-name-age">
                  {matches[matchNum].name}, {matches[matchNum].age}
                </h3>
                <p>
                  Both you and {matches[matchNum].name} like these languages..
                </p>
              </div>
              <div className="icon-container">
                {matches[matchNum].favoriteCoding.map(code => {
                  return (
                    <div className="code-lang-icon">
                      <img src={code.image}></img>
                    </div>
                  );
                })}
              </div>
            </div> */}
          <button onClick={onClick} className="match-button">
            keep
          </button>
        </div>
        // </div>
      );
    } else {
      return (
        <div>
          <h1>Find your match...</h1>
          <Card className="match-container">
            <Card.Img
              variant="top"
              src={matches[matchNum].image}
              className="profile-picture"
            />
            <Card.Body>
              <Card.Title>
                {matches[matchNum].name}, {matches[matchNum].age}
              </Card.Title>
              <Card.Text>
                Both you and {matches[matchNum].name} like these languages..
              </Card.Text>
            </Card.Body>
            <Card.Footer></Card.Footer>
            <div className="icon-container">
              {matches[matchNum].favoriteCoding.map(code => {
                return (
                  <Container>
                    <Row>
                      <Col>
                        <img className="coding-icon" src={code.image}></img>
                      </Col>
                    </Row>
                  </Container>
                );
              })}
            </div>
          </Card>
          {/* <div className="card-container">
            <div>
              <img src={matches[matchNum].image} alt="flower"></img>
              <div className="match-info">
                <h3 className="match-name-age">
                  {matches[matchNum].name}, {matches[matchNum].age}
                </h3>
                <p>
                  Both you and {matches[matchNum].name} like these languages..
                </p>
              </div>
              <div className="icon-container">
                {matches[matchNum].favoriteCoding.map(code => {
                  return (
                    <div className="code-lang-icon">
                      <img src={code.image}></img>
                    </div>
                  );
                })}
              </div>
            </div> */}
          <button onClick={onClick} className="match-button">
            keep
          </button>
          <button onClick={onClick} className="match-button">
            next
          </button>
        </div>
        // </div>
      );
    }
  } else return <div></div>;
}

export default Results;
