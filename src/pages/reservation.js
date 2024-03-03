import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import ReservationPage from '../components/Booking/List';
import Footer from '../components/Footer/footer';
import BookingImg from '../assets/booking.jpg';

const Reservation = () => {
  return (
    <div>
       <Navbar/>
       <Header pName="header-mid"
       Image={BookingImg}
       title="Hotel Reservation"
       btnClass="hide"
      />
      <ReservationPage/>
      <Footer/>
    </div>
  )
}

export default Reservation;