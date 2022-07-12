import { Col } from 'react-bootstrap';
import ExploreCard from './ExploreCard';

function ExploreDesktop() {
  return (
    <>
        {/* display normal card display for other screens apart from mobile */}
        <div className='d-none d-sm-block '>    
            {/* Frontend track Section */}
            <section className=''>
              <div className='pt-5'>
                <p className='explore-fs-24-700 fw-bold deep-blue-100'>FrontEnd Development</p>
              </div>
              <div className='row d-flex justify-content-start'>
                <Col className='col-sm-6 col-md-6 col-lg-4'><ExploreCard/></Col>
                <Col className='col-sm-6 col-md-6 col-lg-4'><ExploreCard/></Col>
                <Col className='col-sm-6 col-md-6 col-lg-4'><ExploreCard/></Col>
              </div>
            </section>
            {/* BackEnd track Section */}
            <section className='mt-5'>
              <div className='pt-5'>
                <p className='explore-fs-24-700 fw-bold deep-blue-100'>BackEnd Development </p>
              </div>
              <div className='row d-flex justify-content-start'>
                <Col className='col-4 col-md-6 col-lg-4'><ExploreCard/></Col>
                <Col className='col-4 col-md-6 col-lg-4'><ExploreCard/></Col>
                <Col className='col-4 col-md-6 col-lg-4'><ExploreCard/></Col>
              </div>
            </section>
            {/* Andriod Development track Section */}
            <section className='mt-5'>
              <div className='pt-5'>
                <p className='explore-fs-24-700 fw-bold deep-blue-100'>Andriod Development </p>
              </div>
              <div className='row d-flex justify-content-start'>
                <Col className='col-4 col-md-6 col-lg-4'><ExploreCard/></Col>
                <Col className='col-4 col-md-6 col-lg-4'><ExploreCard/></Col>  
              </div>
            </section>
            {/* Product Management track Section */}
            <section className='mt-5'>
              <div className='pt-5'>
                <p className='explore-fs-24-700 fw-bold deep-blue-100'>Product Management </p>
              </div>
              <div className='row d-flex justify-content-start'>
                <Col className='col-4 col-md-6 col-lg-4'><ExploreCard/></Col>
                <Col className='col-4 col-md-6 col-lg-4'><ExploreCard/></Col>
                <Col className='col-4 col-md-6 col-lg-4'><ExploreCard/></Col>
              </div>
            </section>
            {/* Newly Added track Section */}
            <section className='mt-5'>
              <div className='pt-5'>
                <p className='explore-fs-24-700 fw-bold deep-blue-100'>Newly Added </p>
              </div>
              <div className='row d-flex justify-content-start'>
                <Col className='col-6 col-md-6 col-lg-4'><ExploreCard/></Col>
                <Col className='col-4 col-md-6 col-lg-4'><ExploreCard/></Col>
                <Col className='col-4 col-md-6 col-lg-4'><ExploreCard/></Col>
              </div>
            </section>
            {/* Product Design track Section */}
            <section className='mt-5'>
              <div className='pt-5'>
                <p className='explore-fs-24-700 fw-bold deep-blue-100'>Product Design </p>
              </div>
              <div className='row d-flex justify-content-start'>
                <Col className='col-4 col-md-6 col-lg-4'><ExploreCard/></Col>
                <Col className='col-4 col-md-6 col-lg-4'><ExploreCard/></Col>
              </div>
            </section>    
        </div>
    </>
  )
}

export default ExploreDesktop