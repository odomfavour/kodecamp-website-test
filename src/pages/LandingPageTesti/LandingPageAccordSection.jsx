import {Col} from 'react-bootstrap';
// import { getAccordData } from './CardData';
import LandingPageAccordion from './LandingPageAccordion';

function LandinPageAccordSection() {
    // const accordiondata = getAccordData();
  return (
    <>
        <section>
            <div className='container my-4 py-4'>
                <div className='row d-flex align-items-center'>
                    <Col className="col col-lg-6 col-sm-10 my-5">
                        <div>
                            <h5 className='line-height-base fw-bold'>AVAILABLE TRACKS</h5>
                            <p className='landing-fs-52 font-size-lg line-height-lg fw-bolder black-100'>
                                <span className='green-100'>Checkout</span>  some of our available tracks 
                            </p>
                            <h4 className='line-height-lg  fw-normal'>
                                With so much to learn from enroling in 
                                KodeCamp, these are some of the tracks
                                available to our interns. To browse through 
                                our list of courses, check out the
                                <a href="/">
                                    <h4 className='line-height-lg fw-normal'>Explore Section</h4>
                                </a>
                            </h4>  
                        </div>
                    </Col>
                    <Col className="col col-lg-6 col-sm-10">
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