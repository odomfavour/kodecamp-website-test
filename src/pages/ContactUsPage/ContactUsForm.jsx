import React, { useState } from 'react';
import {Form} from 'react-bootstrap';

function ContactUsForm() {
  // const [loading, setLoading] = useState(false);
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
    })
  }

  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
    console.log(inputField);
  };
  
 

  return (
    <>
      <div className='my-5 container'>
        {/* {loading &&
          <div>Sending Message...</div>
        } */}
        <Form noValidate validated={validated}  onSubmit={handleSubmit}>        
          <Form.Group className="mb-4 col-lg-6 col " controlId="validationCustom01">
            <Form.Label className='contact-fs-24-500 black-100 '>Full Name</Form.Label>
            <Form.Control
              className="contact-fs-24-400 black-100 input-style "
              size=""
              type="text" 
              name="full_name" 
              onChange={handleChange} 
              placeholder="Jane Cooper" 
              value={inputField.full_name}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please input your name
            </Form.Control.Feedback>
            
          </Form.Group>
          <Form.Group className="mb-4  col-lg-6 col" controlId="validationCustom02">
            <Form.Label className='contact-fs-24-500 black-100  '>Email</Form.Label>
            <Form.Control
              size=""
              className="contact-fs-24-400 black-100 input-style"
              type="email" 
              name="email" 
              onChange={handleChange} 
              placeholder="janecooper@gmail.com" 
              value={inputField.email}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please a valid email address e.g (kodecamp@gmail.com)
            </Form.Control.Feedback> 
          </Form.Group>
          <Form.Group className="mb-4 col-lg-6 col" controlId="validationCustom03">
            <Form.Label className='contact-fs-24-500 black-100 '>Phone Number</Form.Label>
            <Form.Control
              size=""
              className="contact-fs-24-400 black-100 input-style"
              type="tel"
              name="phone" 
              onChange={handleChange} 
              placeholder="+234 812 555 0126" 
              value={inputField.phone}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
          </Form.Control.Feedback>
          </Form.Group>
          
          <Form.Group className="mb-4 col-lg-10 col "  controlId="validationCustom04" >
            <Form.Label className='contact-fs-24-500 black-100 '>Message</Form.Label>
            <Form.Control
              size=""
              className=" contact-fs-24-400 black-100 contact-textarea"
              as="textarea"
              style={{ height: '100px' }}
              name="message"
              onChange={handleChange}
              placeholder='Can I take three courses together' 
              value={inputField.message}
              required
            />
            <Form.Control.Feedback type="invalid">
              Please provide a valid zip.
            </Form.Control.Feedback>
          </Form.Group>
          <div className='text-center my-5 '>
            <button onSubmit={handleSubmit} className='bg-green-100  contact-send-btn contact-send-btn-text font-weight-semibold white-100 '  type="submit">
              Send Message
            </button>
          </div>
        </Form>
      </div>
    </>
  )
}
export default ContactUsForm