import React from 'react'
import "./Howitworks.css"
import image1 from "../../Images/Howitworks/image1.jpg"
import image2 from "../../Images/Howitworks/image2.jpg"
import image3 from "../../Images/Howitworks/image3.jpg"
import { Container , Row , Col} from "react-bootstrap";
const Howitworks = () => {

    return (
                <Container className="py-3 mb-2" >
                    <h2 className = "text-center deep-blue-100 fw-semibold mt-5">How it works</h2>
                    <Row className="py-2 py-lg-5 d-flex flex-column align-items-center justify-content-center gap-3 flex-lg-row justify-content-lg-around">
                        <Col className = "col-6 col-lg-3 ">
                        <img src={image1} className="img-fluid" alt="" />
                        </Col>
                        <Col className="text-center py-2 col-11 col-lg-6 text-lg-start">
                        <div>
                        <h3 className='fw-semibold mb-2 deep-blue-100 steps'>Step 1: Explore our list of courses</h3>
                        <p className="text-muted steps-desc">Simply go to the explore section or
                        use the search feature to check out
                        course(s) that might interest you!
                        </p> 
                        </div>
                        </Col>
                    </Row>
                    <Row className="py-2 py-lg-5 d-flex flex-column align-items-center justify-content-center gap-3 flex-lg-row justify-content-lg-around flex-lg-row-reverse ">
                        <Col className = "col-6 col-lg-3 ">
                        <img src={image2} className="img-fluid" alt="" />
                        </Col>
                        <Col className="text-center py-2 col-11 col-lg-6 text-lg-start">
                        <div>
                        <h3 className='fw-semibold mb-2 deep-blue-100 steps'> Step 2: Choose your desired course</h3>
                        <p className="text-muted steps-desc">   
                    Check out the courses and make
                    a choice on which best suits you!
                   
                        </p> 
                        </div>
                        </Col>
                    </Row>
                    <Row className="py-2 py-lg-5 d-flex flex-column align-items-center justify-content-center gap-3 flex-lg-row justify-content-lg-around">
                        <Col className = "col-6 col-lg-3 ">
                        <img src={image3} className="img-fluid" alt="" />
                        </Col>
                        <Col className="text-center py-2 col-11 col-lg-6 text-lg-start">
                        <div>
                        <h3 className='fw-semibold mb-2 deep-blue-100 steps'>Step 3: Apply!</h3>
                        <p className="text-muted steps-desc">Apply and join the link to your track
                    and be among fellow interns, learn 
                    and socialize together
                        </p> 
                        </div>
                        </Col>
                    </Row>  
                    <hr />
                </Container>     
    )
}

export default Howitworks
