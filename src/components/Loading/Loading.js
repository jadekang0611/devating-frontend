import React from 'react';
import './loading.css';
import { Redirect } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Loading(props) {
  
  const [redirect, setRedirect] = useState(false);
  
  useEffect(() => {
    const timer = setTimeout(() => setRedirect(true), 2000);
    console.log('3 hit loading page');
    console.log( '4', redirect);
    
   return () => {
     clearTimeout(timer);
    };
  }, [])
  
  // pass props from question 4 to results
    props.history.push({
      pathname: '/results',
      state: {
        name: props.location.state.name,
        email: props.location.state.email,
        age: props.location.state.age,
        gender: props.location.state.gender,
        genderInterest: props.location.state.wantGender,
        favoriteActivities: props.location.state.activities,
        favoriteCoding: props.location.coding
      }
    });

  return (
      {redirect} ? console.log('1 redirect is true'): console.log('2 redirect is false')
      // <div className="loading">
      //   <h2>Refactoring your matches</h2>
      //   <img className="loadingIcon"
      //     src='https://user-images.githubusercontent.com/58707118/74624812-f2555e00-5117-11ea-9825-7ca3a6623c88.png'
      //     alt='refactoring'></img>
      // </div>
  );

}

export default Loading;


{/* <Redirect to='/results' /> */}