import React from 'react';
import Taal1 from '../../assets/taal1.jpg';
import Taal2 from '../../assets/taal2.jpg';
import Bali1 from '../../assets/bali1.jpg';
import Bali2 from '../../assets/bali2.jpg';
import './destination.css';

const Destination = () => {
  return (
    <div className='destination'>
     <h1>Popular Destination</h1>
     <p>Tours give you the opportunity to see alot, within a time frame.</p>
      <div className='first-des'>
        <div className='des-text'>
          <h2>Taal Volcano, Batanges</h2>
          <p>The volcano is one of the most active in the Philippines and has erupted several times in recorded history. The most recent significant eruption occurred in January 2020, leading to ashfall in nearby areas and the evacuation of thousands of people.
          Taal Volcano is a popular tourist destination, known for its scenic views and the opportunity to hike up to the crater. Boat tours are also available for visitors to explore the lake surrounding the volcano. However, due to its active nature, visitors are advised to check the volcano's status and adhere to safety precautions before planning a visit.</p>
        </div>
        <div className='image'>
           <img src={Taal1} alt=''/>
           <img src={Taal2} alt=''/>
        </div>
      </div>
      <div className='first-des-reverse'>
        <div className='des-text'>
          <h2>Bali,Indonesia</h2>
          <p>Exploring Bali can be a truly enriching experience due to several reasons:
          Bali is renowned for its stunning natural landscapes, including lush rice terraces, pristine beaches, and volcanic mountains like Mount Agung and Mount Batur. It has a unique and vibrant culture, with intricate temples, traditional dances, and ceremonies that offer insights into the island's spiritual beliefs and practices.
          It offers a wide range of adventure activities such as surfing, diving, hiking, and white-water rafting, making it a paradise for adventure enthusiasts.
          Overall, Bali offers a perfect blend of natural beauty, rich culture, adventure, and relaxation, making it a must-visit destination for travelers seeking a memorable and fulfilling experience.
         </p>
        </div>
        <div className='image'>
          <img src={Bali1} alt=''/>
          <img src={Bali2} alt=''/>
        </div>
      </div>
    </div>
  )
}

export default Destination;