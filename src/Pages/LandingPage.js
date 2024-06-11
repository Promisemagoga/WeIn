import React from 'react'
import NavBar from '../Components/NavBar'
import { Theme } from '../ColorPallete/Theme'

function LandingPage() {
  return (
    <header>
      <NavBar />
      <main>
        <div className='headerContainer'>
          <div className='headerCover'>
            <h1 style={{ color: Theme.HeadingColor }}>Find The Most Talented Artisans For Your Project</h1>
            <button>Find Artisan</button>
          </div>
        </div>
        <div className='topCategoriesContainer'>
          <h1>Browse Top Categories</h1>
          <div className='topCategories'>
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

        </div>
        <div className='instructions'>
          <div className='instructionCover'>
            <h1>How it works</h1>
            <div className='topCategories'>
              <div className='instructionCards'>
                <h2>1.Search for artian</h2>
                <p>Search for the artisan you need for your project. You can do this by either
                  looking at the particular category based on your project needs or by looking at the top listed artisan
                  section
                </p>
              </div>
              <div className='instructionCards'>
                <h2>2.Hire artisan</h2>
                <p>For this you will have to login if you already have an account or create a new account if you
                  are a new member and get to negotiate your project with the artisan of your choice.
                </p>
              </div>
              <div className='instructionCards'>
                <h2>3.Get your project started</h2>
                <p>
                  Satisfied with the artisan you chose? Now your project can start.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className='topArtisanCont'>
          <h1>Top rated artisans</h1>
          <div>
            <div className='topArtisanCard'>
              <img src={require("../Assets/Icons/2942499.png")} />
              <div>
                <h2>Name Surname</h2>
                <p>Location</p>
              </div>
              <button>Hire</button>
            </div>
            <div className='topArtisanCard'>
              <img src={require("../Assets/Icons/2942499.png")} />
              <div>
                <h2>Name Surname</h2>
                <p>Location</p>
              </div>
              <button>Hire</button>
            </div>
            <div className='topArtisanCard'>
              <img src={require("../Assets/Icons/2942499.png")} />
              <div>
                <h2>Name Surname</h2>
                <p>Location</p>
              </div>
              <button>Hire</button>
            </div>
            <div className='topArtisanCard'>
              <img src={require("../Assets/Icons/2942499.png")} />
              <div>
                <h2>Name Surname</h2>
                <p>Location</p>
              </div>
              <button>Hire</button>
            </div>
          </div>
        </div>
        <div className='aboutUsContainer'>
          <div className='aboutUsContent'>
            <h1>About us</h1>
            <h2>Changing the narrative</h2>
            <p>our goal of this project is to connect skilled artisans with potential customers,
              while also providing a platform for communities to access reliable and high-quality services for their projects.
              We serve as a bridge to link talented individuals who work with their hands,
              such as builders, ironworkers, and plumbers, with customers seeking their expertise.
              In addition, we aim to generate employment opportunities for artisans and establish a
              system for verifying the quality of their work history.</p>
            <button>Post A Project</button>
          </div>
          <img src={require("../Assets/Img/workers-2036185_1280.jpg")} />
        </div>
       
        <footer
            className="text-center text-lg-start text-white"
            style={{backgroundColor: '#3e4551'}}
          >
            <div className="container p-4 pb-0">
              <section className="">
                <div className="row">
                  <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">FOOTER CONTENT</h5>

                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Molestiae modi cum ipsam ad, illo possimus laborum ut
                      reiciendis obcaecati. Ducimus, quas. Corrupti, pariatur eaque?
                      Reiciendis assumenda iusto sapiente inventore animi?
                    </p>
                  </div>

                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>

                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!" className="text-white">Link 1</a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">Link 2</a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">Link 3</a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">Link 4</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>

                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!" class="text-white">Link 1</a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">Link 2</a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">Link 3</a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">Link 4</a>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>

                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!" class="text-white">Link 1</a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">Link 2</a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">Link 3</a>
                      </li>
                      <li>
                        <a href="#!" class="text-white">Link 4</a>
                      </li>
                    </ul>
                  </div>



                  <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
                    <h5 className="text-uppercase">Links</h5>

                    <ul className="list-unstyled mb-0">
                      <li>
                        <a href="#!" className="text-white">Link 1</a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">Link 2</a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">Link 3</a>
                      </li>
                      <li>
                        <a href="#!" className="text-white">Link 4</a>
                      </li>
                    </ul>
                  </div>

                </div>

              </section>


              <hr className="mb-4" />


              <section className="">
                <p className="d-flex justify-content-center align-items-center">
                  <span className="me-3">Register for free</span>
                  <button type="button" className="btn btn-outline-light btn-rounded">
                    Sign up!
                  </button>
                </p>
              </section>


              <hr className="mb-4" />


              <section className="mb-4 text-center">

                <a
                  className="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                ><i className="fab fa-facebook-f"></i
                ></a>


                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                ><i class="fab fa-twitter"></i
                ></a>


                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                ><i class="fab fa-google"></i
                ></a>


                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                ><i class="fab fa-instagram"></i
                ></a>


                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                ><i class="fab fa-linkedin-in"></i
                ></a>


                <a
                  class="btn btn-outline-light btn-floating m-1"
                  href="#!"
                  role="button"
                ><i class="fab fa-github"></i
                ></a>
              </section>

            </div>



            <div
              class="text-center p-3"
              style={{backgroundColor: 'rgba(0, 0, 0, 0.2)'}}
            >
              © 2020 Copyright:
              <a class="text-white" href="https://mdbootstrap.com/"
              >MDBootstrap.com</a
              >
            </div>

          </footer>
      </main>
      
        

     
    </header>
  )
}

export default LandingPage