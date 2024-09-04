import  { useState, useEffect } from 'react';
import axios from 'axios';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const PoliceStation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [policeStations, setPoliceStations] = useState([]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          fetchNearbyPoliceStations(latitude, longitude);
        },
        error => console.error('Geolocation error:', error),
        { enableHighAccuracy: true }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

  const fetchNearbyPoliceStations = async (latitude, longitude) => {
    const url = `http://localhost:3001/api/v1/proxy/api/police-stations?latitude=${latitude}&longitude=${longitude}`;
    
    try {
      const response = await axios.get(url);
      console.log('Fetched police stations:', response.data);
      setPoliceStations(response.data);
    } catch (error) {
      console.error('Error fetching nearby police stations:', error.response ? error.response.data : error.message);
    }
  };

  return (
    <div>
      <h1>Live Location Tracker</h1>
      <p>Latitude: {location.latitude}</p>
      <p>Longitude: {location.longitude}</p>

      {location.latitude && location.longitude && (
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

          {policeStations.map((station, index) => (
            <Marker
              key={index}
              position={[station.lat, station.lon]}
            >
              <Popup>{station.display_name}</Popup>
            </Marker>
          ))}
        </MapContainer>
      )}

      <div style={{ marginTop: '20px' }}>
        <h2>Nearby Police Stations</h2>
        <ul style={{ listStyleType: 'none', padding: '0' }}>
          {policeStations.map((station, index) => (
            <li key={index} style={{ 
              background: '#f1f1f1', 
              margin: '10px 0', 
              padding: '10px', 
              borderRadius: '8px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)'
            }}>
              <strong style={{ fontSize: '18px', color: '#333' }}>{station.display_name}</strong><br />
              <span style={{ fontSize: '14px', color: '#555' }}>
                {station.address.road}, {station.address.city}, {station.address.state}, {station.address.country}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PoliceStation;
