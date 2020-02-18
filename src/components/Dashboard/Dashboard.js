import React from 'react';
import { Redirect } from 'react-router-dom';

function Dashboard(props) {
    console.log("logged in: " + JSON.stringify(props.location.state.user));
  //if (props.auth !== true) {
    //return <Redirect to="/signin" />;
  //}
  return (
    <h3>
      This is dashboard component: user profile with match sets they've added
      goes here
    </h3>
  );
}

export default Dashboard;
