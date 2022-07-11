import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
import ContactUsHero from './ContactUsHero';
import ContactUsForm from './ContactUsForm';
import PageWrapper from "../../layout/PageWapper/PageWrapper";
import "./Contact.css";


function ContactUs() {
  return (
    <>
      
      <PageWrapper>
        <div className="container-fluid">
            <ContactUsHero/>
            <ContactUsForm/>

        </div>
 
      </PageWrapper>
        
    </>
  )
}

export default ContactUs