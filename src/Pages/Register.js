import React, { useState } from 'react'
import { Theme } from '../ColorPallete/Theme'
import { Close } from '@mui/icons-material'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db, storage } from '../Config/Firebase'
import { addDoc, collection } from 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid';
import { getDownloadURL, ref, uploadBytes } from 'firebase/storage'

function Register({ setOpenRegister }) {

    const [fullName, setFullNames] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [profilePic, setProfilePic] = useState(null);
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [role, setRole] = useState('');
    const [placesCovered, setPlacesCovered] = useState([]);
    const [gallery, setGallery] = useState([]);

    function closeModal() {
        setOpenRegister(false);
    }

    const handleImages = (event) => {
        const images = event.target.files;
        const galleryImages = Array.from(images);
        setGallery((prevState) => [...prevState, ...galleryImages]);
    };

    // const handleCheckboxes = (event) => {
    //     const { name, checked, value } = event.target;
    //     if (checked) {
    //         setPlacesCovered((prevPlaces) => [...prevPlaces, value]);
    //     } else {
    //         setPlacesCovered((prevPlaces) => prevPlaces.filter((place) => place !== value));
    //     }
    // };

    const handleProfilePic = (event) => {
        const pic = event.target.files[0];
        setProfilePic(pic);
    };

    const handleRegister = async () => {
        var checkboxes = document.querySelectorAll('input[name="skills"]');
        var checkedValues = [];
    
        checkboxes.forEach(check => {
          if (check.checked) {
            checkedValues.push(check.value)
          }
        });

        try {
            const imgId = uuidv4();
            const imgPath = `main/${profilePic.name}_${imgId}`;
            const storageRef = ref(storage, imgPath);
            await uploadBytes(storageRef, profilePic);

            const profilePicUrl = await getDownloadURL(storageRef);

            const galleryUrls = await Promise.all(
                gallery.map(async (image) => {
                    const imgId = uuidv4();
                    const galleryImagePath = `gallery/${image.name}_${imgId}`;
                    const galleryStorageRef = ref(storage, galleryImagePath);
                    await uploadBytes(galleryStorageRef, image);
                    const url = await getDownloadURL(galleryStorageRef);
                    return { imageName: image.name, url };
                })
            );

            await createUserWithEmailAndPassword(auth, email, password);

            await addDoc(collection(db, 'users'), {
                email,
                role,
                fullName,
                surname,
                profilePic: imgPath,
                profilePicUrl,
                city,
                country,
                placesCovered,
                galleryImages: galleryUrls.map((image) => image.imageName),
                galleryImagesUrl: galleryUrls.map((image) => image.url),
                skills: checkedValues,
            });

            console.log('SUCCESS');
            alert('User added successfully');
        } catch (error) {
            console.error('Error adding user:', error);
            alert(error.message);
        }
    };

    return (
        <main className='mainContainer'>
            <div className='modalForm'>
                <div className='modalContainer'>
                    <section className='modalFormCont '>
                        <form className='registerForm'>
                            <Close onClick={closeModal} style={{ color: 'grey', fontSize: '30px', cursor: 'pointer' }} />

                            <div href='/' className='logo'>
                                <img src={require('../Assets/Icons/2823525.png')} className='logoImg' alt='logo' />
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
                                    <input type='file' name='profilePicture' onChange={handleProfilePic} style={{ border: '1px solid grey', padding: '10px' }} />
                                </label>
                                <select onChange={(event) => setRole(event.target.value)}>
                                    <option value=''>Role</option>
                                    <option value='artisan'>Artisan</option>
                                    <option value='client'>Client</option>
                                </select>
                                {role === 'artisan' && (
                                    <div style={{ display: 'flex', flexDirection: 'column', rowGap: '30px' }}>
                                        <label>
                                            Places You cover
                                            <input placeholder='Places you cover' onChange={(event) => setPlacesCovered(event.target.value)} />
                                        </label>
                                        <label>
                                            Previous Work Images
                                            <br />
                                            <input type='file' multiple style={{ border: '1px solid grey', padding: '10px' }} name='galleryImages' onChange={handleImages} />
                                        </label>
                                        <div className='checkboxes'>
                                            <input type='checkbox' name='skills' value='Plumber'  />
                                            <label>Plumber</label>
                                            <br />
                                            <input type='checkbox' name='skills' value='Welder'  />
                                            <label>Welder</label>
                                            <br />
                                            <input type='checkbox' name='skills' value='Painter'  />
                                            <label>Painter</label>
                                            <br />
                                            <input type='checkbox' name='skills' value='Bricklayer'  />
                                            <label>Bricklayer</label>
                                            <br />
                                            <input type='checkbox' name='skills' value='Electrician'  />
                                            <label>Electrician</label>
                                            <br />
                                            <input type='checkbox' name='skills' value='Carpenter'  />
                                            <label>Carpenter</label>
                                        </div>
                                    </div>
                                )}

                                <button type='button' onClick={handleRegister}>
                                    Register
                                </button>
                            </div>
                        </form>
                        <img src={require('../Assets/images/contact-img.png')} alt='contact' />
                    </section>
                </div>
            </div>
        </main>
    )
}

export default Register