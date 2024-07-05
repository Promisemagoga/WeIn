import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Theme } from "../ColorPallete/Theme"
import { useState } from "react";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

function NavBar() {

    const [openLogin, setOpenLogin] = useState(false)
    const [openRegister, setOpenRegister] = useState(false)


    function openLoginModal(){
        setOpenLogin(true)
    }

    function openRegisterModal(){
        setOpenRegister(true)
    }

    return (
        <div className="navbarCustom">
            <Navbar collapseOnSelect expand="lg" variant="light" className="navbar">
                <Navbar.Brand href="/" className="logo">
                    <img src={require("../Assets/Icons/2823525.png")} />
                    <div>
                        <h1 style={{ color: Theme.HeadingColor }}>WeIn</h1>
                        <p style={{ color: Theme.ActionsColor }}>Changing the narrative</p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="/" className="link">Home</Nav.Link>
                        <Nav.Link href="/About" className="link" >About</Nav.Link>
                        {/* <Nav.Link href="/Projects" className="link" style={{ color: Theme.ActionsColor }}>Find artisan</Nav.Link> */}
                        <Nav.Link href="/ContactUs" className="link" >Contact</Nav.Link>
                        <Nav.Link  className="link" onClick={openLoginModal}>Login</Nav.Link>
                        <Nav.Link  className="link" onClick={openRegisterModal}>Register</Nav.Link>

                    </Nav>
                    {/* <Nav className="ml-auto accessBtn">
                        <button className="loginBtn" style={{ backgroundColor: Theme.ActionsColor, color: '#fff', border: 'none' }}>Login</button>
                        <button className="registerBtn" style={{ borderColor: Theme.ActionsColor, backgroundColor: 'transparent', color: Theme.ActionsColor }}>Register</button>
                    </Nav> */}
                </Navbar.Collapse>
            </Navbar>
            {openLogin && <Login setOpenLogin={setOpenLogin}/>}
            {openRegister && <Register setOpenRegister={setOpenRegister}/> }
        </div>



    )
}

export default NavBar