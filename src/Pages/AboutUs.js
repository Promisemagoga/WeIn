import React from 'react'
import NavBar from '../Components/NavBar'
import Footer from '../Components/Footer'

function AboutUs() {
    return (
        <>
            <NavBar />
            <header className='aboutHeader'>
                <section className='containerCover'>
                    <h1>About Us</h1>
                </section>
            </header>
            <main className='aboutUsContainer mainContainer'>
                <div className='aboutUsContent'>
                    <p>Who are we</p>
                    <h1>The narrative changers</h1>
                    <p className='aboutParagraph'>our goal for this project is to connect skilled artisans with potential customers,
                        while also providing a platform for communities to access reliable and high-quality services for their projects.
                        We serve as a bridge to link talented individuals who work with their hands,
                        such as builders, ironworkers, and plumbers, with customers seeking their expertise.
                        In addition, we aim to generate employment opportunities for artisans and establish a
                        system for verifying the quality of their work history.</p>
                    <button>Post A Project</button>
                </div>
                <div className='aboutImgContainer'>
                    <img src={require("../Assets/Img/workers-2036185_1280.jpg")} />
                    <div className='yearContainer'>
                        <p>Since <span>2024</span></p>
                    </div>
                </div>
            </main>
            <Footer />

        </>
    )
}

export default AboutUs