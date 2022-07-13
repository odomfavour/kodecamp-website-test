import "./Button.css";

function ButtonEnrol() {
  return (
    <>
        <div className='d-flex row justify-content-center text-center mt-5 '>
            <div>
                <button type="submit" className=' button-fs-16s fw-bold  bg-green-100 enrol-btn white-100' size="lg">Enroll</button>
            </div>
        </div>
    </>
  )
}

export default ButtonEnrol