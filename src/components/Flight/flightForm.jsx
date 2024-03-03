import React, { useState, useEffect } from 'react';
import flightImage1 from '../../assets/flightImage1.jpg';
import flightImage2 from '../../assets/flightImage2.jpg';
import flightImage3 from '../../assets/flightImage3.jpg';
import './form.css';

const BookingForm = () => {
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');
  const [date, setDate] = useState('');
  const [passengers, setPassengers] = useState('1');

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [flightImage1, flightImage2, flightImage3];

  
  const handleSearch = () => {
    // Add your flight search logic here
    // For now, just update the image based on currentImageIndex
    const newIndex = (currentImageIndex + 1) % images.length;
    setCurrentImageIndex(newIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      <div className="booking-form">
        <h2>Flight Booking</h2>
        <div className="form-group">
          <label htmlFor="departure">Departure</label>
          <input  type="text"
            id="departure"
            placeholder="Enter departure country"
            value={departure}
            onChange={(e) => setDeparture(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="arrival">Arrival</label>
          <input type="text"
          id="arrival"
          placeholder="Enter arrival country"
          value={arrival}
          onChange={(e) => setArrival(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="date">Date</label>
          <input  type="date"
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="passengers">Passengers</label>
          <select id="passengers"
          value={passengers}
          onChange={(e) => setPassengers(e.target.value)}>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button className="search-btn" onClick={handleSearch}>Search Flights</button>
      </div>
      <div className="card">
        <img src={images[currentImageIndex]} alt={`Flight ${currentImageIndex + 1}`} />
      </div>
    </div>
  );
}

export default BookingForm;