import React from 'react';
import {Card} from 'react-bootstrap';
import figmaicon from '../../Images/explore-image/figma-logo.svg';


function ExploreCard() {
  return (
    <>
        <div className=''>
            <div className='mb-3'>
                <div className=' col-sm-12 col-md-6 col-lg-4 col-xl-4 mb-4'>
                    <Card className='explore-card-container h-100 bg-white-100  '>

                        <div className=' explore-card-bg text-white  '>
                            <div className='px-3 py-3 h-100 d-flex flex-column justify-content-start'>
                                <div className='mb-auto'>
                                    <p className='explore-fs-20-600 d-flex fw-semibold white-100' >Product Design</p>
                                </div>
                                <div className='text-start'>
                                    <img src={figmaicon} alt="tool icon" />
                                </div>
                            </div>       
                        </div>
                        <Card.Body className=''>
                            
                            
                            <Card.Title className="col-md-5 ">
                                <p className="explore-fs-20-600 d-flex fw-semibold deep-blue-100">Figma</p>
                            </Card.Title>
                            
                            <div className=''>
                                <Card.Text className='explore-fs-14-500 deep-blue-100 text-start'>
                                    This track is designed to help you materialize your
                                    game-changing idea and transform it into a product using Figma
                                </Card.Text>
                            </div>

                        </Card.Body>

                    </Card>

                </div>
            </div>
        </div>
    </>
  )
}

export default ExploreCard