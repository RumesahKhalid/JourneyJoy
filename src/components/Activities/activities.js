import React from 'react';
import ActivitiesData from './activitiesData';
import ZipLining from '../../assets/zip-lining-01.jpg';
import BungeeJumping from '../../assets/bungee-jumping-01.jpg';
import Rafting from '../../assets/rafting-01.jpg';
import Paragliding from '../../assets/paragliding-01.jpg';
import SkiTouring from '../../assets/ski-touring-01.jpg';
import Surfing from '../../assets/serfing-01.jpg';
import JungleHiking from '../../assets/jungle-hiking1.jpg';
import ViaFerrata from '../../assets/via-ferrate-01.jpg';
import Mountain from '../../assets/mountain-01.jpg';
import Caving from '../../assets/caving.jpg';
import ScubaDiving from '../../assets/scuba-diving-01.jpg';
import SkyDiving from '../../assets/sky-diving-01.jpg';
import './activities.css';

const Activities = () => {
  return (
    <div className='blog'>
      <p>Swipe for activity details!</p>
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
      <div className='blogcard'>       
        <ActivitiesData
        image={SkiTouring}       
        heading="Ski Touring"
        text="Embark on an exhilarating ski touring adventure in Norway, where pristine snow-covered landscapes and majestic mountains await. Traverse remote trails in the Arctic wilderness of Tromsø or explore the stunning fjords of Lofoten. With expert guides leading the way, experience the thrill of ascending untouched slopes and enjoying breathtaking descents in some of the world's most scenic surroundings."
        price="$100" 
        />
        <ActivitiesData
        image={Surfing}       
        heading="Surfing"
        text="Ride the waves and experience the thrill of surfing in Portugal, where world-class breaks and stunning coastal scenery beckon. From the renowned breaks of Peniche to the hidden gems along the Algarve coast, Portugal offers diverse surf spots suitable for all levels. With warm waters and consistent swells year-round, Portugal is a surfer's paradise waiting to be explored."
        price="$60" 
        />
        <ActivitiesData
        image={JungleHiking}       
        heading="Jungle Hiking"
        text="Embark on an adventurous jungle hiking expedition in Costa Rica, where lush rainforests teem with biodiversity and hidden wonders. Traverse rugged trails in national parks like Corcovado or Manuel Antonio, immersing yourself in the sights and sounds of the tropical wilderness. With knowledgeable guides leading the way, discover cascading waterfalls, exotic wildlife, and breathtaking vistas on an unforgettable jungle hiking experience."
        price="$50" 
        /> 
        <ActivitiesData
        image={ViaFerrata}       
        heading="Via Ferrata"
        text="Embark on an exhilarating Via Ferrata adventure in the Dolomites of Italy, where towering peaks and dramatic landscapes await. Climb protected iron routes, traverse suspended bridges, and conquer breathtaking vertical ascents while surrounded by stunning alpine scenery. With certified guides leading the way, experience the thrill of Via Ferrata, offering an unforgettable blend of adrenaline and awe-inspiring vistas."
        price="$50" 
        />     
      </div> 
      <div className='blogcard'>
        <ActivitiesData
        image={Mountain}       
        heading="Mountain Hiking"
        text="Embark on thrilling mountain hikes in Pakistan's Karakoram, Himalayas, and Hindu Kush ranges. Explore remote valleys and ancient glaciers, with towering peaks like K2 and Nanga Parbat as your backdrop. With routes for all levels, from moderate to challenging, Pakistan offers adventurers the chance to experience high-altitude trekking amidst breathtaking landscapes and rich cultural heritage."
        price="$500" 
        />
        <ActivitiesData
        image={Caving}       
        heading="Caving"
        text="Delve into the mysterious underworld of caving adventures in Mexico, where hidden caverns and intricate limestone formations await exploration. Traverse winding passages in the Yucatan Peninsula's extensive network of cenotes, or discover the colossal chambers of the Cave of Swallows in San Luis Potosí. With experienced guides leading the way, Mexico offers thrilling caving experiences amidst stunning natural wonders."
        price="$60" 
        />
        <ActivitiesData
        image={ScubaDiving}       
        heading="Scuba Diving"
        text="Explore vibrant coral reefs and diverse marine life with scuba diving in Thailand. Dive into crystal-clear waters of destinations like the Similan Islands or Koh Tao, encountering colorful fish, rays, and sea turtles. With certified instructors guiding your journey, Thailand offers unforgettable underwater adventures amidst stunning landscapes."
        price="$40" 
        />     
        <ActivitiesData
        image={SkyDiving}       
        heading="Sky Diving"
        text="Experience thrilling skydiving in Dubai, soaring above iconic landmarks like the Palm Jumeirah. Enjoy the exhilarating freefall before gently descending back to earth. With expert instructors ensuring safety, Dubai promises unforgettable adventures amidst stunning urban and desert landscapes."
        price="$200" 
        />     
      </div> 
    </div>
  )
}
export default Activities;