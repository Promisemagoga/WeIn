import React from 'react'

function Login() {
    return (
        <div className='instructionCover'>
            <form className='formCont'>
                <input placeholder='Enter email' />
                <input placeholder='Enter password' />
                <button>Login</button>
            </form>
        </div>
    )
}

export default Login