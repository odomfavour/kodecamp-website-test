import React, { useState } from "react";
import ReactPlayer from "react-player";
import { Container } from "react-bootstrap";
import "./Explorevideo.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IconContext } from "react-icons";

const Explorevideo = () => {
  const [videoText, setVideoText] = useState(true);

  function toggleVideoText() {
    setVideoText(false);
  }

  return (
    <>
      <Container className="my-5">
        <div className="explore-video my-5">
          {/* <Button className="explore-video-enroll-btn bg-green-100">
            Enroll
          </Button> */}
        </div>

        <div className="d-flex justify-content-center align-items-center video-container">
          {videoText && (
            <div className="video-text bg-deep-blue-100 d-flex  justify-content-center align-items-center p-md-3 p-lg-4 white-100 rounded-3 position-absolute">
              <p>A short video about how kodecamp works</p>
            </div>
          )}
          <div className="exp-vid-holder">
            <p className="  my-2 updates deep-blue-100">
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
          <div className="controls d-sm-none d-lg-flex d-md-flex px-md-3 px-lg-4">
            <div className="left-control arrow d-flex justify-content-center align-items-center mx-3">
              <IconContext.Provider
                value={{ className: "back-arrow white-100" }}
              >
                <IoIosArrowBack />
              </IconContext.Provider>
            </div>
            <div className="right-control arrow d-flex justify-content-center align-items-center rounded-3">
              <IconContext.Provider value={{ className: "forward-arrow" }}>
                <IoIosArrowForward />
              </IconContext.Provider>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Explorevideo;
