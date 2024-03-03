import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import Flight from '../components/Flight/flightForm';
import Footer from '../components/Footer/footer';
import FlightImg from '../assets/flight.jpg';

const service3 = () => {
  return (
    <div>
      <Navbar/>
      <Header pName="header-mid"
      Image={FlightImg}
      title="Flight Schedule"
      btnClass="hide"
     />
     <Flight/>
     <Footer/>
    </div>
  )
}

export default service3;


