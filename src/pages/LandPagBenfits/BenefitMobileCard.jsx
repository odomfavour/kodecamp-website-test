import { Card } from "react-bootstrap";
import "./Benefit.css"
function BenefitMobileCard({title, image, description, id}) {

  return (
    <>
            <div className="benefit container text-center"> 
              <Card  className=" col-md-8 col-sm-10 mx-auto border-rounded bg-deep-blue-100 white-100 shadow-md pt-4 pb-2">
                  <div className='text-center '>
                      <img src={image} alt="" className='img-fluid'/>
                  </div>
                  <Card.Body> 
                      <Card.Title className='fs-5 fw-bold'>{title}</Card.Title>
                      <Card.Text className='fs-6 px-3'>
                          {description}
                      </Card.Text>
                  </Card.Body>
              </Card>
            </div>
    </>
  )
}

export default BenefitMobileCard