import React from 'react';
import './activities.css'; // Importing CSS file

const ActivitiesData = (props) => {
  return (
    <div className='a-card'>
      <div className='a-card-inner'>
        <div className='a-card-front'>
          <div className='a-image'>
            <img src={props.image} alt=''/>
          </div>
          <h4>{props.heading}</h4>
        </div>
        <div className='a-card-back'>
          <h5>{props.text}</h5>
          <h4  style={{ color: 'green' }}>{props.price}</h4>
        </div>
      </div>
    </div> 
  )
}

export default ActivitiesData;
