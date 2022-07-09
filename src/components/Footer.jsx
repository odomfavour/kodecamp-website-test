import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import KodocampWhite from "../Images/kodecamp_logo_white.svg";

// import css
import "../css/footer.css";
// import social icons
import {
  FaLinkedinIn,
  FaTwitter,
  FaFacebookF,
  FaYoutube,
  FaArrowRight,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribeEmail("");
    alert("Email has been subscribed");
  };
  return (
    <footer
      style={{ backgroundColor: "#19364D" }}
      className="text-white py-4 pt-5 footer container-xxl"
    >
      <Container className="text-left container-xl px-lg-0 footer-container">
        <Row className="align-items-start justify-content-between px-xl-0 px-xxl-4  mb-3 mx-xxl-0">
          <Col
            className="col-7 col-md-3 col-lg-3 mb-5 mb-lg-0 footer-col footer-logo"
            // style={{ flex: "10%" }}
          >
            <img src={KodocampWhite} className="img-fluid" alt="" />
          </Col>
          <Col
            className="col-11 col-md-6 col-lg-2 mb-5 mb-lg-0  footer-col"
            // style={{ flex: "16%" }}
          >
            <p className=" footer-subtitle">Quick Links</p>
            <ul className="list-unstyled">
              <li className="footer-list">
                <Link to="/">About Us</Link>
              </li>
              <li className="footer-list">
                <Link to="/">Contact Us</Link>
              </li>
              <li className="footer-list">
                <Link to="/">Explore</Link>
              </li>
              <li className="footer-list">
                <Link to="/">How it works</Link>
              </li>
              <li className="footer-list">
                <Link to="/">Sponsors</Link>
              </li>
            </ul>
          </Col>
          <Col
            className="col-11 col-md-6 col-lg-2 mb-5 mb-lg-0 footer-col"
            // style={{ flex: "16%" }}
          >
            <p className="footer-subtitle ">Terms</p>
            <ul className="list-unstyled">
              <li className="footer-list">
                <Link to="/">Privacy Policy</Link>
              </li>
              <li className="footer-list">
                <Link to="/">Terms Of Service</Link>
              </li>
              <li className="footer-list">
                <Link to="/">Copyright Policy</Link>
              </li>
              <li className="footer-list">
                <Link to="/">FAQs</Link>
              </li>
            </ul>
          </Col>
          <Col className="col-11 col-md-6 col-lg-2 mb-5 mb-lg-0 footer-col">
            <p className="footer-subtitle ">Connect With Us</p>
            <ul className="list-unstyled">
              <li className="footer-list ">
                <Link to="/">
                  <FaLinkedinIn className="footer-social-icons " /> LinkedIn
                </Link>
              </li>
              <li className="footer-list">
                <Link to="/">
                  <FaFacebookF className="footer-social-icons" /> Facebook
                </Link>
              </li>
              <li className="footer-list">
                <Link to="/">
                  <FaTwitter className="footer-social-icons" /> Twitter
                </Link>
              </li>
              <li className="footer-list">
                <Link to="/">
                  <RiInstagramFill className="footer-social-icons" /> Instagram
                </Link>
              </li>
              <li className="footer-list">
                <Link to="/">
                  <FaYoutube className="footer-social-icons" /> Youtube
                </Link>
              </li>
            </ul>
          </Col>
          <Col
            className="col-11 col-md-6 col-lg-3 mb-2 footer-col"
            // style={{ width: "240px" }}
          >
            <p className="footer-subtitle ">
              We know you'll love to find out more!
            </p>
            <p className="fw-light">
              Subscribe to our newsletter to receive the latest updates and
              information about Kodecamp.
            </p>
            <form onSubmit={handleSubmit}>
              <InputGroup className="mb-2 mt-4 bg-none">
                <Form.Control
                  className="bg-transparent py-3 fw-light"
                  placeholder="Email Address"
                  style={{ color: "#FCFCFC" }}
                  value={subscribeEmail}
                  onChange={(e) => {
                    setSubscribeEmail(e.target.value);
                  }}
                  aria-label="Recipient's username"
                  aria-describedby="basic-addon2"
                />
                <Button
                  variant="outline-secondary"
                  id="button-addon2"
                  type="submit"
                  className="border-0 px-4"
                  style={{ backgroundColor: "#0D6EFD", color: "#FCFCFC" }}
                >
                  <FaArrowRight />
                </Button>
              </InputGroup>
            </form>
          </Col>
        </Row>
        <p className="fw-semibold text-center mt-0 pt-4">
          &copy; 2022 KodeCamp
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
