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
  const handleSubmit = event => {
    event.preventDefault();
    console.log(inputField);
  //  setLoading(true);

<<<<<<< HEAD
   setTimeout(() => {
    //  setLoading(false);
   }, 3000)
=======
  //  setTimeout(() => {
  //    setLoading(false);
  //  }, 3000)
>>>>>>> 7911877cae6a787eca11560eea601bd89844cb04
  }

  return (
    <>
      <div className='my-5 container'>
        {/* {loading &&
          <div>Sending Message...</div>
        } */}
<<<<<<< HEAD
        <Form onSubmit={handleSubmit}>        
=======
        <Form onSubmit={handleSubmit}>          
>>>>>>> 7911877cae6a787eca11560eea601bd89844cb04
          <Form.Group className="mb-4 mb-xl-5 col-lg-6 col input-style" controlId="formBasicFullName">
            <Form.Label className='contact-fs-24-500 black-100 '>Full Name</Form.Label>
            <Form.Control
              className="contact-fs-24-400 black-100 "
              size="lg"
              type="text" 
              name="full_name" 
              onChange={handleChange} 
              placeholder="Jane Cooper" 
              value={inputField.full_name}
<<<<<<< HEAD
            />      
          </Form.Group>
=======
            />
          </Form.Group>

>>>>>>> 7911877cae6a787eca11560eea601bd89844cb04
          <Form.Group className="mb-4 mb-xl-5 col-lg-6 col input-style" controlId="formBasicEmail">
            <Form.Label className='contact-fs-24-500 black-100  '>Email</Form.Label>
            <Form.Control
              size="lg"
              className="contact-fs-24-400 black-100"
              type="email" 
              name="email" 
              onChange={handleChange} 
              placeholder="janecooper@gmail.com" 
              value={inputField.email}
            />
          </Form.Group>
          <Form.Group className="mb-4 col-lg-6 col input-style" controlId="formBasicPhone">
            <Form.Label className='contact-fs-24-500 black-100 '>Phone Number</Form.Label>
            <Form.Control
              size="lg"
              className="contact-fs-24-400 black-100"
              type="tel"
              name="phone" 
              onChange={handleChange} 
              placeholder="+234 812 555 0126" 
              value={inputField.phone}
            />
          </Form.Group>
          
          <Form.Group className="mb-4 col-lg-10 col "  controlId="formBasicMessage">
            <Form.Label className='contact-fs-24-500 black-100 '>Message</Form.Label>
            <Form.Control
              size="lg"
              className=" contact-fs-24-400 black-100 contact-textarea"
              as="textarea"
              name="message"
              onChange={handleChange}
              placeholder='Can I take three courses together' 
              value={inputField.message}
            />
          </Form.Group>
          <div className='text-center my-5 '>
            <button className='bg-green-100  contact-send-btn contact-send-btn-text font-weight-semibold white-100 '  type="submit">
              Send Message
            </button>
          </div>
        </Form>
      </div>
    </>
  )
}
export default ContactUsForm