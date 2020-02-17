import React from 'react';
import { useState, useEffect } from 'react';
import { nominalTypeHack } from 'prop-types';

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

// set all match cards to display none, except for first match
const cardStyle = {
    display: 'none'
};

const firstMatch = {
    display:'block'
}
// ^maybe I can set image[0] style={firstMatch}
// change display none to display block/flex when next button is clicked
let currentMatch = 0;

function filterMatches(image){
    console.log(image.id);
}

// once next button is clicked, previous match display = none

    return (
      <div>
        {imgs.map(image => {
            let first = image[0];
            return (
              <div key={image.id} style={cardStyle}>
                <img src={image.img}></img>
                <h3>Name, age</h3>
                <button onClick={filterMatches(image)}>next</button>
              </div>
            );
        })}
      </div>
    );
}

export default MatchCard;