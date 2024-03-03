import React from 'react';
import BloggingData from './bloggingData';
import Wild1 from '../../assets/wild1.jpg';
import Wild2 from '../../assets/wild2.jpg';
import Wild3 from '../../assets/wild3.jpg';
import Adventure1 from '../../assets/adven1.jpg';
import Adventure2 from '../../assets/adven2.jpg';
import Adventure3 from '../../assets/adven3.jpg';
import Beach1 from '../../assets/beach1.jpg';
import Beach2 from '../../assets/beach2.jpg';
import Beach3 from '../../assets/beach3.jpg';
import './blogging.css';

const Blogging = () => {
  return (
    <div className='blog'>
      <h1>Travel articles</h1>
      <p>Our informative, engaging, and visually appealing to capture for audience's interest </p>
      <h1>WildLife Tour</h1>
      <div className='blogcard'>
        <BloggingData
        image={Wild1}       
        heading="Maasai Mara National Reserve, Kenya"
        text="Known for the Great Migration of wildebeest, zebra, and other antelope, as well as its population of lions, cheetahs, and other predators."
        />
        <BloggingData
        image={Wild2}       
        heading="Galapagos Islands, Ecuador"
        text="Famous for its unique wildlife, including giant tortoises, marine iguanas, and diverse bird species like the blue-footed booby."
        />
        <BloggingData
        image={Wild3}       
        heading="Kruger National Park, South Africa"
        text="Home to the Big Five (lion, leopard, elephant, buffalo, rhino) and a wide variety of other animals and birds."/>     
      </div> 
      <h1>Adventure Tour</h1>
      <div className='blogcard'>       
        <BloggingData
        image={Adventure1}       
        heading="New Zealand"
        text="Known for its stunning landscapes, New Zealand offers a wide range of adventure activities, including bungee jumping, skydiving, ziplining, and hiking in places like Fiordland National Park and Tongariro National Park."
        />
        <BloggingData
        image={Adventure2}       
        heading="Nepal"
        text="Home to the Himalayas, Nepal is a paradise for trekking and mountaineering enthusiasts. The Everest Base Camp trek and the Annapurna Circuit are among the most popular treks in the world."
        />
        <BloggingData
        image={Adventure3}       
        heading="Iceland"
        text="Known for its dramatic landscapes, Iceland offers adventures such as glacier hiking, ice cave exploring, snorkeling in Silfra Fissure, and chasing the Northern Lights."/>     
      </div> 
      <h1>Beaches Tour</h1>
      <div className='blogcard'>
        <BloggingData
        image={Beach1}       
        heading="Maldives"
        text="Famous for its overwater bungalows and pristine white-sand beaches, the Maldives offers a truly luxurious beach experience"
        />
        <BloggingData
        image={Beach2}       
        heading="Matira Beach, Bora Bora"
        text="This beach in French Polynesia is famous for its stunning beauty and is often praised for its clean and pristine environment."
        />
        <BloggingData
        image={Beach3}       
        heading="Phuket, Thailand"
        text="With its vibrant nightlife, stunning beaches, and lush forests, Phuket offers a mix of relaxation and adventure."/>     
      </div> 
    </div>
  )
}
export default Blogging;