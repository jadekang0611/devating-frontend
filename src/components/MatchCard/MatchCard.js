import React from 'react';
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

    return (
      <div>
        {imgs.map(image => {
            return (
              <div key={image.id}>
                <img src={image.img}></img>
                <h3>Name, age</h3>
              </div>
            );
        })}
      </div>
    );
}

export default MatchCard;