import React from 'react'

function ArtisansProfileRegister() {
  return (
    <div>
      <div>
        <input placeholder='Full Names' />
        <input placeholder='Surname' />
        <input placeholder='Profile Picture' type='image' />
        <input placeholder='City' />
        <input placeholder='Country' />
        <input placeholder='Places you cover' />
        <input placeholder='Profile Picture' type='image' multiple />
        <input placeholder='skills' type='checkbox' value='Plumber'/>
        <button>Register</button>
      </div>
    </div>
  )
}

export default ArtisansProfileRegister