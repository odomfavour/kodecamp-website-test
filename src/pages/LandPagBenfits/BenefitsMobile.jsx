import { useState } from 'react';
import {Carousel} from 'react-bootstrap';
import { getBenefitCardData } from './BenefitCardData';
import BenefitMobileCard from './BenefitMobileCard';

function BenefitsMobile() {
    const benefits = getBenefitCardData();
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };    
  return (
    <>
        <section >
            <div className='container d-block d-lg-none my-5'>
                <div className='text-center d-block d-md-none'>
                    <p className='fs-6 fw-bold deep-blue-100 mb-0'>BENEFITS OF JOINING KODECAMP INTERNSHIP</p>
                </div>
                <div className='text-center d-none d-md-block d-lg-none'>
                    <p className='fs-3 fw-bold deep-blue-100'>BENEFITS OF JOINING KODECAMP INTERNSHIP</p>
                </div>
                <div className='container d-block d-md-none'>
                    <hr className=' ' />
                </div>
                <Carousel  activeIndex={index}
                onSelect={handleSelect}
                controls={false}
                className='pb-5 py-4 ' 
                variant="dark" 
                interval='10000' 
                slide='false' 
                aria-hidden='false'
                >   
                    {
                        benefits.map(bene => (
                                (
                                    
                                    <Carousel.Item key={bene.id} className="">
                                            <div className='  row d-flex justify-content-center'>
                                                
                                                    <BenefitMobileCard title={bene.title} image={bene.image} description={bene.description} key={bene.id}/>
                                                
                                            </div>
                                    </Carousel.Item>         
                                )
                        ))
                    } 
                </Carousel>
            </div>    
        </section>
    
    </>
  );
}

export default BenefitsMobile;