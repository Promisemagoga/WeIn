import React from 'react'
import { Theme } from '../ColorPallete/Theme'
import { Close } from '@mui/icons-material'

function Login({ setOpenLogin }) {

    function closeModal() {
        setOpenLogin(false)
    }

    return (
        <main className='mainContainer'>
            <div className='modalForm'>
                <section className='modalFormCont '>
                    <form>
                        {/* <Close onClick={closeModal} /> */}
                        <div href="/" className="logo">
                            <img src={require("../Assets/Icons/2823525.png")} className='logoImg' />
                            <div className='logoTypo'>
                                <h1 style={{ color: Theme.HeadingColor }}>WeIn</h1>
                                <p style={{ color: Theme.ActionsColor }}>Changing the narrative</p>
                            </div>
                        </div>
                        <div className='formContainer'>
                            <label>
                                Email
                                <input placeholder='Enter email' />
                            </label>
                            <label>
                                Password
                                <input placeholder='Enter password' />
                                <p>Forgot Password</p>
                            </label>
                            <button>Login</button>
                        </div>
                    </form>
                    <img src={require('../Assets/images/contact-img.png')} />
                </section>

            </div>
        </main>
    )
}

export default Login