import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'
import { Email, House, Phone } from '@mui/icons-material'

function ContactUs() {
    return (
        <>
            <NavBar />
            <header className='aboutHeader'>
                <section className='containerCover'>
                    <h1>Contact Us</h1>
                </section>
            </header>
            <main className=' mainContainer'>
                <iframe src="https://www.google.com/maps/embed/v1/place?key=AIzaSyA0s1a7phLN0iaD6-UE7m4qP-z21pH0eSc&amp;q=Eiffel+Tower+Paris+France" style={{ width: "100%", height: "90vh" }} frameborder="0" allowfullscreen=""></iframe>
                <section className='contactFormCont'>
                    <form className='contactForm'>
                        <h1>Get in touch</h1>
                        <input placeholder='Name' />
                        <input placeholder='Email' />
                        <input placeholder='Subject' />
                        <textarea placeholder='Message' />
                        <button>Send</button>
                    </form>
                    <div className='contactInfo'>
                        <div className='contactInfoCont'>
                            <House style={{ color: "#416D19", fontSize: "35px" }} />
                            <div>
                                <p style={{color:"#2a2a2a", fontWeight:500, fontStyle:'normal', textTransform:'none'}}>Pretoria, South Africa</p>
                                <p style={{color:'#8a8a8a',lineHeight:'30px', fontWeight:'normal', textTransform:'none'}}>Where you can find us</p>
                            </div>
                        </div>
                        <div className='contactInfoCont'>
                            <Phone style={{ color: "#416D19", fontSize: "35px" }} />
                            <div>
                                <p style={{color:"#2a2a2a", fontWeight:500, fontStyle:'normal', textTransform:'none'}}>012 345 6789</p>
                                <p style={{color:'#8a8a8a',lineHeight:'30px', fontWeight:'normal', textTransform:'none'}}>Mon to Fri 8am to 5pm</p>
                            </div>
                        </div>
                        <div className='contactInfoCont'>
                            <Email style={{ color: "#416D19", fontSize: "35px" }} />
                            <div>
                                <p style={{color:"#2a2a2a", fontWeight:500, fontStyle:'normal', textTransform:'none'}}>wein@changingnarrative.co.za</p>
                                <p style={{color:'#8a8a8a',lineHeight:'30px', fontWeight:'normal', textTransform:'none'}}>Send us your query anytime!</p>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </>
    )
}

export default ContactUs