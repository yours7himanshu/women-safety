

const EmergencyButton = () => {
  const handleEmergencyClick = () => {
    // Add your emergency logic here
    alert('Emergency signal sent!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-pink-50 to-rose-100 pt-20 flex items-center justify-center">
      <div className="container mx-auto px-4 py-16 text-center">
        {/* Header Section */}
        <div className="mb-16">
          <div className="inline-flex items-center bg-red-100 text-red-700 px-6 py-3 rounded-full text-sm font-medium mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full mr-3 animate-pulse"></div>
            <span>Emergency Services</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
            Emergency
            <span className="block text-red-600">Alert System</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12">
            In case of emergency, press the button below to send an immediate alert to your emergency contacts and authorities.
          </p>
        </div>

        {/* Emergency Button */}
        <div className="mb-16">
          <button 
            className="w-80 h-80 bg-gradient-to-br from-red-500 to-red-700 hover:from-red-600 hover:to-red-800 text-white border-none rounded-full text-3xl font-bold cursor-pointer flex flex-col items-center justify-center shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105 active:scale-95 mx-auto group"
            onClick={handleEmergencyClick}
          >
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-4 group-hover:animate-pulse">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <span className="text-4xl font-black tracking-wide">EMERGENCY</span>
            <span className="text-lg font-medium mt-2 opacity-90">Press for Help</span>
          </button>
        </div>

        {/* Instructions */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-lg">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Press Button</h3>
              <p className="text-gray-600 text-sm">Press the emergency button to activate the alert system</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-lg">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Send Alert</h3>
              <p className="text-gray-600 text-sm">Your location and emergency signal will be sent immediately</p>
            </div>

            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-red-600 font-bold text-lg">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-2">Get Help</h3>
              <p className="text-gray-600 text-sm">Emergency contacts and authorities will be notified</p>
            </div>
          </div>
        </div>

        {/* Emergency Numbers */}
        <div className="mt-16 max-w-2xl mx-auto">
          <div className="bg-gray-800 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Emergency Contacts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="tel:100" className="flex items-center justify-center bg-red-600 hover:bg-red-700 py-4 px-6 rounded-xl transition-colors duration-300">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-bold">Police: 100</span>
              </a>
              <a href="tel:108" className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 py-4 px-6 rounded-xl transition-colors duration-300">
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                <span className="font-bold">Ambulance: 108</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmergencyButton;