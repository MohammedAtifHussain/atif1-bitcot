// src/components/ContactsView.js
import React from 'react';
import { FaEye, FaEdit, FaTrashAlt } from 'react-icons/fa'; // Import icons

const ContactsView = ({ contacts, onView, onEdit, onDelete }) => {
    return (
        <div className="contacts-view">
            <h2>Contacts List</h2>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        <span>{contact.name}</span>
                        <button onClick={() => onView(contact)} title="View Contact">
                            <FaEye />
                        </button>
                        <button onClick={() => onEdit(contact)} title="Edit Contact">
                            <FaEdit />
                        </button>
                        <button onClick={() => onDelete(contact.id)} title="Delete Contact">
                            <FaTrashAlt />
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactsView;
