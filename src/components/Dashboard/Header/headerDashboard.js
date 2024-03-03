import React from 'react';
import {BsFillBellFill, BsFillEnveloperFill, BsPersonCircle, BsSearch,BsJustify} from 'react-icons/bs';
import './headerDashboard.css';

const HeaderDashboard = ({OpenSidebar}) => {
  return (
    <div className='header-dashboard'>
       <div className='menu-icon'>
         <BsJustify className='icon' onClick={OpenSidebar}/>
       </div>
       <div className='header-dashboard-left'>
        <BsSearch className='icon'/>
       </div>
       <div className='header-dashboard-right'>
         <BsFillBellFill className='icon'/>
         <BsPersonCircle className='icon'/>
       </div>
    </div>
  )
}

export default HeaderDashboard;