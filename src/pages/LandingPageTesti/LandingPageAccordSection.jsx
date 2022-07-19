import {Col} from 'react-bootstrap';
// import { getAccordData } from './CardData';
import LandingPageAccordion from './LandingPageAccordion';
import { Link } from "react-router-dom";

function LandinPageAccordSection() {
    // const accordiondata = getAccordData();
  return (
    <>
        <section>
            <div className='container pb-5'>
                <div className='row d-flex align-items-center'>
                    <Col className="col-sm-10 col-md-12  col-lg-6 ">
                        <div>
                            <h5 className='fs-6 mb-2 border-bottom land-avail line-height-base text-sm-center  text-lg-start fw-bold border-sm-bottom border-lg-bottom col-lg-8 col-md-10 col deep-blue-100 d-block d-md-none '>AVAILABLE TRACKS</h5>
                            <h5 className=' land-avail d-none d-md-block  deep-blue-100 fs-4 fw-bold '>AVAILABLE TRACKS</h5>
                            <h1 className='landing-fs-52  deep-blue-100' style={{fontWeight: "800"}}  >
                                <span className='green-100'>Checkout</span>  some of our available tracks 
                            </h1>
                            <h4 className='d-none d-sm-block  line-height-lg fs-4 fw-normal'>
                                With so much to learn from enroling in 
                                KodeCamp, these are some of the tracks
                                available to our interns. To browse through 
                                our list of courses, check out the
                                <Link to="/explore">
                                    <h4 className='line-height-lg fw-normal mt-2'>Explore Section</h4>
                                </Link>

                            </h4>
                            <h4 className='d-block d-sm-none text-center line-height-lg fs-5 fw-normal'>
                                With so much to learn from enroling in 
                                KodeCamp, these are some of the tracks
                                available to our interns. To browse through 
                                our list of courses, check out the
                                <Link to="/explore">
                                    <h4 className='line-height-lg fw-normal fs-5 mt-2'>Explore Section</h4>
                                </Link>

                            </h4> 
                        </div>
                    </Col>
                    <Col className="col-sm-10 col-md-12 col-lg-6 mt-4">
                        {/* {
                                accordiondata.map(accdata => (
                                    (               
                                        <LandingPageAccordion desc={accdata.desc} category={accdata.category}  key={accdata.id}/>          
                                    )
                                ))
                        } */}
                        <LandingPageAccordion/>
                    </Col>
                </div>
            </div>
        </section>
    </>
  )
}

export default LandinPageAccordSection