import React from 'react';
import doctorsData from './doctorsData';

const DoctorsList = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-8">Our Doctors</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {doctorsData.map(doctor => (
          <div key={doctor.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
            <img src={doctor.image} alt={doctor.name} className="w-full h-56 object-cover object-center" />
            <div className="p-6">
              <h2 className="text-2xl font-bold mb-2">{doctor.name}</h2>
              <p className="text-gray-700 font-semibold mb-2">{doctor.qualification}</p>
              <p className="text-gray-600 mb-4">{doctor.description}</p>
              <div className="bg-gray-100 p-4 rounded-lg">
                <h3 className="font-bold text-lg mb-2">Review</h3>
                <p className="text-gray-600 italic">"{doctor.reviews}"</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorsList;