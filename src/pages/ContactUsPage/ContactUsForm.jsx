import React, { useState } from 'react';
import { useEffect } from 'react';
import {Form} from 'react-bootstrap';

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
      <div className='my-5 container'>
          {Object.keys(inputErrors).length === 0 && isSubmit ? (
          <div className="green-100 fw-semibold mb-3">Signed in successfully</div>
          ) : (
            <div className="text-danger fw-semibold fs-5 mb-3" ></div>
          )}
        <Form noValidate onSubmit={handleSubmit}>        
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
              
            />
            <p className='text-danger fw-semibold'>{inputErrors.full_name}</p>
            
          </Form.Group>
          <Form.Group className="mb-4  col-lg-6 col" controlId="validationCustom02">
            <Form.Label className='contact-fs-24-500 black-100  '>Email</Form.Label>
            <Form.Control
              size=""
              className="contact-fs-24-400 black-100 input-style"
              type="" 
              name="email" 
              onChange={handleChange} 
              placeholder="janecooper@gmail.com" 
              value={inputField.email}
              
            />
            <p className='text-danger fw-semibold'>{inputErrors.email}</p>
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
              
            />
            <p className='text-danger fw-semibold'>{inputErrors.phone}</p>
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
              
            />
            <p className='text-danger fw-semibold '>{inputErrors.message}</p>
          </Form.Group>
          <div className='text-center my-5 '>
            <button  className='bg-green-100  contact-send-btn contact-send-btn-text font-weight-semibold white-100 '  type="submit">
              Send Message
            </button>
          </div>
        </Form>
      </div>
    </>
  )
}
export default ContactUsForm