import React from 'react'

function ClientsProfileRegister() {
    return (
        <div>
            <div>
                <input placeholder='Full Names' />
                <input placeholder='Surname' />
                <input placeholder='Profile Picture' type='image' />
                <input placeholder='City' />
                <input placeholder='Country' />
                <button>Register</button>
            </div>
        </div>
    )
}

export default ClientsProfileRegister