import { useState } from 'react';
import FamilyContactForm from './FamilyContactForm';

function DetailDisplay() {
    const [contacts, setContacts] = useState([]);

    const handleFormSubmit = (newContact) => {
        setContacts((prevContacts) => [...prevContacts, newContact]);
    };

    const sendEmailsToContacts = async () => {
        // Extract emails from contacts
        const emails = contacts.map(contact => contact.email);

        try {
            const response = await fetch('http://localhost:3001/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    emails: emails,  // Send emails array
                    message: `Here is the current location of your family member: [Include the location details here]`,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const result = await response.json();
            console.log('Emails sent successfully:', result);
        } catch (error) {
            console.error('Error sending emails:', error);
        }
    };

    return (
        <div className="max-w-md mx-auto p-5 bg-gray-100 rounded-lg shadow-md mt-10">
            <h2 className="text-2xl font-bold mb-4 text-center">Add Family Member Contact</h2>
            <FamilyContactForm onSubmit={handleFormSubmit} />
            <h2 className="text-2xl font-bold mt-8 mb-4 text-center">Saved Contacts</h2>
            <ul className="list-none p-0">
                {contacts.map((contact, index) => (
                    <li key={index} className="bg-white p-4 mb-3 rounded-md shadow-sm relative">
                        <p className="mb-1"><strong className="text-blue-600">Name:</strong> {contact.name}</p>
                        <p className="mb-1"><strong className="text-green-600">Phone:</strong> {contact.phone}</p>
                        <p className="mb-1"><strong className="text-orange-600">Relationship:</strong> {contact.relationship}</p>
                        <p className="mb-1"><strong className="text-purple-600">Email:</strong> {contact.email}</p> 
                        <button 
                            onClick={sendEmailsToContacts} 
                            className="mt-3 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors duration-300"
                        >
                            Message Now
                        </button>
                        <hr className="mt-3 border-t border-gray-200" />
                    </li>
                ))}
            </ul>

            <button onClick={sendEmailsToContacts} className="mt-5 w-full py-2 px-4 bg-green-500 text-white text-base font-bold rounded hover:bg-green-600 transition-colors duration-300">
                Send Location to All Contacts
            </button>
        </div>
    );
}

export default DetailDisplay;