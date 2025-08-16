import { useState } from 'react';

function FamilyContactForm({ onSubmit }) {
    const [contact, setContact] = useState({
        name: '',
        email: '',
        relationship: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContact((prevContact) => ({
            ...prevContact,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(contact);
        setContact({
            name: '',
            email: '',
            relationship: ''
        });
    };

    return (
        <div className="min-h-screen bg-gray-100 pt-20">
            <div className="container mx-auto px-4 py-12">
                <div className="max-w-2xl mx-auto">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold text-gray-800 mb-4">Family Contact Information</h1>
                        <p className="text-gray-600">Add your family members and emergency contacts for quick access during emergencies.</p>
                    </div>

                    {/* Form Card */}
                    <div className="bg-white rounded-lg shadow-md p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-6 border-b border-gray-200 pb-2">Add New Contact</h2>
                            
                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Full Name <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    value={contact.name} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder="Enter full name"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input 
                                    type="email" 
                                    name="email" 
                                    value={contact.email} 
                                    onChange={handleChange} 
                                    required 
                                    placeholder="Enter email address"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                />
                            </div>

                            <div>
                                <label className="block text-gray-700 text-sm font-medium mb-2">
                                    Relationship <span className="text-red-500">*</span>
                                </label>
                                <select 
                                    name="relationship" 
                                    value={contact.relationship} 
                                    onChange={handleChange} 
                                    required 
                                    className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                                >
                                    <option value="">Select relationship</option>
                                    <option value="Mother">Mother</option>
                                    <option value="Father">Father</option>
                                    <option value="Sister">Sister</option>
                                    <option value="Brother">Brother</option>
                                    <option value="Spouse">Spouse</option>
                                    <option value="Child">Child</option>
                                    <option value="Friend">Friend</option>
                                    <option value="Colleague">Colleague</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>

                            <div className="pt-4">
                                <button 
                                    type="submit" 
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Save Contact
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Instructions */}
                    <div className="mt-8 bg-blue-50 border border-blue-200 rounded-lg p-6">
                        <h3 className="text-lg font-medium text-blue-900 mb-3">Important Information</h3>
                        <ul className="text-blue-800 text-sm space-y-2">
                            <li>• Make sure to provide accurate contact information for emergency situations</li>
                            <li>• Your contacts will be notified during emergency alerts</li>
                            <li>• You can add multiple family members and emergency contacts</li>
                            <li>• Keep this information updated regularly</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FamilyContactForm;