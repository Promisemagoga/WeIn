import React from 'react'
import NavBar from '../Components/NavBar'
import { Theme } from '../ColorPallete/Theme'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { Search, SearchRounded } from '@mui/icons-material'
import { Box, Rating } from '@mui/material'
import Footer from '../Components/Footer'

function LandingPage() {
  return (
    <>
      <NavBar />
      <header>
        <section className='headerContainer'>
          <div className='headerSubCont'>
            <Carousel
              autoPlay
              interval={5000}
              infiniteLoop
              showArrows={true}
              showIndicators={true}
              transitionTime={500}
              showStatus={false}
              showThumbs={false}
              className='carousel'
            >
              <div className='carouselCont'>
                <h1>Find The Most Talented Artisans</h1>
                <p>We aim to generate employment opportunities for tradespeople and establish a system for verifying the quality of their work history, while ensuring quality projects for our community.</p>
                <div className='buttonsContainer'>
                  <button>Login</button>
                  <button className='rightBtn'>Register</button>
                </div>
              </div>
              <div className='carouselCont'>
                <h1>Meet your potential customers</h1>
                <p>We aim to generate employment opportunities for tradespeople and establish a system for verifying the quality of their work history, while ensuring quality projects for our community.</p>
                <div className='buttonsContainer'>
                  <button>Login</button>
                  <button className='rightBtn'>Register</button>
                </div>
              </div>
            </Carousel>
          </div>
        </section>
      </header>
      <main>
        <section className='mainContainer'>
          <p>Featured Categories</p>
          <h1>Browse Top Categories</h1>
          <div className='rowCards'>
            <div className='topCategoriesCard'>
              <img src={require('../Assets/Icons/welder (1).png')} />
              <h2>Metal Workers</h2>
              <p>(63)</p>
            </div>
            <div className='topCategoriesCard'>
              <img src={require('../Assets/Icons/carpanter.png')} />
              <h2>Carpenters</h2>
              <p>(58)</p>
            </div>
            <div className='topCategoriesCard'>
              <img src={require('../Assets/Icons/plumber.png')} />
              <h2>Plumbers</h2>
              <p>(32)</p>
            </div>
            <div className='topCategoriesCard'>
              <img src={require('../Assets/Icons/bricklayer.png')} />
              <h2>Brick Layers</h2>
              <p>(15)</p>
            </div>
          </div>

        </section>
        <section className='instructions'>
          <div className='instructionCover mainContainer'>
            <p>Application Proccess</p>
            <h1>How it works</h1>
            <div className='rowCards'>
              <div className='instructionCards'>
                <img src={require("../Assets/Icons/12886549.png")} />
                <h2>1.Search for artian</h2>
                <p>Search for the artisan you need for your project. You can do this by either
                  looking at the particular category based on your project needs or by looking at the top listed artisan
                  section
                </p>
              </div>
              <div className='instructionCards'>
                <img src={require("../Assets/Icons/4319286.png")} />
                <h2>2.Hire artisan</h2>
                <p>For this you will have to login if you already have an account or create a new account if you
                  are a new member and get to negotiate your project with the artisan of your choice.
                </p>
              </div>
              <div className='instructionCards'>
                <img src={require("../Assets/Icons/7376593.png")} />
                <h2>3.Get your project started</h2>
                <p>
                  Satisfied with the artisan you chose? Now your project can start.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className='mainContainer'>
          <p>People's Choice</p>
          <h1>Top rated artisans</h1>
          <div className='topArtisanCard'>
            <div className='topArtisanCardCont'>
              <img src={require("../Assets/Img/construction-worker-4020775_1280.jpg")} />
              <div className='innerContent'>
                <h3>Daniel Khoza</h3>
                <p>Plumber</p>
                <Rating value={4} readOnly />
                <p className="price">Pretoria, South Africa</p>
                <Box align="left" mb={1} borderColor="transparent">
                </Box>
              </div>
            </div>
            <button>Hire</button>
          </div>
          <div className='topArtisanCard'>
            <div className='topArtisanCardCont'>
              <img src={require("../Assets/Img/construction-worker-4020775_1280.jpg")} />
              <div className='innerContent'>
                <h3>Daniel Khoza</h3>
                <p>Plumber</p>
                <Rating value={4} readOnly />
                <p className="price">Pretoria, South Africa</p>
                <Box align="left" mb={1} borderColor="transparent">
                </Box>
              </div>
            </div>
            <button>Hire</button>
          </div>
          <div className='topArtisanCard'>
            <div className='topArtisanCardCont'>
              <img src={require("../Assets/Img/construction-worker-4020775_1280.jpg")} />
              <div className='innerContent'>
                <h3>Daniel Khoza</h3>
                <p>Plumber</p>
                <Rating value={4} readOnly />
                <p className="price">Pretoria, South Africa</p>
                <Box align="left" mb={1} borderColor="transparent">
                </Box>
              </div>
            </div>
            <button>Hire</button>
          </div>
          <div className='topArtisanCard'>
            <div className='topArtisanCardCont'>
              <img src={require("../Assets/Img/construction-worker-4020775_1280.jpg")} />
              <div className='innerContent'>
                <h3>Daniel Khoza</h3>
                <p>Plumber</p>
                <Rating value={4} readOnly />
                <p className="price">Pretoria, South Africa</p>
                <Box align="left" mb={1} borderColor="transparent">
                </Box>
              </div>
            </div>
            <button>Hire</button>
          </div>
        </section>
       
       <Footer/>
      </main>
    </>
  )
}

export default LandingPage