import React from 'react';
import ZipLining from '../assets/zip-lining-01.jpg';
import BungeeJumping from '../assets/bungee-jumping-01.jpg';
import Rafting from '../assets/rafting-01.jpg';
import Paragliding from '../assets/paragliding-01.jpg';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header1';
import HomeVideo from '../assets/video.mp4';
import Destination from '../components/Destination/destination';
import ActivitiesData from '../components/Activities/activitiesData';
import Trip from '../components/Trip/trip';
import Footer from '../components/Footer/footer';
import '../components/Activities/activities.css'
import '../components/Activities/activities.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header 
        pName="header"
        video={HomeVideo} 
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination."
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination/>
      <div className='blog'>
      <h1>Activities </h1>
      <div className='blogcard'>
        <ActivitiesData
        image={ZipLining}
        heading="Zip Lining"
        text="Embark on a thrilling zip lining adventure across stunning destinations worldwide! From Costa Rica's lush rainforests to Nepal's rugged terrain, experience the adrenaline rush as you soar over cascading waterfalls and vast valleys. Each location, from Thailand's jungles to California's towering redwoods, offers its unique charm. Join us for an unforgettable experience with our travel agency services. Don't miss out on this amazing adventure!"
        price="$30"         
        />
        <ActivitiesData
        image={BungeeJumping}       
        heading="Bungee Jumping"
        text="Experience the heart-pounding thrill of bungee jumping in South Africa, where iconic bridges serve as launching pads for unforgettable adventures. Whether you're diving from the Bloukrans Bridge or the Victoria Falls Bridge, each leap offers breathtaking views and adrenaline-fueled excitement. With expert guides ensuring safety, it's an unmatched experience for thrill-seekers craving adventure in stunning surroundings."
        price="$35" 
        />
        <ActivitiesData
        image={Rafting}       
        heading="Rafting"
        text="Embark on a thrilling whitewater rafting expedition in Chile, where the pristine rivers of Patagonia offer exhilarating rapids amidst breathtaking scenery. Navigate the wild waters of the Futaleufú River or the Petrohué River, surrounded by towering mountains and ancient forests. With experienced guides leading the way, Chile promises an adrenaline-fueled rafting experience that immerses you in the heart of its natural wonders."
        price="$50" 
        />     
        <ActivitiesData
        image={Paragliding}       
        heading="Paragliding"
        text="Soar to new heights with paragliding adventures in Colombia, where the Andes Mountains provide breathtaking backdrops for exhilarating flights. Glide over lush valleys and cascading waterfalls in Medellín, or experience the thrill of coastal paragliding in San Andrés. With experienced pilots guiding your journey, Colombia offers unforgettable paragliding experiences amidst diverse and stunning landscapes."
        price="$55" 
        />     
      </div> 
      
      </div>
       
      <Trip/>
      <Footer/>
    </div>
  )
}

export default Home;
