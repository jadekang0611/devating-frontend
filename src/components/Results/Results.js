import React from 'react';
import { useState, useEffect } from 'react';
import './Results.css';
import Card from 'react-bootstrap/Card';

const axios = require('axios');

function Results(props) {
  const url = 'https://devating-backend.herokuapp.com/';
  const email = props.location.state.email;
  //const email = "sharline@email.com";
  const [matches, setMatch] = useState([]);
  const [user, setUser] = useState([]);
  const [matchNum, setMatchNum] = useState(0);
  const codingImages = [
    'https://daisypictures.s3.us-east-2.amazonaws.com/c_.png',
    'https://daisypictures.s3.us-east-2.amazonaws.com/java.png',
    'https://daisypictures.s3.us-east-2.amazonaws.com/javascript.png',
    'https://daisypictures.s3.us-east-2.amazonaws.com/nodeJS.png',
    'https://daisypictures.s3.us-east-2.amazonaws.com/php.png',
    'https://daisypictures.s3.us-east-2.amazonaws.com/python.png',
    'https://daisypictures.s3.us-east-2.amazonaws.com/react.png',
    'https://daisypictures.s3.us-east-2.amazonaws.com/sql.png',
    'https://daisypictures.s3.us-east-2.amazonaws.com/swift.png'
  ];

  useEffect(() => {
    axios.get(url + 'match/' + email).then(res => setMatch(res.data));
  }, []);

  useEffect(() => {
    axios.get(url + 'match/get/' + email).then(res => setUser(res.data));
  }, []);

  //console.log("User prop: " + props.state.location.user);

  const lastClick = () => {
    if (matchNum === matches.length - 1) {
      setMatchNum(matchNum + 1);
      let keptObj = {
        name: matches[matchNum].name,
        image: matches[matchNum].image
      };
      let keptArray = user[0].keep;
      keptArray.push(keptObj);
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
        <div style={{ width: '24rem' }} className="card-container">
          <img
            src="/images/devating-landing-logo.svg"
            className="nav-logo" alt="logo"
          ></img>
          <div className="match-container-parent">
            <h3 className="result-question">Take a chance on..</h3>

            <Card style={{ width: '24rem' }} className="card-container">
              <div className="image-container">
                <Card.Img
                  variant="top"
                  className="profile-picture"
                  src={matches[matchNum].image}
                  alt={matches[matchNum].name}
                />
                <div className="overlay" />
                <div className="profile-button-container">
                  <button onClick={lastClick} className="match-button1">
                    keep
                  </button>
                  <button onClick={lastMehClick} className="match-button2">
                    done
                  </button>
                </div>
              </div>
              <Card.Body>
                <Card.Title className="match-info match-name-age results-match-info">
                  {matches[matchNum].name}, {matches[matchNum].age}
                </Card.Title>

                <Card.Text className="match-content">
                  Both you and {matches[matchNum].name} like these languages..
                  <div className="coding-content-parent">
                    {matches[matchNum].favoriteCoding.slice(0, 3).map(code => {
                      console.log(code);
                      return (
                        <div className="icon-container-result">
                          <img
                            className="code-lang-icon-result"
                            src={codingImages[code.id - 1]}
                            // src={code.image}
                            alt={code.id}
                          ></img>
                        </div>
                      );
                    })}
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      );
    } else {
      return (
        <div className="match-container-parent">
          <img
            src="/images/devating-landing-logo.svg"
            className="nav-logo" alt="logo"
          ></img>
          <h3 className="result-question">Take a chance on..</h3>

          <Card style={{ width: '24rem' }} className="card-container">
            <div className="image-container">
              <Card.Img
                variant="top"
                className="profile-picture"
                src={matches[matchNum].image}
                alt={matches[matchNum].name}
              />
              <div className="overlay" />
              <div className="profile-button-container">
                <button
                  type="button"
                  onClick={onClick}
                  className="match-button1"
                >
                  keep
                </button>{' '}
                {''}
                <button
                  type="button"
                  onClick={mehClick}
                  className="match-button2"
                >
                  meh
                </button>
              </div>
            </div>
            <Card.Body>
              <Card.Title className="match-info match-name-age results-match-info">
                {matches[matchNum].name}, {matches[matchNum].age}
              </Card.Title>

              <Card.Text className="match-content">
                Both you and {matches[matchNum].name} like these languages..
                <div className="coding-content-parent">
                  {matches[matchNum].favoriteCoding.slice(0, 3).map(code => {
                    console.log(code);
                    return (
                      <div className="icon-container-result">
                        <img
                          className="code-lang-icon-result"
                          src={codingImages[code.id - 1]}
                          // src={code.image}
                          alt={code.id}
                        ></img>
                      </div>
                    );
                  })}
                </div>
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      );
    }
  } else return <div></div>;
}

export default Results;
