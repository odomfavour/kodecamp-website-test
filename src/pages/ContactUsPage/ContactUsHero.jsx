import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function ContactUsHero() {
  return (
    <>
        <div className=''>
          <div className='container mt-5'>
            <div className=' row justify-content-center align-content-center contact-us-hero-img'>
              
              {/* displays only on mobile and low screen hero image */}
              <div className='col text-center mt-5 d-block d-md-none'>
                <p className='text-white contact-fs-32-500 text-center mt-5'>
                    Our team are available to respond to any 
                    enquires or question you might have.
                    We’ll love to hear from you
                </p>
                <p className='text-white contact-fs-22-600 font-weight-semibold text-center white-100  mt-sm-2'>
                    Get in touch today!
                </p>

              </div>

              {/* displays only on lg and above screen hero image */}
              <div className='col col-md-9 col-xl-9  text-center mt-5  d-none d-md-block '>
                <p className='text-white contact-fs-32-500 text-center mt-4'>
                    Our team are available to respond to any 
                    enquires or question you might have.
                    We’ll love to hear from you, <br></br>Get in touch today!
                </p>

              </div>
              

            </div>

          </div>
        </div>

    </>
  )
}

export default ContactUsHero