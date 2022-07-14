import React from 'react';
import "../../App.css";
import "./LandTestimony.css";
import PageWrapper from '../../layout/PageWapper/PageWrapper';
import LandTestimonyDesktop from './LandTestimonyDesktop';

function LandTestimony() {
  return (
    <>
        <PageWrapper>
          <div className=' my-5'>

            <LandTestimonyDesktop/>
            
            
          </div>
        </PageWrapper>
    </>
  )
}

export default LandTestimony