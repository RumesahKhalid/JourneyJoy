import React from 'react';
import { useNavigate } from 'react-router-dom';
const HotelDataPage = (props) => {
  
 const navigate = useNavigate();
  return (
    <div className='h-card'>
      <div className='h-image'>
        <img src={props.image} alt=''/>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <button className="book-button" onClick={() => navigate("/booking")}>Book Now</button>
    </div> 
  )
}

export default HotelDataPage;