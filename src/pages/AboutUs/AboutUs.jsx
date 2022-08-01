import { Container } from "react-bootstrap";
import PageWrapper from "../../layout/PageWapper/PageWrapper";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import WomenOnPc from "../../Images/AboutUsAssets/women-on-pc.png";
import ManAndWomenOnPc from "../../Images/AboutUsAssets/man-and-women-on-pc.png";
import ManWithDreadsOnPc from "../../Images/AboutUsAssets/man-with-dreads-on-pc.png";
import LadyOnGlasses from "../../Images/AboutUsAssets/lady-on-glasses.png";
import WomenOnPcDesktop from "../../Images/AboutUsAssets/women-on-pc-desktop.png";
import ManAndWomenOnPcDesktop from "../../Images/AboutUsAssets/man-and-women-on-pc-desktop.png";
import ManWithDreadsOnPcDesktop from "../../Images/AboutUsAssets/man-with-dreads-on-pc-desktop.png";
import LadyOnGlassesDesktop from "../../Images/AboutUsAssets/lady-on-glasses-desktop.png";
import Icon from "../../Images/AboutUsAssets/mission-icon.svg";
import VisionIcon from "../../Images/AboutUsAssets/vision-icon.svg";
import Polygon from "../../Images/AboutUsAssets/polygon.svg";
import PolygonValues from "../../Images/AboutUsAssets/polygon-values.png";
import Vector from "../../Images/AboutUsAssets/vector-connect-mission-vision.svg";
import "./AboutUs.css";
import Teams from "./Teams";

const AboutUs = () => {
  return (
    <PageWrapper>
      <Container>
        <Row className="mt-5">
          <Col xs={12} lg={6}>
            <h1
              className="deep-blue-100 experience text-center text-lg-start mt-4 mt-md-5"
              style={{ fontWeight: "800" }}
            >
              The <span className="green-100">KodeCamp</span> Experience
            </h1>
            <p
              className="deep-blue-100 text-start d-none d-lg-block experience-text"
              style={{
                fontWeight: "500",
                fontSize: "1.25rem",
                lineHeight: "1.5em",
              }}
            >
              KodeCamp is designed to support capacity development in the field
              of information and communication technology (ICT) by providing
              training, mentorship, leadership, and career opportunities to
              young Nigerians.
            </p>
          </Col>
          <Col xs={12} lg={6} className="mt-4 mt-lg-0 text-center">
            <Row className="px-3">
              <Col xs={6} className="text-end d-md-none">
                <img src={WomenOnPc} alt="women-on-pc" />
              </Col>
              <Col xs={6} className="text-left mt-3 d-md-none">
                <img src={ManAndWomenOnPc} alt="man-and-women-on-pc" />
              </Col>
              <Col xs={6} className="mt-1 text-end d-md-none">
                <img src={ManWithDreadsOnPc} alt="man-with-dreads-on-pc" />
              </Col>
              <Col xs={6} className="mt-4 text-center d-md-none">
                <img src={LadyOnGlasses} alt="lady-on-glasses" />
              </Col>
              <Col
                xs={6}
                className="d-none d-md-block text-center position-relative"
              >
                <img
                  src={WomenOnPcDesktop}
                  alt="women-on-pc"
                  width="150"
                  height="150"
                />
                <div className="women-on-pc-circle d-none d-xl-block"></div>
              </Col>
              <Col xs={6} className="d-none d-md-block mt-4 position-relative">
                <img
                  src={ManAndWomenOnPcDesktop}
                  alt="man-and-women-on-pc"
                  width="200"
                  height="200"
                />
                <div className="man-and-women-on-pc-circle d-none d-xl-block"></div>
              </Col>
              <Col
                xs={6}
                className="d-none d-md-block mt-2 text-center position-relative"
              >
                <img
                  src={ManWithDreadsOnPcDesktop}
                  alt="man-with-dreads-on-pc"
                  width="250"
                  height="250"
                />
                <div className="man-with-dreads-on-pc-circle d-none d-xl-block"></div>
              </Col>
              <Col
                xs={6}
                className="d-none d-md-block text-center mt-5 position-relative"
              >
                <img
                  src={LadyOnGlassesDesktop}
                  alt="lady-on-glasses"
                  width="150"
                  height="150"
                />
                <div className="lady-on-glasses-circle d-none d-xl-block"></div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>

      <Container className="d-block d-sm-none mt-4 mb-5">
        <Row className="position-relative">
          <Col xs={11} className="mx-auto">
            <div
              className="values text-center bg-blue-100 overflow-hidden mx-auto"
              style={{ borderRadius: "4px", height: "200px" }}
            >
              <div className="values-content-container">
                <p className="white-100 px-4 py-5">
                  These are the values that we hold dear. These culture and
                  ethics have shaped us into one of the best tech learning
                  institutions in the industry.
                </p>
                <img
                  src={PolygonValues}
                  alt="polygon-values"
                  className="polygon-values"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container className="mission-vision-container">
        <Row className="position-relative">
          <img
            src={Vector}
            className="position-absolute vector-about d-none d-lg-block"
            width="300"
            height="280"
            alt="vector-connect-mission-vision"
          />
          <Col xs={11} lg={6} className="mx-auto">
            <div
              className="mission text-center bg-green-100 mb-5 overflow-hidden mx-auto"
              style={{ borderRadius: "4px" }}
            >
              <div className="mission-content-container">
                <img
                  src={Icon}
                  className="mission-icon mt-4 mt-lg-3"
                  alt="mission-icon"
                />
                <h2
                  className="white-100 pt-1 pt-sm-2 pt-lg-1"
                  style={{ fontWeight: "700", fontSize: "1.25em" }}
                >
                  Mission
                </h2>
                <p
                  className="white-100 px-4 px-sm-5 pb-4 pb-sm-0 px-lg-5 pt-sm-2 pt-lg-0"
                  style={{ fontWeight: "500", fontSize: "1.125em" }}
                >
                  Our mission is to admit, nurture and deploy next generation of
                  tech workforce in Africa for the budding era of industry 4.0.
                </p>
                <img
                  src={Polygon}
                  alt="polygon-mission"
                  className="polygon-mission"
                />
              </div>
            </div>
          </Col>
          <Col xs={11} lg={6} className="mx-auto">
            <div
              className="vision text-center bg-green-100 mb-5 overflow-hidden mx-auto"
              style={{ borderRadius: "4px" }}
            >
              <div className="mission-content-container">
                <img
                  src={VisionIcon}
                  className="vision-icon mt-4 mt-lg-3"
                  alt="vision-icon"
                />
                <h2
                  className="white-100 pt-3 pt-lg-1"
                  style={{ fontWeight: "700", fontSize: "1.25em" }}
                >
                  Vision
                </h2>
                <p
                  className="white-100 px-4 px-sm-5 pt-2 pt-lg-0 pb-2 technical-talents"
                  style={{ fontWeight: "500", fontSize: "1.125em" }}
                >
                  A one stop for technical talents in Africa by 2025!
                </p>
                <img
                  src={Polygon}
                  alt="polygon-vision"
                  className="polygon-vision"
                />
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      <Container fluid className="culture-container my-5">
        <Container className="py-4 py-lg-5">
          <Row>
            <Col xs={12} lg={5} className="order-lg-2 offset-lg-1 mt-2 mt-lg-5">
              <h3
                className="deep-blue-100 text-center culture pt-lg-5 px-md-0"
                style={{ fontWeight: "800" }}
              >
                The <span className="green-100">KodeCamp</span> Culture
              </h3>
              <p
                className="deep-blue-100 text-center d-none d-lg-block pt-2 px-lg-1 px-xl-4"
                id="text-below-culture"
                style={{ fontWeight: "500" }}
              >
                These are the values that we hold dear. These culture and ethics
                have shaped us into one of the best tech learning institutions
                in the industry.
              </p>
            </Col>

            <Col xs={12} lg={6} className="order-lg-1 mt-5">
              <Row>
                <Col xs={12} className="">
                  <div
                    className="bg-deep-blue-100 square-div mx-auto"
                    style={{ borderRadius: "4px" }}
                  >
                    <p
                      className="white-100 text-center pb-3 square-div-text"
                      style={{ fontWeight: "700" }}
                    >
                      L
                    </p>
                  </div>
                  <p
                    className="deep-blue-100 text-center text-below-square-div pt-2"
                    style={{ fontWeight: "700" }}
                  >
                    LEADERSHIP
                  </p>
                </Col>

                <Col xs={12}>
                  <Row className="">
                    <Col xs={6} className="">
                      <div
                        className="bg-green-100 square-div mx-auto"
                        id="equity"
                        style={{ borderRadius: "4px" }}
                      >
                        <p
                          className="white-100 text-center pb-3 square-div-text"
                          style={{ fontWeight: "700" }}
                        >
                          E
                        </p>
                      </div>
                      <p
                        className="green-100 text-center text-lg-center text-below-square-div pt-2"
                        id="equity-text"
                        style={{ fontWeight: "700" }}
                      >
                        EQUITY
                      </p>
                    </Col>
                    <Col xs={6} className="">
                      <div
                        className="bg-green-100 square-div mx-auto"
                        id="novelty"
                        style={{ borderRadius: "4px" }}
                      >
                        <p
                          className="white-100 text-center pb-3 square-div-text"
                          style={{ fontWeight: "700" }}
                        >
                          N
                        </p>
                      </div>
                      <p
                        className="green-100 text-center text-lg-center text-below-square-div pt-2"
                        id="novelty-text"
                        style={{ fontWeight: "700" }}
                      >
                        NOVELTY
                      </p>
                    </Col>
                  </Row>
                </Col>

                <Col xs={12}>
                  <Row className="">
                    <Col xs={6} className="">
                      <div
                        className="bg-deep-blue-100 square-div ms-auto me-3"
                        style={{ borderRadius: "4px" }}
                      >
                        <p
                          className="white-100 text-center pb-3 square-div-text"
                          style={{ fontWeight: "700" }}
                        >
                          A
                        </p>
                      </div>
                      <p
                        className="deep-blue-100 text-end me-2 text-below-square-div pt-2"
                        id="ambition-text"
                        style={{ fontWeight: "700" }}
                      >
                        AMBITION
                      </p>
                    </Col>
                    <Col xs={6} className="">
                      <div
                        className="bg-deep-blue-100 square-div ms-3 me-auto"
                        style={{ borderRadius: "4px" }}
                      >
                        <p
                          className="white-100 text-center pb-3 square-div-text"
                          style={{ fontWeight: "700" }}
                        >
                          R
                        </p>
                      </div>
                      <p
                        className="deep-blue-100 text-start ms-3 text-below-square-div pt-2"
                        id="respect-text"
                        style={{ fontWeight: "700" }}
                      >
                        RESPECT
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </Container>
      <Teams />
    </PageWrapper>
  );
};

export default AboutUs;
