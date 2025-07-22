import React from 'react';

const EmergencyButton = () => {
  const handleEmergencyClick = () => {
    // Add your emergency logic here
    alert('Emergency signal sent!');
  };

  return (
    <button 
      className="fixed bottom-5 right-5 w-32 h-12 bg-red-600 text-white border-none rounded-full text-lg font-bold cursor-pointer flex items-center justify-center shadow-lg transition-colors duration-300 ease-in-out hover:bg-red-700"
      onClick={handleEmergencyClick}
    >
      <span className="mr-2 text-2xl">!</span>
      <span>Emergency</span>
    </button>
  );
};

export default EmergencyButton;