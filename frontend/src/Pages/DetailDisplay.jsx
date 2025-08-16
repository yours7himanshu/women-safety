import { useState } from 'react';

function DetailDisplay() {
    const [location, setLocation] = useState({ latitude: null, longitude: null });
    const [address, setAddress] = useState('');
    const [emailStatus, setEmailStatus] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const backendUrl = import.meta.env.VITE_BACKEND_URL;

    // Get current location
    const getCurrentLocation = () => {
        setIsLoading(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setLocation({ latitude, longitude });
                    fetchAddress(latitude, longitude);
                    setIsLoading(false);
                },
                (error) => {
                    console.error('Error getting location:', error);
                    setEmailStatus('Unable to get location. Please try again.');
                    setIsLoading(false);
                },
                { enableHighAccuracy: true, timeout: 10000, maximumAge: 300000 }
            );
        } else {
            setEmailStatus('Geolocation is not supported by this browser.');
            setIsLoading(false);
        }
    };

    // Fetch address from coordinates
    const fetchAddress = async (lat, lng) => {
        try {
            const response = await fetch(`${backendUrl}/api/v1/proxy/reverse?format=json&lat=${lat}&lon=${lng}`);
            const data = await response.json();
            if (data && data.display_name) {
                setAddress(data.display_name);
            }
        } catch (error) {
            console.error('Error fetching address:', error);
            setAddress('Address not available');
        }
    };

    // Send emergency email
    const sendEmergencyEmail = async () => {
        setIsLoading(true);
        setEmailStatus('');

        if (!location.latitude || !location.longitude) {
            getCurrentLocation();
            return;
        }

        try {
            const emergencyMessage = `🚨 EMERGENCY ALERT 🚨

This is an emergency notification from ProtectHerZone.

Current Location:
📍 Latitude: ${location.latitude}
📍 Longitude: ${location.longitude}
📍 Address: ${address || 'Address not available'}

Google Maps Link: https://www.google.com/maps?q=${location.latitude},${location.longitude}

Please respond immediately or contact authorities if you cannot reach me.

Time sent: ${new Date().toLocaleString()}

This is an automated emergency message from ProtectHerZone app.`;

            const response = await fetch(`${backendUrl}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emails: ['hdinkar264@gmail.com', 'ayush210042@gmail.com', 'shivamsaini1072005@gmail.com'],
                    message: emergencyMessage,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setEmailStatus('✅ Emergency alert sent successfully to all contacts!');
            console.log('Emergency emails sent successfully:', result);
        } catch (error) {
            console.error('Error sending emergency emails:', error);
            setEmailStatus('❌ Failed to send emergency alert. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // Send location update email
    const sendLocationUpdate = async () => {
        setIsLoading(true);
        setEmailStatus('');

        if (!location.latitude || !location.longitude) {
            getCurrentLocation();
            return;
        }

        try {
            const locationMessage = `📍 Location Update from ProtectHerZone

Hi! I'm sharing my current location with you for safety purposes.

Current Location:
📍 Latitude: ${location.latitude}
📍 Longitude: ${location.longitude}
📍 Address: ${address || 'Address not available'}

Google Maps Link: https://www.google.com/maps?q=${location.latitude},${location.longitude}

Time sent: ${new Date().toLocaleString()}

This location update was sent from ProtectHerZone app.`;

            const response = await fetch(`${backendUrl}/send-email`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emails: ['hdinkar264@gmail.com', 'ayush210042@gmail.com', 'shivamsaini1072005@gmail.com'],
                    message: locationMessage,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            setEmailStatus('✅ Location update sent successfully!');
            console.log('Location emails sent successfully:', result);
        } catch (error) {
            console.error('Error sending location emails:', error);
            setEmailStatus('❌ Failed to send location update. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-gray-800 mb-4">Emergency Alert System</h1>
                        <p className="text-gray-600 text-lg">
                            Send your location and emergency alerts to your trusted contacts instantly
                        </p>
                    </div>

                    {/* Current Location Display */}
                    <div className="bg-white rounded-lg shadow-md p-8 mb-8">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b border-gray-200 pb-2">Current Location</h2>
                        
                        {location.latitude && location.longitude ? (
                            <div className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-blue-50 rounded-lg p-4">
                                        <h3 className="font-semibold text-blue-800 mb-2">Latitude</h3>
                                        <p className="text-blue-600 font-mono">{location.latitude.toFixed(6)}</p>
                                    </div>
                                    <div className="bg-green-50 rounded-lg p-4">
                                        <h3 className="font-semibold text-green-800 mb-2">Longitude</h3>
                                        <p className="text-green-600 font-mono">{location.longitude.toFixed(6)}</p>
                                    </div>
                                </div>
                                
                                <div className="bg-gray-50 rounded-lg p-4">
                                    <h3 className="font-semibold text-gray-800 mb-2">Address</h3>
                                    <p className="text-gray-600">{address || 'Fetching address...'}</p>
                                </div>

                                <div className="bg-purple-50 rounded-lg p-4">
                                    <h3 className="font-semibold text-purple-800 mb-2">Google Maps Link</h3>
                                    <a 
                                        href={`https://www.google.com/maps?q=${location.latitude},${location.longitude}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-purple-600 hover:text-purple-800 underline"
                                    >
                                        View on Google Maps
                                    </a>
                                </div>
                            </div>
                        ) : (
                            <div className="text-center py-8">
                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <p className="text-gray-500 mb-4">Location not available</p>
                                <button
                                    onClick={getCurrentLocation}
                                    disabled={isLoading}
                                    className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors duration-200 disabled:opacity-50"
                                >
                                    {isLoading ? 'Getting Location...' : 'Get Current Location'}
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Emergency Actions */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                        {/* Emergency Alert */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.5 0L4.268 18.5c-.77.833.192 2.5 1.732 2.5z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Emergency Alert</h3>
                                <p className="text-gray-600 text-sm">
                                    Send an immediate emergency alert with your location to all emergency contacts
                                </p>
                            </div>
                            
                            <button
                                onClick={sendEmergencyEmail}
                                disabled={isLoading}
                                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 transform hover:scale-105 active:scale-95"
                            >
                                {isLoading ? 'Sending...' : '🚨 Send Emergency Alert'}
                            </button>
                        </div>

                        {/* Location Update */}
                        <div className="bg-white rounded-lg shadow-md p-8">
                            <div className="text-center mb-6">
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">Location Update</h3>
                                <p className="text-gray-600 text-sm">
                                    Share your current location with family and friends for safety check-ins
                                </p>
                            </div>
                            
                            <button
                                onClick={sendLocationUpdate}
                                disabled={isLoading}
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-lg transition-colors duration-200 disabled:opacity-50 transform hover:scale-105 active:scale-95"
                            >
                                {isLoading ? 'Sending...' : '📍 Send Location Update'}
                            </button>
                        </div>
                    </div>

                    {/* Status Message */}
                    {emailStatus && (
                        <div className={`rounded-lg p-4 mb-8 ${emailStatus.includes('✅') ? 'bg-green-50 border border-green-200 text-green-800' : 'bg-red-50 border border-red-200 text-red-800'}`}>
                            <p className="text-center font-medium">{emailStatus}</p>
                        </div>
                    )}

                    {/* Emergency Contacts Info */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-blue-900 mb-3">Emergency Contacts</h3>
                        <p className="text-blue-800 text-sm mb-3">
                            Your alerts will be sent to the following emergency contacts:
                        </p>
                        <ul className="text-blue-700 text-sm space-y-1">
                            <li>• hdinkar264@gmail.com</li>
                            <li>• ayush210042@gmail.com</li>
                            <li>• shivamsaini1072005@gmail.com</li>
                        </ul>
                        <p className="text-blue-600 text-xs mt-4">
                            These contacts will receive your location and emergency status immediately when you use the alert features above.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailDisplay;