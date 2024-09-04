
import  { useState } from 'react';
import doctorsData from './doctorsData';
import './DoctorList.css'; // Import the CSS file

const DoctorsList = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // Function to handle search when the search button is clicked
  const handleSearch = () => {
    const results = doctorsData.filter((doctor) =>
      doctor.type && doctor.type.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="display-doctor-list">
      <h1 className="heading">Mental Health Doctors</h1>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search for a type of mental health doctor"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
        <button onClick={handleSearch} className="search-button">Search</button>
      </div>
      {searchResults.map((doctor) => (
        <div key={doctor.id} className="doctor-card">
          <div className="doctor-item-container">
          <h2>{doctor.name}</h2>
          <p ><strong>Type:</strong> {doctor.type}</p>
          <p><strong>Qualification:</strong> {doctor.qualification}</p>
          <p><strong>Reviews:</strong> {doctor.reviews}</p>
          <p><strong>Description:</strong> {doctor.description}</p>
          </div>
         

          <div className="doctor-image-container">

          <img src={doctor.image} alt={doctor.name} className="doctor-image" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default DoctorsList;
