import React from 'react';

const BloggingData = (props) => {
  return (
    <div className='b-card'>
      <div className='b-image'>
        <img src={props.image} alt=''/>
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
    </div> 
  )
}

export default BloggingData;