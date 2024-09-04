import  { useState } from 'react';
import './FamilyDetailForm.css'; // Assuming you create a CSS file for styles

function FamilyContactForm({ onSubmit }) {
    const [contact, setContact] = useState({
        name: '',
        phone: '',
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
            phone: '',
            relationship: ''
        });
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h1 style={{margin:"0px 0px 0px 45px"}} >Add Contact...</h1>
            <div className="form-group">
                <label>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    value={contact.name} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="form-group">
                <label>Phone:</label>
                <input 
                    type="tel" 
                    name="phone" 
                    value={contact.phone} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <div className="form-group">
                <label>Relationship:</label>
                <input 
                    type="text" 
                    name="relationship" 
                    value={contact.relationship} 
                    onChange={handleChange} 
                    required 
                />
            </div>
            <button type="submit" className="submit-btn">Save Contact</button>
        </form>
    );
}

export default FamilyContactForm;
