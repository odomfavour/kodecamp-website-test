import "./LandTestimony.css";
function LandingCardAnimation({id, image}) {   
  return (
    <>
        <div className=''>
            <div className=' my-4'>
                <div className=' mb-4' key={id}>
                    <div>
                        <div className='mx-auto  mb-4 'style={{height: '100px', width:'100px'}}>
                            <img src={image} alt="" className='img-fluid rounded-circle'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default LandingCardAnimation