// src/components/AddContact.js
import React, {useState} from 'react'
const AddContact = ({addContact}) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')

  const handleSubmit = e => {
    e.preventDefault()

    if (!name || !email || !mobile) {
      alert('Please fill in all fields')
      return
    }

    const newContact = {
      name,
      email,
      mobile,
    }

    addContact(newContact)
    setName('')
    setEmail('')
    setMobile('')
  }

  return (
    <div>
      <h2>Add Contact</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Name'
          value={name}
          onChange={e => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Email'
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
        <input
          type='tel'
          placeholder='Mobile'
          value={mobile}
          onChange={e => setMobile(e.target.value)}
        />
        <button type='submit'>Add Contact</button>
      </form>
    </div>
  )
}

export default AddContact