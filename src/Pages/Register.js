import React from 'react'

function Register() {
    return (
        <div >
            <div className='RegisterContainer'>
                <input placeholder='Enter email' />
                <input placeholder='Enter password' />
                <select>
                    <option>Role</option>
                    <option>Artisan</option>
                    <option>Client</option>

                </select>
                <input placeholder='Full Names' />
                <input placeholder='Surname' />
                <input placeholder='Profile Picture' type='file' />
                <input placeholder='City' />
                <input placeholder='Country' />
                <input placeholder='Places you cover' />
                <input placeholder='Profile Picture' type='file' multiple />
                <input placeholder='skills' type='checkbox' value='Plumber' />
                <button>Register</button>
            </div>
        </div>
    )
}

export default Register