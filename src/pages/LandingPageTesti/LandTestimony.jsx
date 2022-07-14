import React from 'react';
import "../../App.css";
import "./LandTestimony.css";
import PageWrapper from '../../layout/PageWapper/PageWrapper';
import LandTestimonyDesktop from './LandTestimonyDesktop';
import LandTestimonyMobile from './LandTestimonyMobile';

function LandTestimony() {
  return (
    <>
        <PageWrapper>
          <div className='container-fluid my-5'>
            <LandTestimonyDesktop/>
            <LandTestimonyMobile/>
          </div>
        </PageWrapper>
    </>
  )
}

export default LandTestimony