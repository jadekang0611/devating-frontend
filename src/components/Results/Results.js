import React from 'react';
import MatchCard from '../MatchCard/MatchCard';

function Results(props) {
  // let matchArr = [];
  console.log(props.matches.name);
  // const getMatchData = matches => {
  //   matchArr = matches;
  //   console.log(matchArr);
  //   console.log(props);
  // };
  return (
    <div>
      <h3>Take a chance on..</h3>
      {props.matches.map(match => {
        return (
          <div>
            <p>name={match.name}</p>
            <p>email={match.email}</p>
            <p>age={match.age}</p>
            <p>coding={match.favoriteCoding}</p>
            {/* // getMatchData={getMatchData} */}
          </div>
        );
      })}
    </div>
  );
}

export default Results;
