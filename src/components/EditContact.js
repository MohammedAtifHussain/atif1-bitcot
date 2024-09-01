// src/components/EditContact.js
import React, {useState} from 'react'
const EditContact = ({contact, editContact}) => {
  const [name, setName] = useState(contact.name)
  const [email, setEmail] = useState(contact.email)
  const [mobile, setMobile] = useState(contact.mobile)

  const handleSubmit = e => {
    e.preventDefault()

    const updatedContact = {...contact, name, email, mobile}
    editContact(updatedContact)
  }

  return (
    <div>
      <h2>Edit Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type='email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='tel'
          value={mobile}
          onChange={e => setMobile(e.target.value)}
        />
        <button type='submit'>Update Contact</button>
      </form>
    </div>
  )
}

export default EditContact
