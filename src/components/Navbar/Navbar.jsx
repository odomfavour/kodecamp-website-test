import { Container, Navbar, Button } from "react-bootstrap";
import closeCollapseBarIcon from "../../Images/NavbarAssets/close-collapsebar-icon.svg";
import kodecampIconMobile from "../../Images/NavbarAssets/kodecamp-icon-mobile.svg";
import kodecampIconDesktop from "../../Images/NavbarAssets/kodecamp-icon-desktop.svg";
import navbarHomeIcon from "../../Images/NavbarAssets/navbar-home-icon.svg";
import navbarAboutIcon from "../../Images/NavbarAssets//navbar-about-icon.svg";
import navbarContactIcon from "../../Images/NavbarAssets/navbar-contact-icon.svg";
import navbarExploreIcon from "../../Images/NavbarAssets/navbar-explore-icon.svg";
import navbarWorksIcon from "../../Images/NavbarAssets/navbar-works-icon.svg";
import LoginIconMobile from "../../Images/NavbarAssets/login-icon-mobile.svg";
import navbarToggle from "../../Images/NavbarAssets/navbar-toggle.svg";
import "./Navbar.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [showNavAndOverlay, setShowNavAndOverlay] = useState(false);

  return (
    <Navbar collapseOnSelect expand="lg" className="navbar pt-lg-2">
      <Container>
        {showNavAndOverlay && <div id="overlay" className=""></div>}
        <Navbar.Brand className="">
          <Link to="/">
            <img
              src={kodecampIconMobile}
              alt="kodecamp-icon"
              id="kodecamp-icon-mobile"
              className="d-sm-none kodecamp-icon ms-1"
            />
            <img
              src={kodecampIconDesktop}
              alt="kodecamp-icon"
              id="kodecamp-icon-tablet"
              className="d-none d-sm-block d-lg-none kodecamp-icon ms-sm-3"
            />
            <img
              src={kodecampIconDesktop}
              alt="kodecamp-icon"
              id="kodecamp-icon-desktop"
              className="d-none d-lg-block kodecamp-icon"
            />
          </Link>
        </Navbar.Brand>
        <div className="d-flex" style={{fontWeight: "500"}}>
            <Link to="/" className="d-none d-lg-block navbar-links-desktop px-lg-2 px-xl-4">
                Home
            </Link>
            <Link to="/about-us" className="d-none d-lg-block navbar-links-desktop px-lg-2 px-xl-4">
                About Us
            </Link>
            <Link to="/contactus" className="d-none d-lg-block navbar-links-desktop px-lg-2 px-xl-4">
                Contact Us
            </Link>
            <Link to="/explore" className="d-none d-lg-block navbar-links-desktop px-lg-2 px-xl-4">
                Explore
            </Link>
            <Link to="/works" className="d-none d-lg-block navbar-links-desktop px-lg-2 px-xl-4">
                How It Works
            </Link>
        </div>

        <div className="d-flex">
          <div className="d-flex justify-content-end">
            <Link to="/" className="btn enrol-login">
              <Button
                variant=""
                className="d-inline-block d-none d-md-block btn-login"
              >
                Login
              </Button>
            </Link>
            <Link to="/enroll" className="btn">
              <Button className="d-inline-block btn-enroll bg-green-100">
                Enroll Now
              </Button>
            </Link>
          </div>

          <img
            src={navbarToggle}
            id="navbarToggle"
            className="d-lg-none d-xl-none me-1 me-sm-4"
            onClick={() => setShowNavAndOverlay(true)}
            alt=""
          />
        </div>
      </Container>
      {showNavAndOverlay && (
        <div className="" id="responsive-navbar-nav">
          <div style={{ width: "100%" }} className="d-flex justify-content-end">
            <img
              src={closeCollapseBarIcon}
              alt="close-collapse-bar-icon"
              id="closeCollapseBarIcon"
              onClick={() => setShowNavAndOverlay(false)}
            />
          </div>
          <div
            className="d-flex flex-column text-left"
            style={{ width: "100%" }}
          >
            <div className="mt-2">
              <img
                src={navbarHomeIcon}
                alt="navbar-home-icon"
                className="ps-2"
              />
              <Link to="/" className="navbar-links-mobile ps-3">
                Home
              </Link>
            </div>

            <div className="navbar-mobile-line mt-3"></div>

            <div className="mt-3">
              <img
                src={navbarAboutIcon}
                alt="navbar-about-icon"
                className="ps-2"
              />
              <Link to="/about-us" className="navbar-links-mobile ps-3">
                About Us
              </Link>
            </div>

            <div className="navbar-mobile-line mt-3"></div>

            <div className="mt-3">
              <img
                src={navbarContactIcon}
                alt="navbar-contact-icon"
                className="ps-2"
              />
              <Link to="/contactus" className="navbar-links-mobile ps-3">
                Contact Us
              </Link>
            </div>

            <div className="navbar-mobile-line mt-3"></div>

            <div className="mt-3">
              <img
                src={navbarExploreIcon}
                alt="navbar-explore-icon"
                className="ps-2"
              />
              <Link to="/explore" className="navbar-links-mobile ps-3">
                Explore
              </Link>
            </div>

            <div className="navbar-mobile-line mt-3"></div>

            <div className="mt-3">
              <img
                src={navbarWorksIcon}
                alt="navbar-works-icon"
                className="ps-2"
              />
              <Link to="/works" className="navbar-links-mobile ps-3">
                How It Works
              </Link>
            </div>

            <div className="navbar-mobile-line mt-3"></div>

            <div className="mt-3">
              <img
                src={LoginIconMobile}
                alt="navbar-works-icon"
                className="ps-2"
              />
              <Link
                to="/"
                id="navbar-mobile-login"
                className="navbar-links-mobile green-100 ps-3"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </Navbar>
  );
};

export default NavigationBar;
