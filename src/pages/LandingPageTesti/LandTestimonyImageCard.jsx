import "./LandTestimony.css";

function LandTestimonyImageCard({id, image}) {   
  return (
    <>
        <div className="now">
            <div key={id} className='not-dotted'>
                <div className='testimonial-imag-circle rounded-circle d-inline-block  align-middle overflow-hidden bg-black-100  testimonial-img'>
                    <img src={image} alt=""  className='img-fluid '/>
                </div>
            </div>
        </div>
    </>
  )
}

export default LandTestimonyImageCard