import  { useState } from 'react';
import FamilyContactForm from './FamilyContactForm';
import './DetailDisplay.css';

function DetailDisplay() {
    const [contacts, setContacts] = useState([]);

    const handleFormSubmit = (newContact) => {
        setContacts((prevContacts) => [...prevContacts, newContact]);
    };

    return (
        <div className="detail-display-container">
            <h2>Add Family Member Contact</h2>
            <FamilyContactForm onSubmit={handleFormSubmit} />
            <h2>Saved Contacts</h2>
            <ul className="contact-list">
                {contacts.map((contact, index) => (
                    <li key={index} className="contact-item">
                        <p><strong style={{color:"blue"}} >Name:</strong> {contact.name}</p>
                        <p><strong style={{color:"green"}} >Phone:</strong> {contact.phone}</p>
                        <p><strong style={{color:"orange"}} >Relationship:</strong> {contact.relationship}</p>
                        <a href={`tel:${contact.phone}`} className="call-btn">Call Now</a>
                        <hr />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default DetailDisplay;
