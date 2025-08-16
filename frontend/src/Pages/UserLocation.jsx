import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const UserLocation = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [address, setAddress] = useState("");
  const backendUrl = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    let watchId = null;
    
    if (navigator.geolocation) {
      // First try to get current position immediately for faster initial load
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          
          // Fetch address using reverse geocoding
          const fetchAddress = async () => {
            try {
              const response = await axios.get(`${backendUrl}/api/v1/proxy/reverse`, {
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
        error => {
          console.error("Error getting initial position:", error);
          // If getCurrentPosition fails, fall back to watchPosition
          startWatching();
        },
        { 
          enableHighAccuracy: true,
          timeout: 10000, // 10 seconds timeout
          maximumAge: 300000 // Accept cached position up to 5 minutes old
        }
      );

      // Function to start watching position
      const startWatching = () => {
        watchId = navigator.geolocation.watchPosition(
          position => {
            const { latitude, longitude } = position.coords;
            setLocation({ latitude, longitude });

            // Fetch address using reverse geocoding
            const fetchAddress = async () => {
              try {
                const response = await axios.get(`${backendUrl}/api/v1/proxy/reverse`, {
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
          error => console.error("Watch position error:", error),
          { 
            enableHighAccuracy: true,
            timeout: 15000, // 15 seconds timeout for watch
            maximumAge: 60000 // Accept cached position up to 1 minute old
          }
        );
      };

      // Start watching after getting initial position
      setTimeout(() => {
        if (navigator.geolocation) {
          startWatching();
        }
      }, 1000);

    } else {
      alert('Geolocation is not supported by this browser.');
    }

    // Cleanup function
    return () => {
      if (watchId !== null) {
        navigator.geolocation.clearWatch(watchId);
      }
    };
  }, []);

  const sendLocationEmail = async () => {
    try {
      const response = await fetch(`${backendUrl}/send-email`, {
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-100 pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm border mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <span className="text-gray-700 font-medium">Live Tracking Active</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Live Location
            <span className="block text-pink-600">Tracker</span>
          </h1>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Your real-time location is being tracked for your safety. Share your location with trusted contacts instantly.
          </p>
        </div>

        {/* Location Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-red-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Latitude</h3>
            </div>
            <p className="text-2xl font-bold text-gray-700">
              {location.latitude ? location.latitude.toFixed(6) : 'Loading...'}
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Longitude</h3>
            </div>
            <p className="text-2xl font-bold text-gray-700">
              {location.longitude ? location.longitude.toFixed(6) : 'Loading...'}
            </p>
          </div>

          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
            <div className="flex items-center mb-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-800">Address</h3>
            </div>
            <p className="text-sm font-medium text-gray-700 leading-relaxed">
              {address || 'Fetching address...'}
            </p>
          </div>
        </div>

        {/* Map Section */}
        {location.latitude && location.longitude && (
          <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Your Location Map</h2>
              <div className="flex items-center text-green-600">
                <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                <span className="text-sm font-medium">Live</span>
              </div>
            </div>
            <div className="rounded-xl overflow-hidden shadow-lg">
              <MapContainer
                center={[location.latitude, location.longitude]}
                zoom={15}
                className="h-[500px] w-full"
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[location.latitude, location.longitude]}>
                  <Popup>
                    <div className="text-center">
                      <strong>Your Current Location</strong>
                      <br />
                      <small>{address}</small>
                    </div>
                  </Popup>
                </Marker>
              </MapContainer>
            </div>
          </div>
        )}

        {/* Emergency Action Section */}
        {location.latitude && location.longitude && (
          <div className="text-center">
            <div className="bg-gradient-to-r from-red-500 to-pink-600 rounded-2xl p-8 shadow-xl">
              <div className="mb-6">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Emergency Alert</h3>
                <p className="text-white/90">
                  Send your current location to your emergency contacts instantly
                </p>
              </div>
              
              <button 
                onClick={sendLocationEmail} 
                className="group bg-white text-red-600 font-bold py-4 px-8 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                <span className="flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2 group-hover:animate-pulse" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                  Send Emergency Location
                </span>
              </button>
              
              <p className="text-white/80 text-sm mt-4">
                This will send your location to your trusted emergency contacts
              </p>
            </div>
          </div>
        )}

        {/* Loading State */}
        {!location.latitude && !location.longitude && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-blue-600 animate-spin" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-700 mb-2">Getting Your Location</h3>
            <p className="text-gray-500">Please allow location access to continue...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserLocation;