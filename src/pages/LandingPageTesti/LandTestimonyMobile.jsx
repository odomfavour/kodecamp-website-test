import {Col, Carousel,Row, Container} from 'react-bootstrap';
import { useState } from 'react';
import nexticon from '../../Images/landing-card-images/next-icon.svg';
import previousicon from '../../Images/landing-card-images/previous-icon.svg';
import LandingPageAccordSection from './LandingPageAccordSection';
import LandMobileCard from './LandMobileCard';
import LandMobileCard2 from './LandMobileCard2';
import LandMobileCard3 from './MobileCard3';


function LandTestMobile() {
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
    <div>
        <section className='d-block'>
            <LandingPageAccordSection/>
        </section>
        <div className='container'>
            <hr className='d-none d-md-block d-lg-block' />
        </div>
        <section className='d-block d-xl-none'>
            <div className="text-center">
              <p className="fs-mobile-head fw-bold">What Our Interns Have To Say</p>
            </div>
            <Carousel  activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                className='pb-5 ' 
                variant="dark" 
                interval='10000' 
                slide='false' 
                aria-hidden='false'
            >        
                <Carousel.Item>
                    <div className='  row d-flex justify-content-evenly'>
                        <Col className='col-10 col-sm-10 col-md-6 col-lg-4'><LandMobileCard/></Col>
                        <Col className=' col-10 col-sm-10 col-md-6 col-lg-4 d-none d-lg-block d-xl-none'><LandMobileCard2/></Col>
                    </div>
                </Carousel.Item> 
                <Carousel.Item>
                    <div className='  row d-flex justify-content-evenly'>
                        <Col className='col-10 col-sm-10 col-md-6 col-lg-4'><LandMobileCard3/></Col>
                        <Col className=' col-10 col-sm-10 col-md-6 col-lg-4 d-none d-lg-block d-xl-none'><LandMobileCard2/></Col>
                    </div>
                </Carousel.Item>        
                <Carousel.Item>
                    <div className=' row d-flex justify-content-evenly '>
                        <Col className='col-10 col-sm-10 col-md-6 col-lg-4 '><LandMobileCard2/></Col>
                        <Col className='col-10 col-sm-10 col-md-6 col-lg-4  d-none d-lg-block d-xl-none'><LandMobileCard/></Col>    
                    </div>
                </Carousel.Item>                  
            </Carousel>
            <Container>
                <Row className='container '>
                    <Col className='me-auto  col-1'>
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
    </div>
  )
}

export default LandTestMobile