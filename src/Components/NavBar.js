import { Nav, Navbar } from "react-bootstrap"
import { Link } from "react-router-dom"
import { Theme } from "../ColorPallete/Theme"

function NavBar() {

    return (
        <div className="navbarCustom">
            <Navbar collapseOnSelect expand="lg" variant="light" className="navbar" sticky-top>
                <Navbar.Brand href="/" className="logo">
                    <img src={require("../Assets/Icons/2823525.png")} />
                    <div>
                        <h1 style={{ color: Theme.HeadingColor }}>WeIn</h1>
                        <p style={{ color: Theme.ActionsColor }}>Changing the narrative</p>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto mr-auto">
                        <Nav.Link href="/Resume" className="link" style={{ color: Theme.ActionsColor }}>Home</Nav.Link>
                        <Nav.Link href="/Projects" className="link" style={{ color: Theme.ActionsColor }}>About</Nav.Link>
                        <Nav.Link href="/Projects" className="link" style={{ color: Theme.ActionsColor }}>Find artisan</Nav.Link>
                        <Nav.Link href="/ContactMe" className="link" style={{ color: Theme.ActionsColor }}>Contact</Nav.Link>
                    </Nav>
                    <Nav className="ml-auto accessBtn">
                        <button className="loginBtn" style={{ backgroundColor: Theme.ActionsColor, color: '#fff', border: 'none' }}>Login</button>
                        <button className="registerBtn" style={{ borderColor: Theme.ActionsColor, backgroundColor: 'transparent', color: Theme.ActionsColor }}>Register</button>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>



    )
}

export default NavBar