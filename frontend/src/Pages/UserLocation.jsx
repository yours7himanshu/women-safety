import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

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
          emails: ['hdinkar264@gmail.com', 'ayush210042@gmail.com','shivamsaini1072005@gmail.com'],
          message: `Please Help Me as fast as possible..Here is the current location: ${address}`
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
    <div className="p-10 flex flex-col gap-4 items-center">
      <h1 className="text-red-600 text-3xl font-bold">Live Location Tracker</h1>
      <p className="text-red-600 text-lg">Latitude: {location.latitude}</p>
      <p className="text-blue-600 text-lg">Longitude: {location.longitude}</p>
      <p className="text-green-600 font-extrabold text-lg">Address: {address ? address : 'Fetching address...'}</p>

      {location.latitude && location.longitude && (
        <>
          <MapContainer
            center={[location.latitude, location.longitude]}
            zoom={13}
            className="h-[400px] w-full rounded-lg shadow-md"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[location.latitude, location.longitude]}>
              <Popup>Your current location</Popup>
            </Marker>
          </MapContainer>

          <button onClick={sendLocationEmail} className="mt-5 px-5 py-2 text-lg bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors duration-300">
            Send Location via Email
          </button>
        </>
      )}
    </div>
  );
};

export default UserLocation;