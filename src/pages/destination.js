import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import DestinationImg from '../assets/destination0.jpg';
import Destination1 from '../components/Destination/destination1';

const Destination = () => {
  return (
    <div>
       <Navbar/>
       <Header pName="header-mid"
       Image={DestinationImg}
       title="Destination"
       btnClass="hide"
       />
       <Destination1/>
       <Footer/>
    </div>
  )
}

export default Destination;