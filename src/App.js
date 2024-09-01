// src/App.js
import React, { useState, useEffect } from 'react';
import ContactsView from './components/ContactsView';
import AddContact from './components/AddContact';
import EditContact from './components/EditContact';
import ViewContactDetails from './components/ViewContactDetails';
import SearchContact from './components/SearchContact';
import './App.css';

const App = () => {
    const [contacts, setContacts] = useState([]);
    const [filteredContacts, setFilteredContacts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedContact, setSelectedContact] = useState(null);
    const [editingContact, setEditingContact] = useState(null);

    // Fetch contacts from JSON
    useEffect(() => {
        fetch('https://raw.githubusercontent.com/BitcotDev/fresher-machin-test/main/json/sample.json')
            .then(response => response.json())
            .then(data => {
                setContacts(data);
                setFilteredContacts(data); // Initialize filtered contacts
            });
    }, []);

    // Handle search
    const handleSearch = (event) => {
        const value = event.target.value.toLowerCase();
        setSearchTerm(value);

        const filtered = contacts.filter(contact => {
            const name = (contact.name || '').toLowerCase();
            const mobile = (contact.mobile || '').toLowerCase();
            const email = (contact.email || '').toLowerCase();
            return name.includes(value) || mobile.includes(value) || email.includes(value);
        });

        setFilteredContacts(filtered);
    };

    // Handle delete
    const handleDelete = (id) => {
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
        setFilteredContacts(updatedContacts);
    };

    // Handle save after editing
    const handleSave = (updatedContact) => {
        const updatedContacts = contacts.map(contact =>
            contact.id === updatedContact.id ? updatedContact : contact
        );
        setContacts(updatedContacts);
        setFilteredContacts(updatedContacts);
        setEditingContact(null);
    };

    return (
        <div className="App">
            <SearchContact value={searchTerm} onSearch={handleSearch} />
            <ContactsView
                contacts={filteredContacts}
                onView={setSelectedContact}
                onEdit={setEditingContact}
                onDelete={handleDelete} // Pass the delete function
            />
            <AddContact addContact={(contact) => setContacts([...contacts, contact])} />

            {editingContact && (
                <EditContact
                    contact={editingContact}
                    onSave={handleSave}
                    onCancel={() => setEditingContact(null)}
                />
            )}

            {selectedContact && (
                <ViewContactDetails
                    contact={selectedContact}
                    onClose={() => setSelectedContact(null)}
                />
            )}
        </div>
    );
};

export default App;
