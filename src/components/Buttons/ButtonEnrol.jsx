
import "./Button.css";
import { Link } from "react-router-dom";


function ButtonEnrol() {
  return (
    <>
      <div className="d-flex row justify-content-center text-center mt-5 ">
        <div>
          <Link to="/enrol">
            <button
              type="submit"
              className=" button-fs-16s fw-bold fs-5 bg-green-100 enrol-btn white-100"
              size="lg"
            >
              Enrol
            </button>
          
          </Link>
        </div>
      </div>
    </>
  );
}

export default ButtonEnrol;
