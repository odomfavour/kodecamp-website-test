import React from 'react';
import {Card} from 'react-bootstrap';
import figmaicon from '../../Images/explore-image/figma-logo.svg';
import "./LandTestimony.css";

function LandTestimonyCard() {
  return (
    <>
        <div className=''>
            <div className=' my-4'>
                <div className=' mb-4'>
                    <Card className='  rounded-2 bg-white-100 shadow-sm'>
                        <Card.Body className='text-center'>
                            <div className=''>
                                <Card.Text className='px-4'>
                                    <div className=' mx-auto '>
                                        <p className=' line-height-sm font-size-sm fw-normal light-blue'>
                                            “At KodeCamp, you gain access relevant and valuable training 
                                            and mentorship that will propel 
                                            your tech journey”
                                        </p>
                                    </div>
                                </Card.Text>
                            </div>

                            <div>
                                <div className='testimonial-imag-circle rounded-circle d-inline-block  align-middle overflow-hidden bg-black-100 mb-4 'style={{height: '100px', width:'100px'}}>
                                    <img src={figmaicon} alt=""  className='img-fluid w-100'/>
                                </div>
                            </div>
                            <div>
                                <p className='fw-bold font-size-sm lh-sm '>IDRIOUSSO KOMBALO</p>
                                <p className='landtesti-fs-12 font-size-sm lh-sm fw-bold blue-100'>FrontEnd Development Intern </p>
                            </div>
                        </Card.Body>

                    </Card>

                </div>
                {/* <div className=' col mb-4'>
                    <Card className='landing-card-container bg-white-100 shadow-sm'>
                        
                        <Card.Body className='text-center'>
                            <div className=''>
                                <Card.Text className='px-4'>
                                    <div className='col-9 mx-auto '>
                                        <p className='landtesti-fs-16 fw-normal light-blue'>
                                            “At KodeCamp, you gain access relevant and valuable training 
                                            and mentorship that will propel 
                                            your tech journey”
                                        </p>
                                    </div>
                                </Card.Text>
                            </div>

                            <div>
                                <div className='testimonial-imag-circle bg-black-100 mb-3'>
                                    <img src={figmaicon} alt=""  className=''/>

                                </div>
                                <p className='fw-bold landtesti-fs-14'>IDRIOUSSO KOMBALO</p>
                                <p className='landtesti-fs-12 fw-bold blue-100'>FrontEnd Development Intern </p>
                            </div>
                            
                                
                            

                        </Card.Body>

                    </Card>

                </div> */}
            </div>
        </div>
    </>
  )
}

export default LandTestimonyCard