import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import HotelBooking from '../components/Booking/Booking';
import Footer from '../components/Footer/footer';
import BookingImg from '../assets/booking.jpg';

const Booking = () => {
  return (
    <div>
       <Navbar/>
       <Header pName="header-mid"
       Image={BookingImg}
       title="Hotel Booking"
       btnClass="hide"
      />
      <HotelBooking/>
      <Footer/>
    </div>
  )
}

export default Booking;