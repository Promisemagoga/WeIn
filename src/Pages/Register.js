import React, { useState } from 'react'

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
        <div className='instructionCover'>
            <form className='formCont'>
                <input placeholder='Full Names' onChange={(event) => setFullNames(event.target.value)} />
                <input placeholder='Surname' onChange={(event) => setSurname(event.target.value)} />
                <input placeholder='Enter email' onChange={(event) => setEmail(event.target.value)} />
                <input placeholder='Enter password' onChange={(event) => setPassword(event.target.value)} />
                <label>
                    Profile Picture
                    <br/>
                <input type='file' onChange={(event) => setProfilePic(event.target.value)} style={{border:'1px solid grey'}}/>
                </label>
                <input placeholder='City' onChange={(event) => setCity(event.target.value)} />
                <input placeholder='Country' onChange={(event) => setCountry(event.target.value)} />
                <select onChange={(event) => setRole(event.target.value)}>
                    <option value="">Role</option>
                    <option value="Artisan">Artisan</option>
                    <option value="Value">Client</option>

                </select>
                {
                    role === "Artisan" && (
                        <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', columnGap:'30px'}}>
                            <input placeholder='Places you cover' onChange={(event) => setPlacesCovered(event.target.value)} />
                            <label>
                                Previous Work Images
                                <br/>
                            <input type='file' multiple  style={{border:'1px solid grey'}}/>
                            </label>
                            <div style={{display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', columnGap: '30px'}}>
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
            </form>
        </div>
    )
}

export default Register