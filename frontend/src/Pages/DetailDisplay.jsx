import { useState } from 'react';
import FamilyContactForm from './FamilyContactForm';
import './DetailDisplay.css';

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
        <div className="detail-display-container">
            <h2>Add Family Member Contact</h2>
            <FamilyContactForm onSubmit={handleFormSubmit} />
            <h2>Saved Contacts</h2>
            <ul className="contact-list">
                {contacts.map((contact, index) => (
                    <li key={index} className="contact-item">
                        <p><strong style={{ color: "blue" }}>Name:</strong> {contact.name}</p>
                        <p><strong style={{ color: "green" }}>Phone:</strong> {contact.phone}</p>
                        <p><strong style={{ color: "orange" }}>Relationship:</strong> {contact.relationship}</p>
                        <p><strong style={{ color: "purple" }}>Email:</strong> {contact.email}</p> 
                        {/* Message Now button */}
                        <button 
                            onClick={sendEmailsToContacts} 
                            className="message-btn"
                            style={{ marginTop: '10px', padding: '5px', fontSize: '14px' }}
                        >
                            Message Now
                        </button>
                        <hr />
                    </li>
                ))}
            </ul>

            {/* Optional: A button to send to all contacts */}
            <button onClick={sendEmailsToContacts} style={{ marginTop: '20px', padding: '10px', fontSize: '16px' }}>
                Send Location to All Contacts
            </button>
        </div>
    );
}

export default DetailDisplay;
