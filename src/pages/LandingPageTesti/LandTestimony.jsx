import "./LandTestimony.css";
import LandTestimonyDesktop from './LandTestimonyDesktop';
import LandTestimonyMobile from './LandTestimonyMobile';
import LandTestTabLap from "./LandTestTabLap";

function LandTestimony() {
  return (
    <>
        
          <div className='container-fluid my-5'>
            
            <LandTestimonyMobile/>
            <LandTestTabLap/>
            <LandTestimonyDesktop/>

          </div>
        
    </>
  )
}

export default LandTestimony