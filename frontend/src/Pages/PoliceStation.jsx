import { useEffect, useState } from 'react';
import MapWithPoliceStations from './MapWithPoliceStations';

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
    return <div className="flex justify-center items-center h-screen text-xl">Loading...</div>;
  }

  if (latitude === null || longitude === null) {
    return <div className="flex justify-center items-center h-screen text-xl text-red-600">Error: Unable to get your location.</div>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Nearby Police Stations</h1>
      <MapWithPoliceStations lat={latitude} lng={longitude} />
    </div>
  );
};

export default PoliceStation;