import React, { useState } from 'react';
import { useEffect } from 'react';
import {Form,Row, Col, Container} from 'react-bootstrap';
import contactimg from "../../Images/contactus_images/contact-us-image.jpg";
import contactimgmobile from "../../Images/contactus_images/contact-us-image-mobile.jpg"

function ContactUsForm() {
  // const [loading, setLoading] = useState(false);
  const [inputErrors, setInputErrors] = useState({})
  const [isSubmit,setIsSubmit] = useState(false);
  const [inputField , setInputField] = useState({
    full_name: '',
    email: '',
    phone: '',
    message: ''
  })
  const handleChange = (e) =>{
    let value = e.target.value;
    setInputField( {
      ...inputField,[e.target.name]: value
    });
    // console.log(inputField);
  }
  const handleSubmit = (e) =>{
    e.preventDefault();
    setInputErrors(validate(inputField));
    setIsSubmit(true);
  }

  useEffect(() => {
    // console.log(inputErrors);
    if (Object.keys(inputErrors).length === 0 && isSubmit){
      console.log(inputField);
    }
  }, [inputErrors, inputField, isSubmit])

  const validate = (values) =>{
      const errors = {};
      const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
      if(!values.full_name){
        errors.full_name = "Full Name is required"
      }
      if(!values.email){
        errors.email = "Email is required"
      }else if (!regex.test(values.email)){
        errors.email = "This is not a valid email format"
      }
      if(!values.phone){
        errors.phone = "Phone number is required"
      }
      if(!values.message){
        errors.message = "Please input your message"
      }
    
      return errors;
  }
 
  return (
    <>
      <Container className='my-5'>
        <div className='text-center mx-auto contact-fs-32-500 col-lg-9 col-md-11 col fs-sm-5 fs-3  fw-bold'>
          <p className=''>
            Our team are available to respond to any enquires or question you might have. We’ll love to hear from you,
            <br></br>Get in touch today!
          </p>
          
        </div>
      </Container>
      <Container>
        {/* Mobile View */}
        <Row className='  justify-content-center  my-5 container d-block d-lg-none'>
          <Col className='  d-block d-lg-none ' >
              <div className='mt-2 text-center '>
                <img src={contactimgmobile} alt="contact-img"  className=' pb-5 img-fluid  rounded-circle' />
              </div>
          </Col>
          <Col className=''>
            <div className=' container'>
              {Object.keys(inputErrors).length === 0 && isSubmit ? (
              <div className="green-100 fw-semibold mb-3">Request submitted successfully</div>
              ) : (
                <div className="text-danger fw-semibold fs-5 mb-3" ></div>
              )}
            <Form noValidate onSubmit={handleSubmit}>        
              <Form.Group className="mb-4  " controlId="validationCustom01">
                <Form.Label className='contact-fs-24-500 black-100 '>Full Name</Form.Label>
                <Form.Control
                  className="contact-fs-24-400 black-100 input-style "
                  type="text" 
                  name="full_name" 
                  onChange={handleChange} 
                  placeholder="Jane Cooper" 
                  value={inputField.full_name}  
                />
                <p className='text-danger '>{inputErrors.full_name}</p>           
              </Form.Group>
              <Form.Group className="mb-4  " controlId="validationCustom02">
                <Form.Label className='contact-fs-24-500 black-100  '>Email</Form.Label>
                <Form.Control
                  className="contact-fs-24-400 black-100 input-style"
                  type="" 
                  name="email" 
                  onChange={handleChange} 
                  placeholder="janecooper@gmail.com" 
                  value={inputField.email}
                />
                <p className='text-danger '>{inputErrors.email}</p>
              </Form.Group>
              <Form.Group className="mb-4 " controlId="validationCustom03">
                <Form.Label className='contact-fs-24-500 black-100 '>Phone Number</Form.Label>
                <Form.Control
                  className="contact-fs-24-400 black-100 input-style"
                  type="tel"
                  name="phone" 
                  onChange={handleChange} 
                  placeholder="+234 812 555 0126" 
                  value={inputField.phone}
                />
                <p className='text-danger'>{inputErrors.phone}</p>
              </Form.Group>
              
              <Form.Group className="mb-4  "  controlId="validationCustom04" >
                <Form.Label className='contact-fs-24-500 black-100 '>Message</Form.Label>
                <Form.Control
                  className=" contact-fs-24-400 black-100 contact-textarea"
                  as="textarea"
                  style={{ height: '100px' }}
                  name="message"
                  onChange={handleChange}
                  placeholder='Can I take three courses together' 
                  value={inputField.message}
                />
                <p className='text-danger '>{inputErrors.message}</p>
              </Form.Group>
              <div className='text-center my-5 '>
                <button  className='bg-green-100  contact-send-btn contact-send-btn-text font-weight-semibold white-100 '  type="submit">
                  Send Message
                </button>
              </div>
            </Form>
          </div>
          </Col>
        </Row>

        {/* Desktop View */}
        <div className='d-none d-lg-block'>
          <Row className=' d-flex justify-content-between my-5 '>
            
            <Col className='col-lg-6  '>
              <div className=' container'>
                {Object.keys(inputErrors).length === 0 && isSubmit ? (
                <div className="green-100 fw-semibold mb-3"> Request submitted successfully</div>
                ) : (
                  <div className="text-danger fw-semibold fs-5 mb-3" ></div>
                )}
              <Form noValidate onSubmit={handleSubmit}>        
                <Form.Group className="mb-4  " controlId="validationCustom01">
                  <Form.Label className='contact-fs-24-500 black-100 '>Full Name</Form.Label>
                  <Form.Control
                    className="contact-fs-24-400 black-100 input-style "
                    type="text" 
                    name="full_name" 
                    onChange={handleChange} 
                    placeholder="Jane Cooper" 
                    value={inputField.full_name}  
                  />
                  <p className='text-danger '>{inputErrors.full_name}</p>
                              
                </Form.Group>
                <Form.Group className="mb-4  " controlId="validationCustom02">
                  <Form.Label className='contact-fs-24-500 black-100  '>Email</Form.Label>
                  <Form.Control
                    className="contact-fs-24-400 black-100 input-style"
                    type="" 
                    name="email" 
                    onChange={handleChange} 
                    placeholder="janecooper@gmail.com" 
                    value={inputField.email}
                  />
                  <p className='text-danger '>{inputErrors.email}</p>
                </Form.Group>
                <Form.Group className="mb-4 " controlId="validationCustom03">
                  <Form.Label className='contact-fs-24-500 black-100 '>Phone Number</Form.Label>
                  <Form.Control
                    className="contact-fs-24-400 black-100 input-style"
                    type="tel"
                    name="phone" 
                    onChange={handleChange} 
                    placeholder="+234 812 555 0126" 
                    value={inputField.phone}
                  />
                  <p className='text-danger'>{inputErrors.phone}</p>
                </Form.Group>
                
                <Form.Group className="mb-4  "  controlId="validationCustom04" >
                  <Form.Label className='contact-fs-24-500 black-100 '>Message</Form.Label>
                  <Form.Control
                    className=" contact-fs-24-400 black-100 contact-textarea"
                    as="textarea"
                    style={{ height: '100px' }}
                    name="message"
                    onChange={handleChange}
                    placeholder='Can I take three courses together' 
                    value={inputField.message}
                  />
                  <p className='text-danger '>{inputErrors.message}</p>
                </Form.Group>
                <div className='text-center my-5 '>
                  <button  className='bg-green-100  contact-send-btn contact-send-btn-text font-weight-semibold white-100 '  type="submit">
                    Send Message
                  </button>
                </div>
              </Form>
            </div>
            </Col>
            <Col className='col-lg-5  ' >
                <div className=' pt-4 '>
                  <img src={contactimg} alt="contact-img"  className='conatiner pb-5 img-fluid rounded-circle' />
                </div>
            </Col>
          </Row>
        </div>
      </Container>
    </>
  )
}
export default ContactUsForm