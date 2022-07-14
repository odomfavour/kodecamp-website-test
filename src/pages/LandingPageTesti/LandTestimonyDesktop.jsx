import React from 'react'
import LandTestimonyCard from './LandTestimonyCard';
import {Col, Carousel,Row, Container} from 'react-bootstrap';
import { useState } from 'react';
import nexticon from '../../Images/landing-card-images/next-icon.svg';
import previousicon from '../../Images/landing-card-images/previous-icon.svg';
import LandingPageAccordion from './LandingPageAccordion';


function LandTestimonyDesktop() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const onPrevClick = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else if (index === 0) setIndex(0);
  };
  const onNextClick = () => {
    if (index === 2) {
      setIndex(2);
    } else if (index === 0 || index > 0) setIndex(index + 1);

  };

  return (
    <>
        <section>
            <div className='container my-4 py-4'>
                <div className='row d-flex align-items-center'>
                    <Col className="col-lg-6 col-sm-10 my-5">
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
                    <Col className="col-lg-6 col-sm-10">
                        <LandingPageAccordion/>
                    </Col>
                </div>
            </div>
        </section>

        <section>

            <Carousel  activeIndex={index}
                onSelect={handleSelect}
                indicators={false}
                controls={false}
                className='pb-5' 
                variant="dark" 
                interval='10000' 
                slide='false' 
                wrap='false' 
                aria-hidden='false'
            >        
                <Carousel.Item className ='px-5'>
                    <div className=' row d-flex justify-content-evenly '>
                        <Col className='col-sm-6 col-md-6 col-lg-3 '><LandTestimonyCard/></Col>
                        <Col className=' col-sm-6 col-md-6 col-lg-3'><LandTestimonyCard/></Col>
                        <Col className=' col-sm-6 col-md-6 col-lg-3'><LandTestimonyCard/></Col>
                    </div>
                            
                </Carousel.Item>
                <Carousel.Item>
                    <div className=' container-fluid row d-flex justify-content-evenly'>
                        <Col className='col-sm-6 col-md-6 col-lg-3 '><LandTestimonyCard/></Col>
                        <Col className='col-sm-6 col-md-6 col-lg-3'><LandTestimonyCard/></Col>
                        <Col className=' col-sm-6 col-md-6 col-lg-3'><LandTestimonyCard/></Col>
                    </div>
                </Carousel.Item>        
                <Carousel.Item>
                    <div className=' container-fluid row d-flex justify-content-evenly '>
                        <Col className='col-sm-6 col-md-6 col-lg-3 '><LandTestimonyCard/></Col>
                        <Col className='col-sm-6 col-md-6 col-lg-3'><LandTestimonyCard/></Col>
                        <Col className='col-sm-6 col-md-6 col-lg-3'><LandTestimonyCard/></Col>
                    </div>
                </Carousel.Item>                  
            </Carousel>
            <Container>
                <Row className=' '>
                    <Col className='me-auto col-1'>
                        <button aria-disabled="false" className='btn btninactive text-white bg-green-100 ' size="sm" onClick={onPrevClick}>
                            <img src={previousicon} alt="prev-icon" srcset="" />
                        </button>
                    </Col>
                    <Col className='col-1'>
                        <button  className='btn text-white bg-green-100 '  size="sm" onClick={onNextClick}>  
                            <img src={nexticon} alt="next-icon" srcset="" />
                        </button>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default LandTestimonyDesktop