import React from 'react';
import { useState, useEffect } from 'react';
import csharp from '../../icons/csharp.svg';
import java from '../../icons/java.svg';
import javascript from '../../icons/javascript.svg';
import nodeJS from '../../icons/nodeJS.svg';
import php from '../../icons/php.svg';
import python from '../../icons/python.svg';
import react from '../../icons/react.svg';
import sql from '../../icons/sql.svg';
import swift from '../../icons/swift.svg';

const axios = require('axios');
const codingImages = [
  csharp,
  java,
  javascript,
  nodeJS,
  php,
  python,
  react,
  sql,
  swift
];

function Results(props) {
  const [keepArray, setKeepArray] = useState([]);
  const url = 'http://localhost:7000/match/';
  const email = 'jadekang@gmail.com';
  // const email = props.location.state.email;

  const [matches, setMatch] = useState([]);
  const [matchNum, setMatchNum] = useState(0);

  useEffect(() => {
    axios.get(url + email).then(res => setMatch(res.data));
  }, []);

  //console.log(arr[0]);

  const onClick = () => {
    if (matchNum < matches.length - 1) {
      setMatchNum(matchNum + 1);
    } else {
      setMatchNum(0);
    }
  };

  const onKeep = () => {
    let keepObj = {
      name: matches[matchNum].name,
      image: matches[matchNum].image
    };
    console.log('keepArray: ' + JSON.stringify(keepArray));
    keepArray.push(keepObj);
    console.log('keepArray after push: ' + JSON.stringify(keepArray));
    setKeepArray(keepArray);
    console.log('keepArray after setKeepArray: ' + JSON.stringify(keepArray));
    axios
      .put(url + 'update/' + email, { keep: keepArray })
      .then(() => onClick());
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
                      <img src={codingImages[code.id]}></img>
                    </div>
                  );
                })}
              </div>
            </div>
            <button
              onClick={onKeep(matches[matchNum])}
              className="match-button"
            >
              keep
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
                      <img src={codingImages[code.id]}></img>
                    </div>
                  );
                })}
              </div>
            </div>
            <button onClick={onKeep} className="match-button">
              keep
            </button>
            <button onClick={onClick} className="match-button">
              next
            </button>
          </div>
        </div>
      );
    }
  } else return <div></div>;
}

export default Results;
