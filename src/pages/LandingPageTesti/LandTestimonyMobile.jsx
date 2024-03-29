import {Col, Carousel, Container} from 'react-bootstrap';
import { useState } from 'react';
import LandingPageAccordSection from './LandingPageAccordSection';
import { getCardData } from './CardData';
import LandTestimonyCard from './LandTestimonyCard';


function LandTestMobile() {
    const testimonials = getCardData();
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    // const onPrevClick = () => {
    //   if (index > 0) {
    //     setIndex(index - 1);
    //   } else if (index === 0) setIndex(0);
    // };
    // const onNextClick = () => {
    //   if (index === 2) {
    //     setIndex(2);
    //   } else if (index === 0 || index > 0) setIndex(index + 1);
    // };
  return (
    <div>
        <section className='d-block'>
            <LandingPageAccordSection/>
        </section>
        <div className=''>
            <hr className='d-none d-md-block d-lg-none' />
        </div>
        <section className='d-block d-md-none'>
            <div className="text-center mt-5 container">
              <p className="fs-mobile-head fw-bold border-bottom deep-blue-100">What Our Interns Have To Say</p>
            </div>
            <Container>
                <Carousel  activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                className='pb-5' 
                variant="dark" 
                interval='10000' 
                slide='false' 
                aria-hidden='false'
            >   
                    {
                        testimonials.map(testimony => (
                                (                    
                                    <Carousel.Item key={testimony.id}>
                                            <div className='row d-flex justify-content-center'>               
                                                    <Col className=' align-self-center text-center '>
                                                        <LandTestimonyCard name={testimony.name} track={testimony.track} description={testimony.description} image={testimony.image} key={testimony.id}/>
                                                    </Col> 
                                            </div>
                                    </Carousel.Item>         
                                )
                        ))
                    }
                 
                </Carousel>
            </Container>

            {/* caurosel buttons */}
            {/* <Container>
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
            </Container> */}
        </section>
    </div>
  )
}

export default LandTestMobile