// src/components/SearchContact.js
import React from 'react'

const SearchContact = ({value, onSearch}) => {
  return (
    <div className='search-container'>
      <input
        type='text'
        value={value}
        onChange={onSearch}
        placeholder='Search contacts...'
      />
    </div>
  )
}

export default SearchContact