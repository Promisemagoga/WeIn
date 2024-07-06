import React, { useState } from 'react'
import { Theme } from '../ColorPallete/Theme'

function Register() {

    const [fullName, setFullNames] = useState("")
    const [surname, setSurname] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [profilePic, setProfilePic] = useState("")
    const [city, setCity] = useState("")
    const [country, setCountry] = useState("")
    const [role, setRole] = useState("")
    const [placesCovered, setPlacesCovered] = useState([])
    const [gallery, setGallery] = useState([])
    const [skills, setSkills] = useState([])

    return (
        <main className='mainContainer'>
            <div className='modalForm'>
                <div className='modalContainer'>
                <section className='modalFormCont '>
                    <form className='registerForm'>
                        <div href="/" className="logo">
                            <img src={require("../Assets/Icons/2823525.png")} className='logoImg' />
                            <div className='logoTypo'>
                                <h1 style={{ color: Theme.HeadingColor }}>WeIn</h1>
                                <p style={{ color: Theme.ActionsColor }}>Changing the narrative</p>
                            </div>
                        </div>
                        <div className='formContainer'>
                            <div className='groupInput'>
                                <label>
                                    Full Names
                                    <input placeholder='Full Names' onChange={(event) => setFullNames(event.target.value)} />
                                </label>
                                <label>
                                    Surname
                                    <input placeholder='Surname' onChange={(event) => setSurname(event.target.value)} />
                                </label>
                            </div>
                            <div className='groupInput'>
                                <label>
                                    Email
                                    <input placeholder='Enter email' onChange={(event) => setEmail(event.target.value)} />
                                </label>
                                <label>
                                    Password
                                    <input placeholder='Enter password' onChange={(event) => setPassword(event.target.value)} />
                                </label>
                            </div>

                            <div className='groupInput'>
                                <label>
                                    City
                                    <input placeholder='City' onChange={(event) => setCity(event.target.value)} />
                                    </label>
                                    <label>
                                        Country
                                        <input placeholder='Country' onChange={(event) => setCountry(event.target.value)} />
                                    </label>
                                
                            </div>
                             <label>
                                Profile Picture
                                <br />
                                <input type='file' onChange={(event) => setProfilePic(event.target.value)} style={{ border: '1px solid grey', padding:'10px' }} />
                            </label>
                            <select onChange={(event) => setRole(event.target.value)}>
                                <option value="">Role</option>
                                <option value="Artisan">Artisan</option>
                                <option value="Value">Client</option>

                            </select>
                            {
                                role === "Artisan" && (
                                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', columnGap: '30px' }}>
                                        <input placeholder='Places you cover' onChange={(event) => setPlacesCovered(event.target.value)} />
                                        <label>
                                            Previous Work Images
                                            <br />
                                            <input type='file' multiple style={{ border: '1px solid grey' }} />
                                        </label>
                                        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', columnGap: '30px' }}>
                                            <label>
                                                <input type='checkbox' onChange={(event) => setPlacesCovered(event.target.value)} />
                                                Plumber
                                            </label>
                                            <label>
                                                <input type='checkbox' onChange={(event) => setPlacesCovered(event.target.value)} />
                                                Welder
                                            </label>
                                            <label>
                                                <input type='checkbox' onChange={(event) => setPlacesCovered(event.target.value)} />
                                                Painter
                                            </label>
                                        </div>
                                    </div>
                                )
                            }


                            <button>Register</button>
                        </div>

                    </form>
                    <img src={require('../Assets/images/contact-img.png')} />
                </section>
                </div>
           

            </div>

        </main>
    )
}

export default Register