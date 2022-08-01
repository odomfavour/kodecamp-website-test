import React, { useState } from "react";
import { Form, Row, Col, Container } from "react-bootstrap";
import contactimg from "../../Images/contactus_images/contact-us-image.jpg";
import contactimgmobile from "../../Images/contactus_images/contact-us-image-mobile.jpg";
import contactmdimg1 from "../../Images/contactus_images/contact-md-img-1.jpg";
import contactmdimg2 from "../../Images/contactus_images/contact-md-img-2.jpg";
import contactmdimg3 from "../../Images/contactus_images/contact-md-img-3.jpg";
import contactmdimg4 from "../../Images/contactus_images/contact-md-img-4.jpg";
import contactmdimg5 from "../../Images/contactus_images/contact-md-img-5.jpg";
// custom alert
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

function ContactUsForm() {
  // const [loading, setLoading] = useState(false);

  // store the error in the input field
  const [inputErrors, setInputErrors] = useState({});

  // set the initial submit state to be false
  const [isSubmit, setIsSubmit] = useState(false);

  // stores the inputted values of all the input fields
  const [inputField, setInputField] = useState({
    full_name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    let value = e.target.value;
    setInputField({
      ...inputField,
      [e.target.name]: value,
    });
    // console.log(inputField);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputErrors(validate(inputField));
    setIsSubmit(true);

    if (Object.keys(inputErrors).length === 0 && isSubmit) {
      Swal.fire({
        icon: "success",
        title: "Form Submitted",
        confirmButtonColor: "#669e00",
      }).then(() =>
        setInputField({
          full_name: "",
          email: "",
          phone: "",
          message: "",
        })
      );
    }
  };

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.full_name) {
      errors.full_name = "Full Name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.phone) {
      errors.phone = "Phone number is required";
    }
    if (!values.message) {
      errors.message = "Please input your message";
    }

    return errors;
  };

  return (
    <>
      <Container className="my-5 d-none d-md-block">
        <div className="text-center mx-auto col-lg-10 fw-bold" style={{fontSize:"32px"}}>
          <p className="">
            Our team are available to respond to any enquires or question you
            might have. We’ll love to hear from you,
            <br></br>Get in touch today!
          </p>
        </div>
      </Container>
      <Container className="my-5 d-block d-md-none">
        <div className="text-center mx-auto col-md-9 px-3 fw-bold" style={{fontSize:"15px"}} >
          <p className="">
            Our team are available to respond to any enquires or question you
            might have. We’ll love to hear from you,
            <br></br>Get in touch today!
          </p>
        </div>
      </Container>
      <Container >
        {/* Mobile View */}
        <Row className=" d-inline-block   d-block d-lg-none ">
          <Col className=" d-block d-lg-none mt-4 mb-5">
            
            <div className=" position-relative d-flex justify-content-center align-items-center mx-auto" style={{height:"350px", width:"350px" }}>
                
                <div className=" contact-medium-img position-absolute  contact-hero-2">
                    <img
                      src={contactmdimg1}
                      alt="contact-img"
                      className="conatiner   img-fluid rounded-circle"
                    />
                </div>
                <div className=" contact-medium-img position-absolute  contact-hero-1 ">
                  <img
                    src={contactmdimg2}
                    alt="contact-img"
                    className="conatiner   img-fluid rounded-circle"
                  />
                </div>
                <div className=" contact-medium-img position-absolute  contact-hero-3 ">
                  <img
                    src={contactmdimg3}
                    alt="contact-img"
                    className="conatiner   img-fluid rounded-circle"
                  />
                </div>
                <div className="  position-absolute  contact-hero-4 " style={{height:'60px', width:"60px"}}>
                  <img
                    src={contactmdimg4}
                    alt="contact-img"
                    className="conatiner   img-fluid rounded-circle"
                  />
                </div>
                <div className=" position-absolute  contact-hero-5 " style={{height:'70px', width:"70px"}}>
                  <img
                    src={contactmdimg5}
                    alt="contact-img"
                    className="conatiner   img-fluid rounded-circle"
                  />
                </div>
                <div className="inner-circle position-absolute   rounded-circle">
                  
                </div>
                <div className="outer-circle position-absolute   rounded-circle">
                  
                </div>
                
                
                <div className="  position-relative " style={{width:"200px", height:"200px"}}>
                  <img
                    src={contactimgmobile}
                    alt="contact-img"
                    className="  img-fluid rounded-circle"
                  />
                 
                </div>
              </div>
          </Col>
          <Col className=" d-block d-lg-none">
            <div className=" container">
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group className="mb-4 " controlId="validationCustom01">
                  <Form.Label className="contact-fs-24-500 black-100 ">
                    Full Name
                  </Form.Label>
                  <Form.Control
                    className="contact-fs-24-400 black-100 input-style "
                    type="text"
                    name="full_name"
                    onChange={handleChange}
                    placeholder="Jane Cooper"
                    value={inputField.full_name}
                  />
                  <p className="text-danger ">{inputErrors.full_name}</p>
                </Form.Group>
                <Form.Group className="mb-4  " controlId="validationCustom02">
                  <Form.Label className="contact-fs-24-500 black-100  ">
                    Email
                  </Form.Label>
                  <Form.Control
                    className="contact-fs-24-400 black-100 input-style"
                    type=""
                    name="email"
                    onChange={handleChange}
                    placeholder="janecooper@gmail.com"
                    value={inputField.email}
                  />
                  <p className="text-danger ">{inputErrors.email}</p>
                </Form.Group>
                <Form.Group className="mb-4 " controlId="validationCustom03">
                  <Form.Label className="contact-fs-24-500 black-100 ">
                    Phone Number
                  </Form.Label>
                  <Form.Control
                    className="contact-fs-24-400 black-100 input-style"
                    type="tel"
                    name="phone"
                    onChange={handleChange}
                    placeholder="+234 812 555 0126"
                    value={inputField.phone}
                  />
                  <p className="text-danger">{inputErrors.phone}</p>
                </Form.Group>

                <Form.Group className="mb-4  " controlId="validationCustom04">
                  <Form.Label className="contact-fs-24-500 black-100 ">
                    Message
                  </Form.Label>
                  <Form.Control
                    className=" contact-fs-24-400 black-100 contact-textarea"
                    as="textarea"
                    style={{ height: "100px" }}
                    name="message"
                    onChange={handleChange}
                    placeholder="Can I take three courses together"
                    value={inputField.message}
                  />
                  <p className="text-danger ">{inputErrors.message}</p>
                </Form.Group>
                <div className="text-center my-5 ">
                  <button
                    className="bg-green-100  contact-send-btn contact-send-btn-text font-weight-semibold white-100 "
                    type="submit"
                  >
                    Send Message
                  </button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>

        {/* Desktop View */}
        <div className="d-none d-lg-block ">
          <Row className=" d-flex justify-content-between  my-3 ">
            <Col className="col-lg-6 pt-4 ">
              <div className=" container">
                <Form noValidate onSubmit={handleSubmit}>
                  <Form.Group className=" mb-4 " controlId="validationCustom01">
                    <Form.Label className="contact-fs-24-500 black-100 ">
                      Full Name
                    </Form.Label>
                    <Form.Control
                      className="contact-fs-24-400 black-100 input-style "
                      type="text"
                      name="full_name"
                      onChange={handleChange}
                      placeholder="Jane Cooper"
                      value={inputField.full_name}
                    />
                    <p className="text-danger ">{inputErrors.full_name}</p>
                  </Form.Group>
                  <Form.Group className="mb-4  " controlId="validationCustom02">
                    <Form.Label className="contact-fs-24-500 black-100  ">
                      Email
                    </Form.Label>
                    <Form.Control
                      className="contact-fs-24-400 black-100 input-style"
                      type=""
                      name="email"
                      onChange={handleChange}
                      placeholder="janecooper@gmail.com"
                      value={inputField.email}
                    />
                    <p className="text-danger ">{inputErrors.email}</p>
                  </Form.Group>
                  <Form.Group className="mb-4 " controlId="validationCustom03">
                    <Form.Label className="contact-fs-24-500 black-100 ">
                      Phone Number
                    </Form.Label>
                    <Form.Control
                      className="contact-fs-24-400 black-100 input-style"
                      type="tel"
                      name="phone"
                      onChange={handleChange}
                      placeholder="+234 812 555 0126"
                      value={inputField.phone}
                    />
                    <p className="text-danger">{inputErrors.phone}</p>
                  </Form.Group>

                  <Form.Group className="mb-4  " controlId="validationCustom04">
                    <Form.Label className="contact-fs-24-500 black-100 ">
                      Message
                    </Form.Label>
                    <Form.Control
                      className=" contact-fs-24-400 black-100 contact-textarea"
                      as="textarea"
                      style={{ height: "100px" }}
                      name="message"
                      onChange={handleChange}
                      placeholder="Can I take three courses together"
                      value={inputField.message}
                    />
                    <p className="text-danger ">{inputErrors.message}</p>
                  </Form.Group>
                  <div className="text-center my-5 ">
                    <button
                      className="bg-green-100  contact-send-btn contact-send-btn-text font-weight-semibold white-100 "
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </Form>
              </div>
            </Col>
            <Col className="col-lg-5 pt-5">
              <div className="position-relative d-flex justify-content-center align-items-center" style={{height:"400px", width:"400px" }}>
                
                <div className=" contact-medium-img position-absolute  contact-hero-2">
                    <img
                      src={contactmdimg1}
                      alt="contact-img"
                      className="conatiner   img-fluid rounded-circle"
                    />
                </div>
                <div className=" contact-medium-img position-absolute  contact-hero-1 ">
                  <img
                    src={contactmdimg2}
                    alt="contact-img"
                    className="conatiner   img-fluid rounded-circle"
                  />
                </div>
                <div className=" contact-medium-img position-absolute  contact-hero-3 ">
                  <img
                    src={contactmdimg3}
                    alt="contact-img"
                    className="conatiner   img-fluid rounded-circle"
                  />
                </div>
                <div className="  position-absolute  contact-hero-4 " style={{height:'70px', width:"70px"}}>
                  <img
                    src={contactmdimg4}
                    alt="contact-img"
                    className="conatiner   img-fluid rounded-circle"
                  />
                </div>
                <div className=" position-absolute  contact-hero-5 " style={{height:'80px', width:"80px"}}>
                  <img
                    src={contactmdimg5}
                    alt="contact-img"
                    className="conatiner   img-fluid rounded-circle"
                  />
                </div>
                <div className="inner-circle position-absolute   rounded-circle">
                  
                </div>
                <div className="outer-circle position-absolute   rounded-circle">
                  
                </div>
                
                
                <div className="  position-relative " style={{width:"270px", height:"270px"}}>
                  <img
                    src={contactimg}
                    alt="contact-img"
                    className="  img-fluid rounded-circle"
                  />
                 
                </div>
              </div>
              
            </Col>
          </Row>
        </div>
      </Container>
    </>
  );
}
export default ContactUsForm;
