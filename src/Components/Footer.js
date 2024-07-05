import { Facebook, GitHub, Google, Instagram, LinkedIn, Twitter } from '@mui/icons-material'
import React from 'react'

function Footer() {
  return (
    <footer
    className="text-center text-lg-start text-white"
    style={{ backgroundColor: '#416D19' }}
  >
    <div className="container p-4 pb-0">
      <section className="">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">ABOUT US</h5>

            <p>
             Changing the narrative by representing the underrepresented
            </p>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">CONTACT INFO</h5>

            <ul className="list-unstyled mb-0">
              <li>
                Address: Pretoria, South Africa
              </li>
              <li>
                Phone: 0123456789
              </li>
              <li>
                Email: wein@changingnarrative.co.za
              </li>
            </ul>
          </div>

          <div className="col-lg-4 col-md-6 mb-4 mb-md-0">
            <h5 className="text-uppercase">IMPORTANT LINKS</h5>

            <ul className="list-unstyled mb-0">
              <li>
                <a href="#!" class="text-white">Contact Us</a>
              </li>
              <li>
                <a href="#!" class="text-white">About Us</a>
              </li>
              <li>
                <a href="#!" class="text-white">Home</a>
              </li>
            </ul>
          </div>

          {/* <div className="col-lg-2 col-md-6 mb-4 mb-md-0">
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
          </div> */}


{/* 
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
          </div> */}

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
        >
            <Facebook/>
        </a>


        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
            <Twitter/>
        </a>


        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
            <Google/>
        </a>


        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
            <Instagram/>
        </a>


        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
            <LinkedIn/>
        </a>


        <a
          class="btn btn-outline-light btn-floating m-1"
          href="#!"
          role="button"
        >
            <GitHub/>
        </a>
      </section>

    </div>



    <div
      class="text-center p-3"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
    >
      © 2024 Copyright:
      <a class="text-white" href="https://mdbootstrap.com/"
      >Femay Geeks</a
      >
    </div>

  </footer>
  )
}

export default Footer