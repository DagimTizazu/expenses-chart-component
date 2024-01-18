import React from 'react'
import { useState } from 'react'

function WeekDays({ day, barAmount }) {
  //for handling hover effects
  const [isHovering, setIsHovering] = useState(false);

  function handleMouseOver(){
    setIsHovering(true);
  }

  function handleMouseOut() {
    setIsHovering(false);
  }

  //declaring main colors
  const softRed = 'hsl(10, 79%, 65%)';
  const cyan = 'hsl(186, 34%, 60%)';

  //getting todays day name and converting it to shorter version to later check with the day prop
  let today = new Date();
  let dayNames = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  let dayToday = dayNames[today.getDay()];

  //default background color for the bars
  let bgColor = softRed;

  //current day background bar color 
  if (day === dayToday) {
    bgColor = cyan;
  }

  return (
    <div className='day__container' onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
      <p className='day__hover-amount' style={{
        visibility: isHovering ? 'visible' : 'hidden' 
      }}>${barAmount}</p>
      <div className='day__bar' style={{
        backgroundColor: bgColor,
        height: (Math.round(barAmount) * 3) + 'px',
        opacity: isHovering ? '70%' : '100%'
          }}></div>
          <p className='day__name'>{day}</p>
    </div>
  )
}

export default WeekDays
