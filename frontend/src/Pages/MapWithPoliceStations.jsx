import React, { useEffect, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import axios from 'axios';

const MapWithPoliceStations = ({ lat, lng }) => {
  const [map, setMap] = useState(null);
  const [stations, setStations] = useState([]);

  useEffect(() => {
    // Initialize the map
    const mapInstance = L.map('map').setView([lat, lng], 13);

    // Add tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
    }).addTo(mapInstance);

    setMap(mapInstance);

    // Clean up on component unmount
    return () => {
      mapInstance.remove();
    };
  }, [lat, lng]);

  useEffect(() => {
    const fetchNearbyPoliceStationsOSM = async () => {
      const query = `
      [out:json];
      node["amenity"="police"](around:5000,${lat},${lng});
      out body;
      `;

      const url = 'https://overpass-api.de/api/interpreter';

      try {
        const response = await axios.post(url, query, {
          headers: { 'Content-Type': 'text/plain' }
        });
        const policeStations = response.data.elements;
        setStations(policeStations);

        if (map) {
          // Clear existing markers
          map.eachLayer(layer => {
            if (layer instanceof L.Marker) {
              map.removeLayer(layer);
            }
          });

          // Add new markers with names
          policeStations.forEach(station => {
            if (station.lat && station.lon) {
              const name = station.tags?.name || 'Unnamed Police Station';

              L.marker([station.lat, station.lon])
                .addTo(map)
                .bindPopup(`<b>${name}</b>`)
                .openPopup();
            }
          });

          // Center map on the provided coordinates
          map.setView([lat, lng], 13);
        }
      } catch (error) {
        console.error("Error fetching nearby police stations from OSM", error);
      }
    };

    fetchNearbyPoliceStationsOSM();
  }, [lat, lng, map]);

  const calculateDistance = (lat1, lon1, lat2, lon2) => {
    const R = 6371; // Radius of the Earth in km
    const dLat = (lat2 - lat1) * Math.PI / 180;
    const dLon = (lon2 - lon1) * Math.PI / 180;
    const a = 
      Math.sin(dLat/2) * Math.sin(dLat/2) +
      Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * 
      Math.sin(dLon/2) * Math.sin(dLon/2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    const d = R * c; // Distance in km
    return d;
  };

  const getDirectionsUrl = (destLat, destLng) => {
    return `https://www.google.com/maps/dir/?api=1&origin=${lat},${lng}&destination=${destLat},${destLng}&travelmode=driving`;
  };

  return (
    <div className="space-y-8">
      {/* Map Section */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Interactive Map</h2>
          <div className="flex items-center text-blue-600">
            <div className="w-2 h-2 bg-blue-400 rounded-full mr-2 animate-pulse"></div>
            <span className="text-sm font-medium">Live Search</span>
          </div>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <div id="map" className="h-[500px] w-full"></div>
        </div>
        <div className="mt-4 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-center text-blue-700">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span className="text-sm font-medium">
              Click on any marker to view station details and get directions
            </span>
          </div>
        </div>
      </div>

      {/* Police Stations List */}
      <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Nearby Police Stations</h2>
          <div className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
            {stations.length} Found
          </div>
        </div>
        
        {stations.length === 0 ? (
          <div className="text-center py-8">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-600 mb-2">Searching for Police Stations</h3>
            <p className="text-gray-500">Please wait while we locate nearby stations...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {stations
              .map(station => ({
                ...station,
                distance: calculateDistance(lat, lng, station.lat, station.lon)
              }))
              .sort((a, b) => a.distance - b.distance)
              .map((station, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.031 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-800">
                          {station.tags?.name || 'Police Station'}
                        </h3>
                        <p className="text-sm text-gray-500">
                          {station.distance.toFixed(2)} km away
                        </p>
                      </div>
                    </div>
                    <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs font-medium">
                      #{index + 1}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-500">
                      <p>Lat: {station.lat.toFixed(4)}</p>
                      <p>Lng: {station.lon.toFixed(4)}</p>
                    </div>
                    
                    <div className="flex space-x-2">
                      <a
                        href={`tel:100`}
                        className="bg-red-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-red-700 transition-colors duration-300 flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                        Call
                      </a>
                      
                      <a
                        href={getDirectionsUrl(station.lat, station.lon)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300 flex items-center"
                      >
                        <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                        </svg>
                        Directions
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MapWithPoliceStations;