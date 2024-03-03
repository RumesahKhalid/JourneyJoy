import React from 'react';
import { Facebook, Instagram, Twitter, Youtube } from 'react-feather';
import Logo  from '../../assets/logo1.png';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <div className='top'>
            <div> 
                <img src={Logo} alt='logo1'/>
                <h3>JourneyJoy</h3>
            </div>
            <div>
               <Facebook className='icons'/>
               <Instagram className='icons'/>
               <Twitter className='icons'/>
               <Youtube className='icons'/>
            </div>
        </div>
        <div className='bottom'>
            <div className='footer-links'>
               <h4>Project</h4>
               <a href='/'>Changelog</a>
               <a href='/'>Status</a>
               <a href='/'>License</a>
               <a href='/'>All Versions</a>
            </div>
            <div className='footer-links'>
               <h4>Community</h4>
               <a href='/'>Github</a>
               <a href='/'>Issues</a>
               <a href='/'>Project</a>
               <a href='/'>Twitter</a>
            </div>
            <div className='footer-links'>
               <h4>Help</h4>
               <a href='/'>Support</a>
               <a href='/'>Troubleshooting</a>
               <a href='/'>Contact Us</a>
            </div>
            <div className='footer-links'>
               <h4>Others</h4>
               <a href='/'>Terms of Service</a>
               <a href='/'>Privacy Policy</a>
               <a href='/'>License</a>
            </div>
        
        </div>
         <p class="copyright">
            &copy; 2024 All right reserved | Made by Rumesah Khalid & Ersa Ehsan
         </p>
    </div>

      

  )
}

export default Footer