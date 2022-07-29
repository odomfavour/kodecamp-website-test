import {Card} from 'react-bootstrap';
import "./LandTestimony.css";

function LandTestimonyCard({id, name, track,description,image}) {   
  return (
    <>
        <div className=''>
            <div className=' my-4'>
                <div className='uniform mb-4' key={id}>
                    <div className=' dotted position-relative'>
                        <Card className='   dotted rounded-2 bg-white-100 '>
                            <Card.Body className='text-center container-fluid position-relative'>
                                <div className=' not-dotted '>
                                    <Card className='  position-absolute top-0 start-0 translate-middle rounded-2 bg-white-100 shadow-sm'>
                                        <Card.Body className='text-center'>
                                            <div className=''>
                                                <Card.Text className=''>
                                                    <div className=' mx-auto '>
                                                        <p className='  font-size-sm  light-blue ' style={{height:'160px'}}>
                                                            {description}
                                                        </p>
                                                    </div>
                                                </Card.Text>
                                            </div>
                                            <div>
                                                <div className='testimonial-imag-circle rounded-circle d-inline-block  align-middle overflow-hidden bg-black-100 mb-4 'style={{height: '100px', width:'100px'}}>
                                                    <img src={image} alt=""  className='img-fluid w-100'/>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='fw-bold font-size-sm lh-sm black-100 '>{name}</p>
                                                <p className='landtesti-fs-12  font-size-sm lh-sm fw-bold blue-100'>{track} </p>
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

export default LandTestimonyCard