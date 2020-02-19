import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import cooking from '../../icons/cooking.svg';
import gaming from '../../icons/gaming.svg';
import skiing from '../../icons/skiing.svg';
import traveling from '../../icons/traveling.svg';
import trekking from '../../icons/trekking.svg';
import running from '../../icons/running.svg';
import './question.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function QuestThree(props) {
  //const [favActivities, setFavActivities] = useState([]);
  let favActivities = [];
  let activities = [];

  const [cookingClicked, changeCookingClicked] = useState(false);
  const [gamingClicked, changeGamingClicked] = useState(false);
  const [skiingClicked, changeSkiingClicked] = useState(false);
  const [travelingClicked, changeTravelingClicked] = useState(false);
  const [trekkingClicked, changeTrekkingClicked] = useState(false);
  const [runningClicked, changeRunningClicked] = useState(false);

  function handleToggle(e) {
    e.preventDefault();
    console.log(e.target);

    e.target.style.backgroundColor = 'gray';
    e.target.style.padding = '16px';
    e.target.style.outline = 'none';
    e.target.style.opacity = '0.4';
    e.target.style.border = '1px solid #ffffff';

    // let obj = {
    //   id: e.target.value
    // };

    let arr = favActivities;
    if (arr.includes(e.target.value)) {
      let index = arr.indexOf(e.target.value);
      if (index > -1) {
        arr.splice(index, 1);
      }
    } else {
      arr.push(e.target.value);
    }
    //arr.push(e.target.value);

    //   const uniqueSet = new Set(arr);
    //   const unique = [...uniqueSet];

    //   console.log("Unique : " + JSON.stringify(unique));

    favActivities = arr;
    // TODO: add code to toggle image class on/off
    console.log('fav ' + favActivities);

    // if(e.target.value === 1){
    //   changeCookingClicked(true);
    // } else if (e.target.value === 2){
    //   changeGamingClicked(true);
    // } else if (e.target.value === 3) {
    //   changeSkiingClicked(true);
    // }

    // reset();
  }

  let inputClassCooking = cookingClicked ? 'clicked-icon' : 'question-icon';
  let inputClassGaming = gamingClicked ? 'clicked-icon' : 'question-icon';
  let inputClassSkiing = skiingClicked ? 'clicked-icon' : 'question-icon';

  // function reset(){
  //   // if the value of the icon doesn't match the value of the clicked icon(e),

  // }

  const handleSubmit = el => {
    el.preventDefault();
    for (let i = 0; i < favActivities.length; i++) {
      let obj = {
        id: favActivities[i]
      };
      activities.push(obj);
    }
    console.log('Final array: ' + JSON.stringify(activities));

    props.history.push({
      pathname: '/question/4',
      state: {
        name: props.location.state.name,
        email: props.location.state.email,
        password: props.location.state.password,
        age: props.location.state.age,
        gender: props.location.state.gender,
        wantGender: props.location.state.wantGender,
        activities: activities
      }
    });
  };
  return (
    <div className="question-container">
      <form onSubmit={handleSubmit}>
        <Container>
          <h2 className="question-prompt">
            Select some of your favorite activities
          </h2>
          <Row>
            <Col>
              <input
                type="image"
                src={cooking}
                alt="cooking"
                width="100"
                height="auto"
                value="1"
                className={inputClassCooking}
                onClick={handleToggle}
              />
            </Col>
            <Col>
              <input
                type="image"
                src={gaming}
                alt="submit"
                width="100"
                height="auto"
                value="2"
                className={inputClassGaming}
                onClick={handleToggle}
              />
            </Col>
            <Col>
              <input
                type="image"
                src={skiing}
                alt="submit"
                width="100"
                height="auto"
                value="3"
                className={inputClassSkiing}
                onClick={handleToggle}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <input
                type="image"
                src={traveling}
                alt="submit"
                width="100"
                height="auto"
                value="4"
                // className={inputClass}
                onClick={handleToggle}
              />
            </Col>
            <Col>
              <input
                type="image"
                src={trekking}
                alt="submit"
                width="100"
                height="auto"
                value="5"
                // className={inputClass}
                onClick={handleToggle}
              />
            </Col>
            <Col>
              <input
                type="image"
                src={running}
                alt="submit"
                width="100"
                height="auto"
                value="6"
                // className={inputClass}
                onClick={handleToggle}
              />
            </Col>
          </Row>
          <div>
            <button
              type="submit"
              className="next-button"
              id="question-three-button"
            >
              Next
            </button>
          </div>
        </Container>
      </form>
    </div>
  );
}

export default QuestThree;
