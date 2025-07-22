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
        <form className="mb-5 mt-10 p-2 flex flex-col gap-5 justify-center items-center w-full md:w-3/4 lg:w-1/2 mx-auto" onSubmit={handleSubmit}>
            <h1 className="text-xl font-bold text-gray-800">Add Contact...</h1>
            <div className="mb-4 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={contact.name} 
                    onChange={handleChange} 
                    required 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
                <input 
                    type="email" 
                    name="email" 
                    value={contact.email} 
                    onChange={handleChange} 
                    required 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <div className="mb-4 w-full">
                <label className="block text-gray-700 text-sm font-bold mb-2">Relationship:</label>
                <input 
                    type="text" 
                    name="relationship" 
                    value={contact.relationship} 
                    onChange={handleChange} 
                    required 
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                />
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full">
                Save Contact
            </button>
        </form>
    );
}

export default FamilyContactForm;