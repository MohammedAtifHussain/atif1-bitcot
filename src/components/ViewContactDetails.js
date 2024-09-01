// src/components/ViewContactDetails.js
import React from 'react'

const ViewContactDetails = ({contact}) => {
  return (
    <div>
      <h2>Contact Details</h2>
      <p>
        <strong>Name:</strong> {contact.name}
      </p>
      <p>
        <strong>Email:</strong> {contact.email}
      </p>
      <p>
        <strong>Mobile:</strong> {contact.mobile}
      </p>
    </div>
  )
}

export default ViewContactDetails