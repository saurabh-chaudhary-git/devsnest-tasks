import React from 'react';
import "../Day 17/Calorie.css";
const Calorie = (props) => {
    console.log(props);
    return (
        <div>
                <div className="calorieCard">
                  <div>{props.name}</div> 
                  <div>you have consumed {props.calorie} cals today</div>
                </div>
        </div>
    )
}

export default Calorie
