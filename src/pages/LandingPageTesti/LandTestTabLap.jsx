import {Col, Carousel,Row, Container} from 'react-bootstrap';
import { useState } from 'react';
import nexticon from '../../Images/landing-card-images/next-icon.svg';
import previousicon from '../../Images/landing-card-images/previous-icon.svg';
import LandMobileCard from './LandMobileCard';
import LandMobileCard2 from './LandMobileCard2';
import LandMobileCard3 from './MobileCard3';

function LandTestTabLap() {
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
        
        
        <section className='d-none d-md-block d-xl-none'>
            <div className="text-center mt-5">
              <p className="fs-3 fw-bold deep-blue-100">What Our Interns Have To Say</p>
            </div>
            <Carousel  activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                className='pb-5  ' 
                variant="dark" 
                interval='10000' 
                slide='false' 
                aria-hidden='false'
            >     
                <Carousel.Item className='ps-5'>
                    <div className='  row d-flex justify-content-around'>
                        <Col className=' col-sm-10 col-md-6 col-lg-4'><LandMobileCard3/></Col>
                        <Col className='  col-sm-10 col-md-6 col-lg-4 '><LandMobileCard2/></Col>
                    </div>
                </Carousel.Item>        
                <Carousel.Item className='ps-5'>
                    <div className=' row d-flex justify-content-evenly '>
                        <Col className='col-10 col-sm-10 col-md-6 col-lg-4 '><LandMobileCard2/></Col>
                        <Col className='col-10 col-sm-10 col-md-6 col-lg-4'><LandMobileCard/></Col>    
                    </div>
                </Carousel.Item>
                <Carousel.Item className='ps-5'>
                    <div className='  row d-flex justify-content-evenly'>
                        <Col className='col-10 col-sm-10 col-md-6 col-lg-4'><LandMobileCard3/></Col>
                        <Col className=' col-10 col-sm-10 col-md-6 col-lg-4 '><LandMobileCard2/></Col>
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

export default LandTestTabLap