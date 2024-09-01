// src/App.js
import React, {useState} from 'react'
import ContactsView from './components/ContactsView'
import AddContact from './components/AddContact'
import EditContact from './components/EditContact'
import ViewContactDetails from './components/ViewContactDetails'
import SearchContact from './components/SearchContact'

// Initial contacts data
const initialContacts = [
  {
    id: 1,
    name: 'Aaron',
    mobile: '5785664545',
    email: 'aaron@gmail.com',
  },
  {
    id: 2,
    name: 'Buincy Hanson',
    mobile: '5785664545',
    email: 'hanson@gmail.com',
  },
]

const App = () => {
  const [contacts, setContacts] = useState(initialContacts)
  const [contactToEdit, setContactToEdit] = useState(null)
  const [contactToView, setContactToView] = useState(null)
  const [filteredContacts, setFilteredContacts] = useState([])

  const addContact = newContact => {
    if (Array.isArray(contacts)) {
      setContacts([...contacts, {...newContact, id: Date.now()}])
    } else {
      console.error('Contacts state is not an array')
    }
  }

  const editContact = updatedContact => {
    setContacts(
      contacts.map(contact =>
        contact.id === updatedContact.id ? updatedContact : contact,
      ),
    )
    setContactToEdit(null)
  }

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id))
  }

  return (
    <div>
      <h1>Contact Management</h1>
      <SearchContact
        contacts={contacts}
        setFilteredContacts={setFilteredContacts}
      />
      <ContactsView
        contacts={filteredContacts.length > 0 ? filteredContacts : contacts}
        deleteContact={deleteContact}
        setContactToEdit={setContactToEdit}
        setContactToView={setContactToView}
      />
      <AddContact addContact={addContact} />
      {contactToEdit && (
        <EditContact contact={contactToEdit} editContact={editContact} />
      )}
      {contactToView && <ViewContactDetails contact={contactToView} />}
    </div>
  )
}

export default App
