import {Col} from 'react-bootstrap';
// import { getAccordData } from './CardData';
import LandingPageAccordion from './LandingPageAccordion';

function LandinPageAccordSection() {
    // const accordiondata = getAccordData();
  return (
    <>
        <section>
            <div className='container pb-5'>
                <div className='row d-flex align-items-center'>
                    <Col className="col col-lg-6 col-sm-10">
                        <div>
                            <h5 className='line-height-base fw-bold border-bottom col-8 deep-blue-100'>AVAILABLE TRACKS</h5>
                            <p className='landing-fs-52 font-size-lg line-height-lg fw-bolder deep-blue-100'>
                                <span className='green-100'>Checkout</span>  some of our available tracks 
                            </p>
                            <h4 className='line-height-lg fs-md-4  fw-normal'>
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
                    <Col className="col col-lg-6 col-sm-10 mt-4">
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