// pages/Service.js
import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Footer from '../components/Footer/footer';
import Trip from '../components/Trip/trip';
import MySlider from '../components/Slider/slider';

const Service = () => {
  const imageUrls = [
    'https://www.borneotourgigant.com/rivertrail.JPG',
    'https://cdn.trips.pk/tours/images/tourimages/large/L_beach-pakistan.jpg',
    'https://cdn.ventrata.com/image/upload/s--27_40X0K--/ar_1.5,c_fill,dpr_3.0,w_400/v1642413239/x01pak3j5qpntgkcgenj.jpg',
    'https://cdn.trips.pk/tours/images/tourimages/large/L_beach-pakistan.jpg'];
  return (
    <div>
      <Navbar />
      <MySlider imageUrls={imageUrls} />
      <Trip />
      <Footer />
    </div>
  );
};

export default Service;
