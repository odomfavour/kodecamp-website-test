// import { toBeRequired } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";
import Slider from "react-slick";
import { getCardData } from './CardData';
import LandTestimonyCard from "./LandTestimonyCard";
// import LandTestimonyImageCard from "./LandTestimonyImageCard";

// function SampleNextArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <button
//       className={className}
//       style={{ ...style, display: "block", background: "var(--green-100)" }}
//       onClick={onClick}
//     />
//   );
// }

// function SamplePrevArrow(props) {
//   const { className, style, onClick } = props;
//   return (
//     <button
//       className={className}
//       style={{ ...style, display: "block", background: "var(--green-100)" }}
//       onClick={onClick}
//     />
//   );
// }

export default class LandTestimonyTabToDesktop  extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }
  render() {
    const testimonials = getCardData();
    const settings = {
      className: "center pb-5",
      centerPadding: "-1%",
      focusOnSelect: true,
      dots: true,
      pauseOnHover: true,
      infinite: true,
      centerMode: true,
      speed: 500,
      slidesToShow: 3,
      // prevArrow: <button className="slick-prev"></button>,
      // nextArrow:  <button className="slick-prev"></button>,
    
      responsive: [
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            className:"center",
            arrows:false,  
          }
        },
        {
          breakpoint: 1199,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            className: "center",
            centerMode: true,
            arrows:false,
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true,
            className: "center",
            centerMode: true,
            arrows:false,
          }
        },
        {
          breakpoint: 320,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          }
        }
      ]
    };
    // const settings2 = {
    //   className: "center",
    //   focusOnSelect: true,
    //   dots: false,
    //   arrows: false,
    //   centerPadding: "10px",
    //   infinite: true,
    //   centerMode: true,
    //   speed: 500,
    //   slidesToShow: 3,
    //   slidesToScroll: 1,
    //   pauseOnHover: true,
    // };
    return (
      <>
        
        <section className="container d-none d-md-block section-padding ">
          <div className="text-center container ">
            <div className="text-center  ">
              <p className=" fs-3 fw-bold deep-blue-100">WHAT OUR INTERNS HAVE TO SAY</p>
            </div>
              <div className="main-carousel ">
                <Slider {...settings} className="main-carousel position-relative mb-5" asNavFor={this.state.nav2}
                  ref={slider => (this.slider1 = slider)}>
                  {
                    testimonials.map(testimony => (
                        <LandTestimonyCard name={testimony.name} track={testimony.track} description={testimony.description} image={testimony.image} key={testimony.id}/>   
                    ))
                  }
                </Slider>
              </div>
              <div className="container ">
                <div className="container position-absolute image-carousel text-center  ">
                  {/* <div className="connect-dot-1 position-absolute">
                  </div>
                  <div className="connect-dot-2 position-absolute">
                  </div>
                  <div className="connect-dot-3 position-absolute">
                  </div> */}
                  {/* <Slider {...settings2} className=" image-carousel d-none d-xl-block pt-4 " asNavFor={this.state.nav1}
                        ref={slider => (this.slider2 = slider)}>
                    {
                      testimonials.map(testimony => (
                          <LandTestimonyImageCard name={testimony.name} track={testimony.track} description={testimony.description} image={testimony.image} key={testimony.id}/>
                      ))
                    }
                  </Slider> */}
                </div>
              </div>
          </div>
        </section>
      </>     
    );
  }
}