import React from 'react';
import {Carousel} from 'react-bootstrap';
import ExploreCard from './ExploreCard';

function ExploreMobile() {
  return (
    <>
        <div className='d-block d-sm-none'>
                <div className='mt-3 ms-2 container'>
                    <div className='container'>
                        <p className='explore-fs-24-700 fw-bold deep-blue-100'>Product Design</p>

                    </div>
                </div>
                <Carousel  className='' variant="dark" interval='1000' slide='false' wrap='false' controls='false' indicators='false' aria-hidden='false'  >
                    
                    <Carousel.Item className =''>
                        <div className='text-center container d-flex justify-content-center'>
                            <ExploreCard/>
        
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='text-center container d-flex justify-content-center'>
                            <ExploreCard/>
        
                        </div>
                    </Carousel.Item>
                    <Carousel.Item>
                        <div className='text-center container d-flex justify-content-center'>
                            <ExploreCard/>
        
                        </div>
                    </Carousel.Item>
                        
                            
                </Carousel>
        </div>
    
    </>
  )
}

export default ExploreMobile