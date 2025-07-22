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

  return (
    <div className="p-4">
      <div id="map" className="h-[500px] w-full rounded-lg shadow-md"></div>
      <h2 className="text-2xl font-bold mt-6 mb-4">Nearby Police Stations:</h2>
      <ul className="list-disc pl-5">
        {stations.map((station, index) => (
          <li key={index} className="mb-2 text-gray-700">{station.tags?.name || 'Unnamed Police Station'}</li>
        ))}
      </ul>
    </div>
  );
};

export default MapWithPoliceStations;