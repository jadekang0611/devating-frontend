import React from 'react';
import MatchCard from '../MatchCard/MatchCard';

function Results(props) {
    return (
      <div>
        <h3>Take a chance on..</h3>
        {MatchCard.map(match => {
          return (
            <div>
              <MatchCard name={match.name} email={match.email} age={match.age} coding={match.favoriteCoding} />
            </div>
          );
        })}
      </div>
    );
}

export default Results;