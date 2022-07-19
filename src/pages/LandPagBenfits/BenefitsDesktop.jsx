import {Card, Row, Col} from 'react-bootstrap';
// import { getBenefitCardData } from './BenefitCardData';
import benefit1 from '../../Images/landing-card-images/benefits-1.svg';
import benefit2 from '../../Images/landing-card-images/benefits-2.svg';
import benefit3 from '../../Images/landing-card-images/benefits-3.svg';

function BenefitsDesktop() {
// const benefits = getBenefitCardData();
  return (
    <>
        <section >
            <div className='container'>
                <hr className='d-none d-lg-block' />
            </div>
            
            <div className='container d-none d-lg-block my-5'>
                <div className='text-center d-none d-md-block'>
                    <p className='fs-3 fw-bold deep-blue-100'>BENEFITS OF JOINING KODECAMP INTERNSHIP</p>
                </div>
                <Row className='d-flex justify-content-around'>
                    <Col className='col-md-5 col-lg-3'>
                        <Card style={{ width: '280px',boxShadow:'3.10185px 3.10185px 1.55093px 1.55093px rgba(0, 0, 0, 0.25)' }} className="border-rounded bg-deep-blue-100 white-100 text-center pt-4 pb-2">
                            <div className='text-center '>
                                <img src={benefit1} alt="" className='img-fluid'/>
                            </div>
                            <Card.Body>
                                <Card.Title className='fs-5 fw-bold'>LEARN FROM EXPERT</Card.Title>
                                <Card.Text className='fs-6 mx-2'>
                                    At KodeCamp, you gain access relevant and valuable training 
                                    and mentorship that will propel your tech journey
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='col-md-5 col-lg-3'>
                        <Card style={{ width: '280px', boxShadow:'3.10185px 3.10185px 1.55093px 1.55093px rgba(0, 0, 0, 0.25)' }} className="border-rounded bg-deep-blue-100 white-100 text-center pt-4 pb-2">
                            <div className='text-center '>
                                <img src={benefit2} alt="" className=' img-fluid'/>
                            </div>
                            <Card.Body>
                                <Card.Title className='fs-5 fw-bold'>WHAT WE OFFER</Card.Title>
                                <Card.Text className='fs-6 mx-2'>
                                    At KodeCamp, you gain access relevant and valuable training 
                                    and mentorship that will propel your tech journey
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className='d-none d-lg-block col-md-5 col-lg-3'>
                        <Card style={{ width: '280px', boxShadow:'3.10185px 3.10185px 1.55093px 1.55093px rgba(0, 0, 0, 0.25)' }} className="border-rounded bg-deep-blue-100 white-100 text-center  pt-4 pb-2">
                            <div className='text-center '>
                                <img src={benefit3} alt="" className='img-fluid'/>
                            </div>
                            <Card.Body>
                                <Card.Title className='fs-5 fw-bold'>GET A CERTIFICATE</Card.Title>
                                <Card.Text className='fs-6 mx-2'>
                                    At KodeCamp, you gain access relevant and valuable training 
                                    and mentorship that will propel your tech journey
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    
                    </Col>
                </Row>
            </div>
            <div className='container d-none d-lg-block'>
                <Row className='d-flex justify-content-around'>
                    <Col className='col-md-5 col-lg-3'>
                        <div className='text-center'>
                            <p className='green-100 fs-2 fw-bold mb-0'>10,000</p>
                            <p className='px-5 mx-3 mx-xl-5 fs-6 fw-semibold'>interns per cohort</p>
                        </div>
                    </Col>
                    <Col className='col-md-5 col-lg-3'>
                        <div className='text-center'>
                            <p className='green-100 fs-2 fw-bold mb-0'>38+</p>
                            <p className='px-xl-5 mx-xl-3 px-md-3 px-5 mx-lg-2  mx-5 fs-6 fw-semibold'>Expert mentors to guide you</p>
                        </div>
                    </Col>
                    <Col className='col-md-5 col-lg-3 d-none d-lg-block'>
                        <div className='text-center'>
                            <p className='green-100 fs-2 fw-bold mb-0'>78%</p>
                            <p className='px-xl-5 px-3 fs-6 fw-semibold'>Employment/placement rate after completion</p>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className='container'>
                <hr className='d-none d-md-block d-lg-block' />
            </div>
        </section>
    
    </>
  );
}

export default BenefitsDesktop;