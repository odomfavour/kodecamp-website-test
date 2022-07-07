import { Container, Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import closeCollapseBarIcon from "../Assets/NavbarAssets/close-collapsebar-icon.svg"
import kodecampIconMobile from "../Assets/NavbarAssets/kodecamp-icon-mobile.svg"
import kodecampIconDesktop from "../Assets/NavbarAssets/kodecamp-icon-desktop.svg"
import navbarHomeIcon from "../Assets/NavbarAssets/navbar-home-icon.svg"
import navbarAboutIcon from "../Assets/NavbarAssets/navbar-about-icon.svg"
import navbarContactIcon from "../Assets/NavbarAssets/navbar-contact-icon.svg"
import navbarExploreIcon from "../Assets/NavbarAssets/navbar-explore-icon.svg"
import navbarWorksIcon from "../Assets/NavbarAssets/navbar-works-icon.svg"
import navbarToggle from "../Assets/NavbarAssets/navbar-toggle.svg"
import { useState } from "react";


const NavigationBar = () => {

    const [showNavAndOverlay, setShowNavAndOverlay] = useState(false);

    return (
    <Navbar collapseOnSelect expand="lg" className="navbar">
        <Container fluid>
            {
                showNavAndOverlay &&
                <div id="overlay" className=""></div>
            }
        <Navbar.Brand href="#home" className="pt-10">
            <img src={kodecampIconMobile} alt="kodecamp-icon" className="d-md-none" />
            <img src={kodecampIconDesktop} alt="kodecamp-icon" className="d-none d-md-block d-lg-none kodecamp-icon-tablet" />
            <img src={kodecampIconDesktop} alt="kodecamp-icon" className="d-none d-lg-block" />
        </Navbar.Brand>
        <Nav.Link className="d-none d-lg-block navbar-links-desktop">
            Home
        </Nav.Link>
        <Nav.Link className="d-none d-lg-block navbar-links-desktop">
            About Us
        </Nav.Link>
        <Nav.Link className="d-none d-lg-block navbar-links-desktop">
            Contact Us
        </Nav.Link>
        <Nav.Link className="d-none d-lg-block navbar-links-desktop">
            Explore
        </Nav.Link>
        <Nav.Link className="d-none d-lg-block navbar-links-desktop">
            How It Works
        </Nav.Link>
        <Nav.Link>
            <Button variant="" className="d-inline-block btn-login">Login</Button>{' '}
        </Nav.Link>
        <Nav.Link>
            <Button variant="secondary" className="d-inline-block btn-enroll">Enroll Now</Button>{' '}
        </Nav.Link>
            
        
        <div>
            <img src={navbarToggle} id="navbarToggle" className="d-lg-none d-xl-none" onClick={() => setShowNavAndOverlay(true)} alt=""/>
        </div>
        {/* <Navbar.Toggle aria-controls="" /> */}
        </Container>
        { 
        showNavAndOverlay && 
        <div className="" id="responsive-navbar-nav">
            <div style={{width: "100%"}} className="d-flex justify-content-end">
                <img src={closeCollapseBarIcon} alt="close-collapse-bar-icon" id="closeCollapseBarIcon" onClick={() => setShowNavAndOverlay(false)} />
            </div>
            <div className="d-flex flex-column text-left" style={{width: "100%"}}>
                
                <div className="mt-2">
                    <img src={navbarHomeIcon} alt="navbar-home-icon" className="ps-2" />
                    <a href="#" className="navbar-links-mobile ps-3">
                        Home
                    </a>
                </div>

                <div className="navbar-mobile-line mt-3"></div>
                
                <div className="mt-3">
                    <img src={navbarAboutIcon} alt="navbar-about-icon" className="ps-2" />
                    <a href="#" className="navbar-links-mobile ps-3">
                        About Us
                    </a>
                </div>
                
                <div className="navbar-mobile-line mt-3"></div>
                
                <div className="mt-3">
                    <img src={navbarContactIcon} alt="navbar-contact-icon" className="ps-2" />
                    <a href="#" className="navbar-links-mobile ps-3">
                        Contact Us
                    </a>
                </div>
                
                <div className="navbar-mobile-line mt-3"></div>
                
                <div className="mt-3">
                    <img src={navbarExploreIcon} alt="navbar-explore-icon" className="ps-2" />
                    <a href="#" className="navbar-links-mobile ps-3">
                        Explore
                    </a>
                </div>
                
                <div className="navbar-mobile-line mt-3"></div>
                
                <div className="mt-3">
                    <img src={navbarWorksIcon} alt="navbar-works-icon" className="ps-2" />
                    <a href="#" className="navbar-links-mobile ps-3">
                        How It Works
                    </a>
                </div>
                
            </div>
        </div>
        }
        {/* <Navbar.Collapse id="responsive-navbar-nav" className="">
            <Nav className="me-auto">
            <Nav.Link href="#features" className="d-lg-none d-xl-none navbar-links-mobile">Home</Nav.Link>
            <Nav.Link href="#pricing" className="d-lg-none d-xl-none navbar-links-mobile">About</Nav.Link>
            </Nav>
        </Navbar.Collapse> */}
    </Navbar>
    );
}
 
export default NavigationBar;