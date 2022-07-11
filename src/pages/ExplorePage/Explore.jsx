import React from 'react';
import PageWrapper from '../../layout/PageWapper/PageWrapper';
import ExploreDesktop from './ExploreDesktop';
import ExploreMobile from './ExploreMobile';
import "../../App.css";
import "./Explore.css";

function Explore() {
  return (
    <>
        <PageWrapper>
          <div className='container'>
            <ExploreMobile/>
            <ExploreDesktop/> 
          </div>
        </PageWrapper>
    </>
  )
}

export default Explore