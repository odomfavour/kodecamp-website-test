import React from 'react';
import ExploreCard from './ExploreCard';

function ExploreDesktop() {
  return (
    <>
        

        {/* display normal card display for other screens apart from mobile */}
        <div className='d-none d-sm-block '>
            
            <div className='mt-3'>
              <p className='explore-fs-24-700 fw-bold deep-blue-100'>Product Design</p>
            </div>
            <ExploreCard/>
        </div>
    
    </>
  )
}

export default ExploreDesktop