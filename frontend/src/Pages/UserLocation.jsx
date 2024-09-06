import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';
import "./Location.css";

const UserLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [address, setAddress] = useState("");

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;

          setLocation({ latitude, longitude });

          // Fetch address using reverse geocoding
          const fetchAddress = async () => {
            try {
              const response = await axios.get(`http://localhost:3001/api/v1/proxy/reverse`, {
                params: {
                  format: 'json',
                  lat: latitude,
                  lon: longitude,
                },
              });

              if (response.data && response.data.display_name) {
                setAddress(response.data.display_name);
              }
            } catch (error) {
              console.error("Error fetching address with proxy:", error);
            }
          };

          fetchAddress();
        },
        error => console.error(error),
        { enableHighAccuracy: true }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  const sendLocationEmail = async () => {
    try {
      const response = await fetch('http://localhost:3001/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          emails: ['hdinkar264@gmail.com', 'ayush210042@gmail.com','shivamsaini1072005@gmail.com'],  // Replace with actual recipient(s)
          message: `Please Help Me as fast as possible..Here is the current location: ${address}`  // Send the address in the email body
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Email sent successfully:', result);
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <div className='map-loc'>
      <h1 style={{ color: "red" }}>Live Location Tracker</h1>
      <p style={{ color: "red" }}>Latitude: {location.latitude}</p>
      <p style={{ color: "blue" }}>Longitude: {location.longitude}</p>
      <p style={{ color: "green", fontWeight: "900" }}>Address: {address ? address : 'Fetching address...'}</p>

      {location.latitude && location.longitude && (
        <>
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={13}
            style={{ height: '400px', width: '100%' }}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[location.latitude, location.longitude]}>
              <Popup>Your current location</Popup>
            </Marker>
          </MapContainer>

          {/* Button to trigger email */}
          <button onClick={sendLocationEmail} style={{ marginTop: '20px', padding: '10px', fontSize: '16px' }}>
            Send Location via Email
          </button>
        </>
      )}
    </div>
  );
};

export default UserLocation;
