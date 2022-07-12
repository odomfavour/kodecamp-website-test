import {Carousel} from 'react-bootstrap';
import ExploreCard from './ExploreCard';

function ExploreMobile() {
  return (
    <>
        <div className='d-block d-sm-none '>
                {/* front end development track */}
                <section className='mt-4'>
                    <div className='pt-4 ms-2 container'>
                        <div className='container'>
                            <p className='explore-fs-24-700 fw-bold deep-blue-100'>FrontEnd Development</p>
                        </div>
                    </div>
                    <Carousel  className='pb-4' variant="dark" interval='10000' slide='false' wrap='false' controls='false' indicators='false' aria-hidden='false'>        
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
                </section>
                {/* back end development track */}
                <section className='mt-4'>
                    <div className='pt-4 ms-2 container'>
                        <div className='container'>
                            <p className='explore-fs-24-700 fw-bold deep-blue-100'>BackEnd Development</p>
                        </div>
                    </div>
                    <Carousel  className='pb-4' variant="dark" interval='10000' slide='false' wrap='false' controls='false' indicators='false' aria-hidden='false'  >
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
                </section>
                {/* andriod development track */}
                <section className='mt-4'>
                    <div className='pt-4 ms-2 container'>
                        <div className='container'>
                            <p className='explore-fs-24-700 fw-bold deep-blue-100'>Andriod Development</p>
                        </div>
                    </div>
                    <Carousel  className='pb-4' variant="dark" interval='10000' slide='false' wrap='false' controls='false' indicators='false' aria-hidden='false'  >
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
                    </Carousel>
                </section>
                {/* project management track */}
                <section className='mt-4'>
                    <div className='pt-4 ms-2 container'>
                        <div className='container'>
                            <p className='explore-fs-24-700 fw-bold deep-blue-100'>Project Management</p>
                        </div>
                    </div>
                    <Carousel  className='pb-4' variant="dark" interval='10000' slide='false' wrap='false' controls='false' indicators='false' aria-hidden='false'  >          
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
                </section>
                {/* newly added tracks */}
                <section className='mt-4'>
                    <div className='pt-4 ms-2 container'>
                        <div className='container'>
                            <p className='explore-fs-24-700 fw-bold deep-blue-100'>Newly Added</p>
                        </div>
                    </div>
                    <Carousel  className='pb-4' variant="dark" interval='10000' slide='false' wrap='false' controls='false' indicators='false' aria-hidden='false'  >
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
                </section>
                {/* back end development track */}
                <section className='mt-4'>
                    <div className='pt-4 ms-2 container'>
                        <div className='container'>
                            <p className='explore-fs-24-700 fw-bold deep-blue-100'>Product Design</p>
                        </div>
                    </div>
                    <Carousel  className='pb-4' variant="dark" interval='10000' slide='false' wrap='false' controls='false' indicators='false' aria-hidden='false'  >
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
                    </Carousel>
                </section>
        </div>
    </>
  )
}

export default ExploreMobile