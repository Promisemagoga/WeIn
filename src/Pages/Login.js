import React, { useState } from 'react'
import { Theme } from '../ColorPallete/Theme'
import { Close } from '@mui/icons-material'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../Config/Firebase'

function Login({ setOpenLogin }) {

    const [email, setEmail] = useState("")
    const[password, setPassword] = useState("")

    function closeModal() {
        setOpenLogin(false)
    }

    const login = () =>{
        signInWithEmailAndPassword(auth, email,password)
        .then(() =>{
            console.log("User Successfully logged in");
        })
        .catch((error) => {
            if (error.code === "auth/invalid-email") {
              alert("No user found with that email address");
            } else if (error.code === "auth/wrong-password") {
              alert("Incorrect password");
            } else {
              console.log(error.message);
            }
          });
    }

    return (
        <main className='mainContainer'>
            <div className='modalForm'>
                <section className='modalFormCont '>
                    <form>
                        <Close onClick={closeModal} style={{color:"grey", fontSize:'30px',cursor:"pointer"}}/>
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
                            <button onClick={login}>Login</button>
                        </div>
                    </form>
                    <img src={require('../Assets/images/contact-img.png')} />
                </section>

            </div>
        </main>
    )
}

export default Login