import {Col} from 'react-bootstrap';
import LandingPageAccordion from './LandingPageAccordion';
import { Link } from "react-router-dom";

function LandinPageAccordSection() {
  return (
    <>
        <section className='section-padding' >
            <div className='container '>
                <div className='row d-flex align-items-center justify-content-center '>
                    <Col className="col-10 col-lg-6 ">
                        <div>
                            <h5 className='fs-6 mb-2 border-bottom line-height-base text-center fw-bold border-sm-bottom border-lg-bottom col-lg-8 col-md-10 col deep-blue-100 d-block d-md-none '>AVAILABLE TRACKS</h5>
                            <h5 className=' land-avail d-none d-lg-block  deep-blue-100 fs-4 fw-bold '>AVAILABLE TRACKS</h5>
                            <h5 className=' land-avail d-none d-md-block d-lg-none  text-center deep-blue-100 fs-4 fw-bold '>AVAILABLE TRACKS</h5>
                            <h1 className=' d-none d-lg-block display-5  deep-blue-100' style={{fontWeight: "800"}}  >
                                <span className='green-100'>Checkout</span>  some <br /> of our available <br /> tracks 
                            </h1>
                            <h1 className=' d-block d-lg-none display-5 text-center  deep-blue-100' style={{fontWeight: "800"}}  >
                                <span className='green-100'>Checkout</span>  some of our available tracks 
                            </h1>
                            <h5 className='d-none d-lg-block deep-blue-100 lh-base'>
                                With so much to learn from enroling in 
                                KodeCamp, these are some of the tracks
                                available to our interns. To browse through 
                                our list of courses, check out the
                                <Link to="/explore">
                                    <h5 className='lh-base mt-1'>Explore Section</h5>
                                </Link>
                            </h5>
                            <h6 className='d-block d-lg-none text-center deep-blue-100 lh-base'>
                                With so much to learn from enroling in 
                                KodeCamp, these are some of the tracks
                                available to our interns. To browse through 
                                our list of courses, check out the
                                <Link to="/explore">
                                    <h6 className='lh-base  mt-1'>Explore Section</h6>
                                </Link>
                            </h6> 
                        </div>
                    </Col>
                    <Col className="col  col-lg-6 mt-4">
                        <LandingPageAccordion/>
                    </Col>
                </div>
            </div>
        </section>
        <div className=''>
            <hr className='d-none  d-lg-block' />
        </div>
    </>
  )
}

export default LandinPageAccordSection