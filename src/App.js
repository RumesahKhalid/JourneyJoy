import { Routes, Route } from 'react-router-dom';
import React, { useEffect,  useState } from 'react';
import Home from './pages/home';
import Service from './pages/service';
import Hotel from './pages/hotels';
import Booking from './pages/booking';
import Reservation  from './pages/reservation';
import Service3 from './pages/service3';
import BlogPage from './pages/blogPage';
import About from './pages/about';
import Contact from './pages/contact';
import Activities from './pages/activities';
import Destination from './pages/destination';
import Dashboard from './pages/dashboard';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import {auth} from './firebase';
import './App.css';

function App() {
  const [userName, setUserName] = useState("");
  useEffect(()=>{
    auth.onAuthStateChanged((user)=>{
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
      console.log(user)
    });
  },[]); 
  return (
    <div className="App">

        <Routes>
          <Route path='/' element={<Home name={userName} />} />
          <Route path='/service' element={<Service />} />
          <Route path='/hotel' element={<Hotel/>} />
          <Route path='/booking' element={<Booking/>} />
          <Route path='/reservation' element={<Reservation/>}/>
          <Route path='/service3' element={<Service3 />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<BlogPage />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/activities' element={<Activities/>} />
          <Route path='/destination' element={<Destination/>}/>
          <Route path='/dashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>

        </Routes>

    </div>
  );
}

export default App;
