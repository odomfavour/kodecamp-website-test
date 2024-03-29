import {Card} from 'react-bootstrap';
import "./LandTestimony.css";

function LandTestimonyCard({id, name, track,description,image}) {   
  return (
    <>
        <div className='check'>
            <div className=' my-4'>
                <div className='uniform mb-4' key={id}>
                    <div className='one dotted position-relative'>
                        <Card className='two dotted  rounded-2  ' style={{width:'20px'}}>
                            <Card.Body className='three text-center container-fluid position-relative'>
                                <div className='four not-dotted '>
                                    <Card className=' five position-absolute top-0 start-0 translate-middle rounded-2 bg-white-100 shadow-sm'>
                                        <Card.Body className='six text-center'>
                                            <div className=''>
                                                <Card.Text className=''>
                                                    <div className=' mx-auto '>
                                                        <p className='  testimony-fs-description light-blue ' >
                                                            {description}
                                                        </p>
                                                    </div>
                                                </Card.Text>
                                            </div>
                                            <div>
                                                <div className='testimonial-imag-circle rounded-circle d-inline-block  align-middle overflow-hidden bg-black-100 mb-4 testimonial-img'>
                                                    <img src={image} alt=""  className='img-fluid '/>
                                                </div>
                                            </div>
                                            <div>
                                                <p className='fw-bold track-lh black-100 testimony-fs-name '>{name}</p>
                                                <p className='testimony-fs-name track-lh fw-bold blue-100 mt-0'>{track} </p>
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