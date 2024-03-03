import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Header from '../components/Header/header';
import Footer from '../components/Footer/footer';
import HomeImg from '../assets/contact.jpg';
import ContactForm from '../components/Contact/contactForm';

const Contact = () => {
  return (
    <div>
    <Navbar/>
    <Header pName="header"
     Image={HomeImg}
     title="Contact Us"
     btnClass="hide"
    />
    <ContactForm/>
    <Footer/>
   </div>
  )
}

export default Contact;