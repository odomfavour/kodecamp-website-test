import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Form, InputGroup } from "react-bootstrap";
import KodocampWhite from "../../Images/kodecamp_logo_white.svg";

// import css
// import "../../css/footer.css";
import "./footer.css";
// import  icons
import { FaArrowRight } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubscribeEmail("");
    alert("Email has been subscribed");
  };

  return (
    <footer className=" py-4 pt-5 footer  ">
      <Container className="text-left container-xl px-lg-0 footer-container position-relative">
        <Row className="align-items-start justify-content-between px-xl-0 mb-3 ">
          <Col className="col-7 col-md-3 col-lg-2  mb-5 mb-lg-0 footer-col footer-logo">
            <img src={KodocampWhite} className="img-fluid" alt="" />
          </Col>
          <Col className="col-11 col-md-6 col-lg-2 mb-5 mb-lg-0  footer-col">
            <p className=" footer-subtitle">Quick Links</p>
            <ul className="list-unstyled">
              <li className="footer-list">
                <Link to="/about-us">About Us</Link>
              </li>
              <li className="footer-list ">
                <Link to="/contactus">Contact Us</Link>
              </li>
              <li className="footer-list">
                <Link to="/explore">Explore</Link>
              </li>
              <li className="footer-list">
                <Link to="/works">How it works</Link>
              </li>
              <li className="footer-list">
                <Link to="/sponsor">Sponsors</Link>
              </li>
            </ul>
          </Col>{" "}
          <Col className="col-11 col-md-6 col-lg-2 mb-5 mb-lg-0 footer-col">
            <p className="footer-subtitle  ">Connect</p>
            <ul className="list-unstyled">
              <li className="footer-list ">
                <Link to="/">LinkedIn</Link>
              </li>
              <li className="footer-list">
                <Link to="/">Facebook</Link>
              </li>
              <li className="footer-list">
                <Link to="/">Twitter</Link>
              </li>
              <li className="footer-list">
                <Link to="/">Instagram</Link>
              </li>
              <li className="footer-list">
                <Link to="/">Youtube</Link>
              </li>
            </ul>
          </Col>
          <Col className="col-11 col-md-6 col-lg-2 mb-5 mb-lg-0 footer-col">
            <p className="footer-subtitle ">Terms</p>
            <ul className="list-unstyled">
              <li className="footer-list">
                <Link to="/privacy-policy">Privacy Policy</Link>
              </li>
              <li className="footer-list">
                <Link to="/terms">Terms Of Service</Link>
              </li>
              <li className="footer-list">
                <Link to="/">Copyright Policy</Link>
              </li>
              <li className="footer-list">
                <Link to="/faq">FAQs</Link>
              </li>
            </ul>
          </Col>
          <Col className="col-11 col-md-6 col-lg-3 mb-2 footer-col">
            <p className="footer-subtitle ">Stay in touch</p>
            <p className="fw-light white-100">Subscribe to our newsletter</p>
            <form onSubmit={handleSubmit}>
              <InputGroup className="mb-2 mt-4 bg-none">
                <Form.Control
                  className="bg-transparent py-3 fw-light white-100"
                  placeholder="Email address"
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
                  className="border-0 px-4 white-100 bg-blue-100"
                >
                  <FaArrowRight />
                </Button>
              </InputGroup>
            </form>
          </Col>
        </Row>
        <p
          style={{ fontWeight: "500" }}
          className=" text-center mt-0 pt-5 white-100"
        >
          &copy; 2022 KodeCamp
        </p>
      </Container>
    </footer>
  );
};

export default Footer;
