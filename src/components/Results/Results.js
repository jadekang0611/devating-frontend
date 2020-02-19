import React from 'react';
import { useState, useEffect } from 'react';

const axios = require('axios');

function Results(props) {
  const url = 'http://localhost:7000/';
  const email = 'sharline@email.com';
  // const email = props.location.state.email;

  const [matches, setMatch] = useState([]);
  const [user, setUser] = useState([]);
  const [matchNum, setMatchNum] = useState(0);

  useEffect(() => {
    axios.get(url + 'match/' + email).then(res => setMatch(res.data));
  }, []);

  useEffect(() => {
    axios.get(url + 'match/get/' + email).then(res => setUser(res.data));
  }, []);

  if (user != null) {
    console.log(user[0]);
  }

  const lastClick = () => {
    console.log("lastClick");
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
      axios
        .put(url + 'match/update/' + email, { keep: keptArray })
        .then((window.location.href = '/dashboard'));
    }
  };

  const mehClick = () => {
    setMatchNum(matchNum + 1);
  }

  const lastMehClick = () => {
    window.location.href = '/dashboard';
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
        <div>
          <h3>Take a chance on..</h3>
          <div className="card-container">
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
            </div>
            <button onClick={lastClick} className="match-button">
              keep
            </button>
            <button onClick={lastMehClick} className="match-button">
              done
            </button>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h3>Take a chance on..</h3>
          <div className="card-container">
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
            </div>
            <button onClick={onClick} className="match-button">
              keep
            </button>
            <button onClick={mehClick} className="match-button">
              meh
            </button>
          </div>
        </div>
      );
    }
  } else return <div></div>;
}

export default Results;
