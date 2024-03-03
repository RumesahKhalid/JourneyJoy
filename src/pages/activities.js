import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import Blogging from '../components/Activities/activities';
import Footer from '../components/Footer/footer';
import ActivityImg from '../assets/activity.jpg';

const Activities = () => {
  return (
    <div>
      <Navbar/>
      <Header pName="header-mid"
      Image={ActivityImg}
      title="Activities"
      text="Experience the thrill of our inclusive package activities!"
      btnClass="hide"
     />
     <Blogging/>
     <Footer/>
    </div>
  )
}

export default Activities;


