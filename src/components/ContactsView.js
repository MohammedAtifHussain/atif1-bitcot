// src/components/ContactsView.js
import React from 'react';

const ContactsView = ({ contacts, deleteContact, setContactToEdit, setContactToView }) => {
  return (
    <div>
      <h2>Contacts List</h2>
      {contacts.length === 0 ? (
        <p>No contacts available</p>
      ) : (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              <span>{contact.name} - {contact.email} - {contact.mobile}</span>
              <button onClick={() => setContactToView(contact)}>
                <i className="fas fa-eye" title="View"></i>
              </button>
              <button onClick={() => setContactToEdit(contact)}>
                <i className="fas fa-edit" title="Edit"></i>
              </button>
              <button onClick={() => deleteContact(contact.id)}>
                <i className="fas fa-trash" title="Delete"></i>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactsView;
