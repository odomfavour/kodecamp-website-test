import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Container } from "react-bootstrap";
import "./Explorevideo.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import { IconContext } from "react-icons";

const Explorevideo = () => {
  const [videoText, setVideoText] = useState(true);

  function toggleVideoText() {
    setVideoText(false);
  }

  return (
    <>
      <Container className="my-5">
        <div className="my-5"></div>

        <div className="d-flex justify-content-center align-items-center video-container">
          {videoText && (
            <div
              className="video-text f-1 bg-deep-blue-100  d-none  d-lg-flex d-md-flex justify-content-center align-items-center p-md-3 p-lg-4 white-100 rounded-3 position-absolute"
              style={{ width: "300px", height: "200px" }}
            >
              <p>A short video about how kodecamp works</p>
            </div>
          )}
          <div className="exp-vid-holder">
            <p className="  my-2 deep-blue-100 fs-3 fs-md-1 fs-lg-1 fs-lg-1 fw-bold">
              Check out our latest updates
            </p>
            <ReactPlayer
              controls
              width="1000px"
              height="600px"
              url="https://www.youtube.com/watch?v=v1gVvIcwVQY&t=16s"
              onStart={toggleVideoText}
              className="py-3 exp-vid"
            />
          </div>
          <div className="d-none d-lg-flex d-md-flex px-md-3 px-lg-4">
            <div
              style={{ width: "64px", height: "64px" }}
              className="  bg-deep-blue-100 d-flex justify-content-center align-items-center mx-3"
            >
              <IoIosArrowBack className="white-100 fs-1 " />
            </div>
            <div
              style={{ width: "64px", height: "64px" }}
              className="border-secondary d-flex justify-content-center align-items-center rounded-3"
            >
              <IoIosArrowForward className="black-60 fs-1 border-secondary" />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Explorevideo;
