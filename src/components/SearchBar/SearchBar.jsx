import React from 'react';
import "./searchbar.css";

function SearchBar() {
  return (
    <>
        <div className='container'>        
            <div className="row height d-flex justify-content-start align-items-center">
              <div className="col-md-8">
                <div className="search">
                  <input type="text" className="form-control searchbar-fs-20-500 fw-normal ps-5" placeholder=" Search for courses"/>
                </div>            
              </div>         
            </div>
        </div>
    </>
  )
}

export default SearchBar