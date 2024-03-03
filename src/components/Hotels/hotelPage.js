import React, { useState } from 'react';
import HotelDataPage from './HotelDataPage';
import Hotel1 from '../../assets/hotel1.jpg';
import Hotel2 from '../../assets/hotel2.jpg';
import Hotel3 from '../../assets/hotel3.jpg';
import Hotel4 from '../../assets/hotel4.jpg';
import Hotel5 from '../../assets/hotel5.jpg';
import Hotel6 from '../../assets/hotel6.jpg';
import Hotel7 from '../../assets/hotel7.jpg';
import Hotel8 from '../../assets/hotel8.jpg';
import Hotel9 from '../../assets/hotel9.jpg';
import './hotel.css';

const HotelPage = () => {
 
  return (
    <div className='hotel'>
      <div className='hotelcard'>
        <HotelDataPage
        image={Hotel1}       
        heading="Envoy Continental Hotel"
        text="Envoy Continental Hotel is set in Dubai only 12 km away from Airport. This property provides clean and comfortable rooms cooled with air conditioning. Free WiFi is available at all areas."
        />
        <HotelDataPage
        image={Hotel2}       
        heading="Reina Boutique Hotel"
        text="Situated in Canada , 6.1 km from airport, Reina Boutique Hotel - G9 features accommodation with a garden, free private parking, a shared lounge and a terrace."
        />
        <HotelDataPage
        image={Hotel3}       
        heading="Atlas hotel"
        text="Set in Maldives, Atlas hotel offers accommodation with a shared lounge, free private parking and a restaurant. This 3-star hotel offers room service and an ATM."/>     
        </div> 
      <div className='hotelcard'>       
        <HotelDataPage
        image={Hotel4}       
        heading="Serena Hotel"
        text="NewYork Serena Hotel welcomes guests with an outdoor swimming pool and relaxing spa treatments."
        />
        <HotelDataPage
        image={Hotel5}       
        heading="Hotel Margala"
        text="Situated in London, 10 km from airport, Hotel Margala features accommodation with a fitness centre, free private parking, a garden and a terrace."
        />
        <HotelDataPage
        image={Hotel6}       
        heading="Shelton Guest"
        text="Well set in America, Shelton Guest House is located 14 km from Lake View Park, 21 km from Ayūb National Park and 37 km from Taxila Museum."/>     
      </div> 
      <div className='hotelcard'>
        <HotelDataPage
        image={Hotel7}       
        heading="Hotel Crown Plaza"
        text="Located in the city's bustling business district, in the heart of the Islamabad and 12km away from Islamabad Airport the distinctive Hotel Crown Plaza welcomes both business and leisure travelers."
        />
        <HotelDataPage
        image={Hotel8}       
        heading="Beach Luxury Hotel"
        text="On tropical grounds overlooking Matira Beach and the Sea, this polished hotel is 2 km from  financial/business district."
        />
        <HotelDataPage
        image={Hotel9}       
        heading="Chamemon Bed Phuket Town "
        text="Set within 1.7 km of Thai Hua Museum and 1.7 km of Chinpracha House, Chamemon Bed Phuket Town offers rooms in Phuket Town. With free WiFi, this 3-star hotel offers luggage storage space."/>          
      </div> 
    </div>
  )
}
export default HotelPage;