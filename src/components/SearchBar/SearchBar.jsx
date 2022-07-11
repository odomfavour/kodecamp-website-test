import React from 'react';
import { Form } from 'react-bootstrap';

function SearchBar() {
  return (
    <>
        <div className='container'>
            <Form className="d-flex col col-lg-8 my-3 ">
                <Form.Control
                size='lg'
                type="search"
                placeholder="Search"
                className="me-2 my-5"
                aria-label="Search"
                />
            </Form>

        </div>
    
    
    </>
  )
}

export default SearchBar