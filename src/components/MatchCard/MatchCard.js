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

// set all match cards to display none, except for first match
// const cardStyle = {
//     display: 'block'
// };

// const firstMatch = {
//     display:'block'
// }
// ^maybe I can set image[0] style={firstMatch}
// change display none to display block/flex when next button is clicked
// let currentMatch = 0;

// function filterMatches(image){
//     console.log(image.id);
//     const previousMatch = currentMatch - 1;
//     const current = imgs[currentMatch];
//     const previous = imgs[previousMatch];


// }

// once next button is clicked, previous match display = none

    return (
      <div className="card-container">
        {/* {imgs.map(image => {
          // let first = image[0];
          return (
            // if there are matches, display them

            // esle display "you currently have no matches :( "
            <div key={image.id} style={cardStyle} >
              <img src={image.img}></img>
              <div className="match-info">
                <h3 className="match-name-age">Name, age</h3>
                <p>Both you and 'match name' like these languages..</p>
              </div>
              <div className="icon-container">
                <div className="code-lang-icon">icon</div>
                <div className="code-lang-icon">icon</div>
                <div className="code-lang-icon">icon</div>
              </div>
              <button onClick={filterMatches(image)} className="match-button">
                keep
              </button>
              <button onClick={filterMatches(image)} className="match-button">
                next
              </button>
            </div>
          );
        })} */}
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