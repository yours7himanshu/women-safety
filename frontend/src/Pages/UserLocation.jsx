import  { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import "./Location.css"

const UserLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(
        position => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        error => console.error(error),
        { enableHighAccuracy: true }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  }, []);

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
        </MapContainer>
      )}
    </div>
  );
};

export default UserLocation;
