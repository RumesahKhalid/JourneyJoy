import React from 'react';
import { Link } from 'react-router-dom';
import {BsFillGearFill, BsGrid1X2Fill,BsBagFill, BsPeopleFill,BsBank2,BsTextIndentRight} from 'react-icons/bs';
import './sidebar.css';

const Sidebar = ({openSidebarToggle, OpenSidebar}) => {
  return (
   <div id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
             <BsBagFill className="icon-header"/> Travel & Tour
          </div>
          <span className='icon close-icon' onClick={OpenSidebar}>X</span>
        </div>
        <ul className='sidebar-list'>
           <li className='sidebar-list-items'>
              <Link to='/'>
                <BsGrid1X2Fill className='icon'/> Dashboard            
              </Link>
           </li>
           <li className='sidebar-list-items'>
              <Link to='/serviceDashboard'>
                <BsTextIndentRight className='icon'/> Service            
              </Link>
           </li>
           <li className='sidebar-list-items'>
              <Link to='/bookingDashboard'>
                <BsBank2 className='icon'/> Booking            
              </Link>
           </li>
           <li className='sidebar-list-items'>
              <Link to='/customer'>
                <BsPeopleFill className='icon'/> Customer            
              </Link>
           </li>
           <li className='sidebar-list-items'>
              <Link to='/setting'>
                <BsFillGearFill className='icon'/> Setting            
              </Link>
           </li>
        </ul>
    </div> 
  )
}

export default Sidebar;