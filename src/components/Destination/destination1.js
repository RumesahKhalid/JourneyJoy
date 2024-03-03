import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const Destination1 = () => {
    const mapStyles = {
        height: "100vh",
        width: "100%",
        margin:"3rem auto"
      };
    
  return (
    <>
      <div className='text'>
        <h4>Explore destination using map</h4>
      </div>
      <LoadScript googleMapsApiKey="AIzaSyAdtUCBHrnflbwBuS7TAf-cO4u2p9HWITw">
        <GoogleMap
          mapContainerStyle={mapStyles}
          zoom={10}
          center={{
            lat: 41.3851,
            lng: 2.1734
          }}
        />
      </LoadScript>
    </>
  );
}

export default Destination1;
