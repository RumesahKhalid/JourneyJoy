import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import AboutPage from '../components/About/aboutPage';
import AboutImg from '../assets/about.jpg';

const About = () => {
  return (
    <div>
     <Navbar/>
     <Header 
      pName="header-mid"
      Image={AboutImg}
      title="About"
      text="Your trusted trip companion"
      btnClass="hide"
     />
      <AboutPage/>
      <Footer/>
    </div>
  )
}

export default About;