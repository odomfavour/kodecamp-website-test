import {Card} from 'react-bootstrap';
import "./LandTestimony.css";
import testimg3 from '../../Images/landing-card-images/test-kalisa-img3.jpg';

function LandMobileCard3({id, name, track,description,image}) {
    
  return (
    <>
        <div className=''>
            <div className=' my-4'>
                <div className='uniform mb-4' >
                    <div className=' dotted'>
                        <Card className='  rounded-2 bg-white-100 '>
                            <Card.Body className='text-center container-fluid position-relative'>
                                <div className='not-dotted '>
                                    <Card className=' position-absolute top-0 start-0 translate-middle rounded-2 bg-white-100 shadow-sm'>
                                        <Card.Body className='text-center'>
                                            <div className=''>
                                                <Card.Text className=''>
                                                    <div className=' mx-auto '>
                                                        <p className=' line-height-sm fs-mobile font-size-sm fw-normal light-blue px-2'>
                                                            “At KodeCamp, you gain access relevant and valuable training 
                                                            and mentorship that will propel 
                                                            your tech journey”
                                                        </p>
                                                    </div>
                                                </Card.Text>
                                            </div>
                                            <div>
                                                <div className='testimonial-imag-circle rounded-circle d-inline-block  align-middle overflow-hidden bg-black-100 mb-4 'style={{height: '100px', width:'100px'}}>
                                                    <img src={testimg3} alt=""  className='img-fluid w-100'/>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='fw-bold font-size-sm lh-sm '>KALISA MURANO</p>
                                                <p className='landtesti-fs-12 font-size-sm lh-sm fw-bold blue-100'>Backend Development Intern </p>
                                            </div>
                                        </Card.Body>
                                    </Card>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LandMobileCard3