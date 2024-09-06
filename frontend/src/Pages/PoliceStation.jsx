import { useEffect, useState } from 'react';
import MapWithPoliceStations from './MapWithPoliceStations'; // Adjust the import path as necessary

const PoliceStation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Get the current location
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        setLoading(false);
      },
      (error) => {
        console.error("Error getting location:", error);
        setLoading(false);
      }
    );
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (latitude === null || longitude === null) {
    return <div>Error: Unable to get your location.</div>;
  }

  return (
    <div>
      <h1>Nearby Police Stations</h1>
      <MapWithPoliceStations lat={latitude} lng={longitude} />
    </div>
  );
};

export default PoliceStation;
