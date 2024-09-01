// src/components/EditContact.js
import React, { useState } from 'react';

const EditContact = ({ contact, onSave, onCancel }) => {
    const [name, setName] = useState(contact.name);
    const [mobile, setMobile] = useState(contact.mobile);
    const [email, setEmail] = useState(contact.email);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSave({ ...contact, name, mobile, email });
    };

    return (
        <div className="edit-contact">
            <h2>Edit Contact</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                />
                <input
                    type="text"
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    placeholder="Mobile"
                />
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                />
                <button type="submit">Save</button>
                <button type="button" onClick={onCancel}>Cancel</button>
            </form>
        </div>
    );
};

export default EditContact;
