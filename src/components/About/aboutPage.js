import React from 'react';
import Customer from '../../assets/customer.jpg';
import AboutDesImg from '../../assets/aboutDes.jpg';
import Price from '../../assets/price.jpg';
import Easy from '../../assets/easy.png';
import './aboutPage.css';

const AboutPage = () => {
  return (
    <div className='about'>
      <h1>Why Choose Us</h1>
      <p>These popular destinations have a lot to offer</p>
      <div className='aboutCard'>
        <div className='cards'>
          <div className='image-about'>
            <img src={Price} alt='price'/>
          </div>
          <h4>Best Price Guarantee</h4>
          <p>Book with confidence knowing you're getting the best deal. Our Best Price Guarantee ensures that you'll always find the lowest prices on our website.</p>        
        </div>
        <div className='cards'>
          <div className='image-about'>
             <img src={Easy} alt='easy'/>
          </div>
         <h4>Easy & Quick Booking</h4>
          <p>Experience the convenience of easy and quick booking with us! Our streamlined process ensures that you can secure your reservation swiftly, leaving you more time to enjoy your trip.</p>
        </div>
        <div className='cards'>
          <div className='image-about'>
            <img src={Customer} alt='customer'/>
           </div>
          <h4>Customer Care 24/7</h4>
          <p>Experience peace of mind with our customer care support! Our dedicated team is available 24/7 to assist you with any queries or concerns you may have.</p>
        </div>
      </div>
      <div className='about-des'>
         <div className='about-des-text'>
           <h2>About JourneyJoy</h2>
           <p className='para1'>JourneyJoy is the brainchild of two passionate individuals, led by Rumesah Khalid and supported by Ersa Ehsan.</p>
           <p className='para2'>As avid travelers ourselves, we recognized the need for a platform that not only showcases the beauty of destinations but also simplifies the travel planning process.</p>
           <p className='para3'>With JourneyJoy, our aim is to inspire wanderlust and provide travelers with an immersive experience to discover, explore, and book their dream destinations effortlessly.</p>
           <p className='para4'>Join us on this exciting journey of exploration and adventure!</p>
         </div>
         <div className='about-des-img'>
             <img src={AboutDesImg} alt='about-des'/>
         </div>
      </div>
    </div>
  )
}

export default AboutPage;