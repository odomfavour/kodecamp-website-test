import LandTestimonyCard from './LandTestimonyCard';
import {Col, Carousel,Row, Container} from 'react-bootstrap';
import { useState } from 'react';
import nexticon from '../../Images/landing-card-images/next-icon.svg';
import previousicon from '../../Images/landing-card-images/previous-icon.svg';
import { getCardData } from './CardData';

function LandTestimonyDesktop() {
    const testimonials = getCardData();
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
        <section className='d-none d-xl-block'>
            <div className="text-center mt-5">
              <p className=" fs-3 fw-bold">What Our Interns Have To Say</p>
            </div>
            <Carousel  activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                className='pb-5 ' 
                variant="dark" 
                interval='10000'
                slide='false' 
                wrap='false' 
                aria-hidden='false'
            >        
                <Carousel.Item className =''>
                    <div className=' container-fluid row d-flex justify-content-evenly'>
                
                            {
                                testimonials.map(testimony => (
                                    (
                                        <Col className='col-sm-6 col-md-6 col-lg-3'>
                                            <LandTestimonyCard name={testimony.name} track={testimony.track} description={testimony.description} image={testimony.image} key={testimony.id}/>
                                        </Col>        
                                    )
                                ))
                            }
                    
                    </div>
                            
                </Carousel.Item>
                <Carousel.Item>
                    <div className=' container-fluid row d-flex justify-content-evenly'>
                            {
                                testimonials.map(testimony => (
                                    (
                                        <Col className='col-sm-6 col-md-6 col-lg-3'>
                                            <LandTestimonyCard name={testimony.name} track={testimony.track} description={testimony.description} image={testimony.image} key={testimony.id}/>
                                        </Col>        
                                    )
                                ))
                            }
                    </div>
                </Carousel.Item>        
                <Carousel.Item>
                    <div className=' container-fluid row d-flex justify-content-evenly'>
                            {
                                testimonials.map(testimony => (
                                    (
                                        <Col className='col-sm-6 col-md-6 col-lg-3'>
                                            <LandTestimonyCard name={testimony.name} track={testimony.track} description={testimony.description} image={testimony.image} key={testimony.id} />
                                        </Col>        
                                    )
                                ))
                            }
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