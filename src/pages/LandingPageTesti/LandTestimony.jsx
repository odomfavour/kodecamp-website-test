import "./LandTestimony.css";
import PageWrapper from '../../layout/PageWapper/PageWrapper';
import LandTestimonyDesktop from './LandTestimonyDesktop';
import LandTestimonyMobile from './LandTestimonyMobile';

function LandTestimony() {
  return (
    <>
        <PageWrapper>
          <div className='container-fluid my-5'>
            
            <LandTestimonyMobile/>
            <LandTestimonyDesktop/>
          </div>
        </PageWrapper>
    </>
  )
}

export default LandTestimony