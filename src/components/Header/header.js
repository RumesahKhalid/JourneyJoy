import React from 'react';
import Bg from '../../assets/bg.jpg';
import './header.css';

const Header = (props) => {
  return (
    <div className={props.pName}>
      <img src={props.Image} alt='image'/>
      <video src={props.video} autoPlay loop muted className='header-video'></video>
      <div className='header-text'>
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
      </div> 
    </div>
  )
}

export default Header;