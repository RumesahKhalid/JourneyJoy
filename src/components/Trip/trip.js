import React from 'react';
import TripData from './tripData';
import Forest from '../../assets/forest1.jpg';
import City from '../../assets/city1.jpg';
import Beach from '../../assets/beach.jpg';
import './trip.css';

const Trip = () => {
  return (
    <div className='trip'>
      <h1>Explore Our Tours</h1>
      <p>Embark on unforgettable adventures curated just for you, from cultural expeditions to thrilling escapades.</p>
       <div className='tripcard'>
         <TripData
           image={Forest}
           heading="Wild Forest"
           text="The Wild Forest tour offers a unique opportunity to explore the natural beauty of remote forests and wilderness areas. Immerse yourself in the tranquility of nature as you hike through ancient forests, discover hidden waterfalls, and encounter a variety of wildlife species. "
         
         />
         <TripData
         image={City}
         heading="City"
         text="Experience the vibrant pulse of the city with our guided City Tour. Discover iconic landmarks, bustling neighborhoods, and hidden gems as you explore the rich history, culture, and diversity that define our urban landscape."
       
       />
       <TripData
         image={Beach}
         heading="Beaches"
         text="Embark on a relaxing and rejuvenating Beaches Tour, where sun, sand, and surf await. Explore some of the most beautiful beaches in the world, each offering its own unique charm and allure."  
     />

    
  
    </div>
    <div className='guide'>
      <h4>Come journey with us and immerse yourself in unforgettable adventures, where every moment is an opportunity<br></br> to delight in the wonders of the world.</h4>
    </div>

        


    </div>
  )
}

export default Trip;