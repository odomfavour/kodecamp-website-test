import "./LandTestimony.css";
import LandTestimonyMobile from './LandTestimonyMobile';
import LandTestimonyTabToDesktop from "./LandTestimonyTabToDesktop";

function LandTestimony() {
  return (
    <>    
          <div className=''>
            <LandTestimonyMobile/>
            <LandTestimonyTabToDesktop/>
          </div>  
    </>
  )
}
export default LandTestimony