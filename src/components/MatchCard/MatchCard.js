import React from 'react';
import './MatchCard.css';
import { useState, useEffect } from 'react';

function MatchCard() {
const [imgs, setImgs] = useState([
    {
       img: 'https://images.pexels.com/photos/1253718/pexels-photo-1253718.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
       id: 1 
    },
    {
        img: 'https://images.pexels.com/photos/931179/pexels-photo-931179.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        id: 2
    },
    {
        img: 'https://images.pexels.com/photos/1381679/pexels-photo-1381679.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        id: 3
    },
    {
        img: 'https://images.pexels.com/photos/1266810/pexels-photo-1266810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        id: 4
    }
]);
const [matchNum, setMatchNum] = useState(0);

const onClick = () => {
  if(matchNum < imgs.length - 1){
    setMatchNum( matchNum + 1);
  } else {
    setMatchNum(0);
  }
}

    return (
      <div className="card-container">
        <div key={imgs[matchNum].id}>
          <img src={imgs[matchNum].img} alt="flower picture"></img>
          <div className="match-info">
            <h3 className="match-name-age">Name, age</h3>
            <p>Both you and 'match name' like these languages..</p>
          </div>
          <div className="icon-container">
            <div className="code-lang-icon">icon</div>
            <div className="code-lang-icon">icon</div>
            <div className="code-lang-icon">icon</div>
          </div>
          <button onClick={onClick} className="match-button">
            keep
          </button>
          <button onClick={onClick} className="match-button">
            next
          </button>
        </div>
      </div>
    );
}

export default MatchCard;

// https://stackoverflow.com/questions/54318353/react-show-an-array-value-at-a-time-and-change-with-the-click