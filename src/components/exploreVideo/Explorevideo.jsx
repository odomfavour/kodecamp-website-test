import React, { useState } from "react";
import ReactPlayer from "react-player";
import "./Explorevideo.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { Row, Col } from "react-bootstrap";
const Explorevideo = () => {
  const [videoText, setVideoText] = useState(true);

  // function toggleVideoText() {
  //   setVideoText(false);
  // }

  return (
    <Row className="my-5 d-flex justify-content-center justify-content-md-start align-items-center">
      <Col className="col-12">
        <p className="  my-2 deep-blue-100 fs-3 fs-md-1 fs-lg-1 fs-lg-1 fw-bold">
          Check out our latest updates
        </p>
      </Col>
      <Col className=" col-12 col-md-9   ">
        <div className="m-lg-5 position-relative">
          {videoText && (
            <div
              className="video-text f-1 bg-deep-blue-100  d-none d-md-flex justify-content-center align-items-center p-3 white-100 rounded-3 position-absolute  text-center fs-5"
              style={{ width: "300px", height: "200px" }}
            >
              <p>A short video about how kodecamp works</p>
            </div>
          )}
          <ReactPlayer
            controls
            width="100%"
            height="450px" // height="400px"
            url="https://youtu.be/v1gVvIcwVQY"
            // onStart={toggleVideoText}
            onStart={() => setVideoText(false)}
            onPlay={() => setVideoText(false)}
            onPause={() => setVideoText(true)}
            onEnded={() => setVideoText(true)}
            className="py-3 exp-vid"
          />
        </div>
      </Col>
      <Col className="col-md-2 d-none d-lg-flex d-md-flex px-md-3 px-lg-4">
        <div
          style={{ width: "64px", height: "64px" }}
          className="  bg-deep-blue-100 d-flex justify-content-center align-items-center mx-3"
        >
          <IoIosArrowBack className="white-100 fs-1 p-2 arrow-icon" />
        </div>
        <div
          style={{ width: "64px", height: "64px" }}
          className="border-secondary d-flex justify-content-center align-items-center rounded-3 border"
        >
          <IoIosArrowForward className="black-60 fs-1 border-secondary arrow-icon" />
        </div>
      </Col>
    </Row>
  );
};

export default Explorevideo;
