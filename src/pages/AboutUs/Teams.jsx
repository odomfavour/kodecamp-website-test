import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./teams.css";

// images
import TeamMember1 from "../../Images/Team Members/team-member-1.jpg";
import TeamMember2 from "../../Images/Team Members/team-member-2.jpg";
import TeamMember3 from "../../Images/Team Members/team-member-3.jpg";
import TeamMember4 from "../../Images/Team Members/team-member-4.jpg";
import TeamMember5 from "../../Images/Team Members/team-member-5.jpg";
import TeamMember6 from "../../Images/Team Members/team-member-6.jpg";
import TeamMember7 from "../../Images/Team Members/team-member-7.jpg";
import TeamMember8 from "../../Images/Team Members/team-member-8.jpg";
import TeamMember9 from "../../Images/Team Members/team-member-9.jpg";

const Teams = () => {
  const [puzzleNumber1, setPuzzleNumber1] = useState("move1");
  const [puzzleNumber2, setPuzzleNumber2] = useState("move1");
  const [puzzleNumber3, setPuzzleNumber3] = useState("move1");
  return (
    <>
      <Container className="px-md-0 mb-5 mt-2">
        <Row>
          <Col className="d-none d-lg-block mb-lg-3">
            {/* first row */}

            <h2 className="deep-blue-100 fw-bolder text-center text-uppercase mb-5 mt-3">
              Meet the <span className="green-100">kodecamp</span> team
            </h2>
            <div className="puzzle-container d-flex justify-content-center align-items-center">
              <div
                className={`card-images card-image-1 ${puzzleNumber1}`}
                data-number="move1"
                onMouseEnter={() => setPuzzleNumber1("move1")}
              >
                <img src={TeamMember1} className=" img-fluid" alt="" />
              </div>
              <div className={` mover bg-deep-blue-100 ${puzzleNumber1}`}>
                {puzzleNumber1 === "move1" && (
                  <div className="white-100 px-2 pt-5">
                    <p
                      className="mb-1"
                      style={{ fontSize: "16px", fontWeight: "700" }}
                    >
                      Ogochukwu Odom
                    </p>
                    <p
                      className="mb-2"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      Frontend Web Development
                    </p>
                    <p
                      className="text-justify"
                      style={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      A frontend developer with experience in React, Vue,
                      NodeJs. Free spirited, creative, goal-oriented and your
                      random guy.
                    </p>
                  </div>
                )}
                {puzzleNumber1 === "move2" && (
                  <div className="white-100 px-2 pt-5">
                    <p
                      className="mb-1"
                      style={{ fontSize: "16px", fontWeight: "700" }}
                    >
                      Menim Joseph
                    </p>
                    <p
                      className="mb-2"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      UI/UX Design
                    </p>
                    <p
                      className="text-justify"
                      style={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      A Product Designer ( UI/UX) with experience in graphics
                      design and front-end development.
                    </p>
                  </div>
                )}
                {puzzleNumber1 === "move3" && (
                  <div className="white-100 px-2 pt-5">
                    <p
                      className="mb-1"
                      style={{ fontSize: "16px", fontWeight: "700" }}
                    >
                      Menim Joseph
                    </p>
                    <p
                      className="mb-2"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      UI/UX Design
                    </p>
                    <p
                      className="text-justify"
                      style={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      A Product Designer ( UI/UX) with experience in graphics
                      design and front-end development.
                    </p>
                  </div>
                )}
                {puzzleNumber1 === "move3" && <p>move3</p>}
              </div>
              <div
                className={`card-images card-image-2 ${puzzleNumber1}`}
                data-number="move2"
                onMouseEnter={() => setPuzzleNumber1("move2")}
              >
                <img src={TeamMember2} className=" img-fluid" alt="" />
              </div>
              <div
                className={`card-images card-image-3 ${puzzleNumber1}`}
                data-number="move3"
                onMouseEnter={() => setPuzzleNumber1("move3")}
              >
                <img src={TeamMember3} className=" img-fluid" alt="" />
              </div>
            </div>

            {/* second row */}
            <div className="puzzle-container d-flex justify-content-center align-items-center">
              <div
                className={`card-images card-image-1 ${puzzleNumber2}`}
                data-number="move1"
                onMouseEnter={() => setPuzzleNumber2("move1")}
              >
                <img src={TeamMember4} className=" img-fluid" alt="" />
              </div>
              <div className={` mover bg-green-100 ${puzzleNumber2}`}>
                {puzzleNumber2 === "move1" && (
                  <div className="white-100 px-2 pt-5">
                    <p
                      className="mb-1"
                      style={{ fontSize: "16px", fontWeight: "700" }}
                    >
                      Favour Sunday
                    </p>
                    <p
                      className="mb-2"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      UI/UX Design
                    </p>
                    <p
                      className="text-justify"
                      style={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      Graphics, Web and Mobile Designer, Tech Enthsiast. A cool
                      breeze and a hurricane.
                    </p>
                  </div>
                )}
                {puzzleNumber2 === "move2" && (
                  <div className="white-100 px-2 pt-5">
                    <p
                      className="mb-1"
                      style={{ fontSize: "16px", fontWeight: "700" }}
                    >
                      Victor Emmanuel
                    </p>
                    <p
                      className="mb-2"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      CAD
                    </p>
                    <p
                      className="text-justify"
                      style={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      CAD | CAM | Product Design | Industial Design. He listens
                      a lot more than he speaks.
                    </p>
                  </div>
                )}
                {puzzleNumber2 === "move3" && (
                  <div className="white-100 px-2 pt-5">
                    <p
                      className="mb-1"
                      style={{ fontSize: "16px", fontWeight: "700" }}
                    >
                      Boma Agina-obu
                    </p>
                    <p
                      className="mb-2"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      UI/UX Design
                    </p>
                    <p
                      className="text-justify"
                      style={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      A UI/UX Designer with experience in creating digital
                      product and solving design problems.
                    </p>
                  </div>
                )}
              </div>
              <div
                className={`card-images card-image-2 ${puzzleNumber2}`}
                data-number="move2"
                onMouseEnter={() => setPuzzleNumber2("move2")}
              >
                <img src={TeamMember5} className=" img-fluid" alt="" />
              </div>
              <div
                className={`card-images card-image-3 ${puzzleNumber2}`}
                data-number="move3"
                onMouseEnter={() => setPuzzleNumber2("move3")}
              >
                <img src={TeamMember6} className=" img-fluid" alt="" />
              </div>
            </div>

            {/* third row */}
            <div className="puzzle-container d-flex justify-content-center align-items-center">
              <div
                className={`card-images card-image-1 ${puzzleNumber3}`}
                data-number="move1"
                onMouseEnter={() => setPuzzleNumber3("move1")}
              >
                <img src={TeamMember7} className=" img-fluid" alt="" />
              </div>
              <div className={` mover  bg-deep-blue-100 ${puzzleNumber3}`}>
                {puzzleNumber3 === "move1" && (
                  <div className="white-100 px-2 pt-5">
                    <p
                      className="mb-1"
                      style={{ fontSize: "16px", fontWeight: "700" }}
                    >
                      Saviour Bassey
                    </p>
                    <p
                      className="mb-2"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      Python and Javascript, Django
                    </p>
                    <p
                      className="text-justify"
                      style={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      A technology enthusiast
                    </p>
                  </div>
                )}
                {puzzleNumber3 === "move2" && (
                  <div className="white-100 px-2 pt-5">
                    <p
                      className="mb-1"
                      style={{ fontSize: "16px", fontWeight: "700" }}
                    >
                      Chiehiura Basil
                    </p>
                    <p
                      className="mb-2"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      UI/UX Design
                    </p>
                    <p
                      className="text-justify"
                      style={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      A professional product designer based in Nigeria,
                      experienced in designing mobile apps and websites.
                    </p>
                  </div>
                )}
                {puzzleNumber3 === "move3" && (
                  <div className="white-100 px-2 pt-5">
                    <p
                      className="mb-1"
                      style={{ fontSize: "16px", fontWeight: "700" }}
                    >
                      Unyime Etim
                    </p>
                    <p
                      className="mb-2"
                      style={{ fontSize: "14px", fontWeight: "600" }}
                    >
                      Python
                    </p>
                    <p
                      className="text-justify"
                      style={{ fontSize: "14px", fontWeight: "400" }}
                    >
                      Rust, Python, Backend Engineer. Reserved and Open minded.
                    </p>
                  </div>
                )}
              </div>
              <div
                className={`card-images card-image-2 ${puzzleNumber3}`}
                data-number="move2"
                onMouseEnter={() => setPuzzleNumber3("move2")}
              >
                <img src={TeamMember8} className=" img-fluid" alt="" />
              </div>
              <div
                className={`card-images card-image-3 ${puzzleNumber3}`}
                data-number="move3"
                onMouseEnter={() => setPuzzleNumber3("move3")}
              >
                <img src={TeamMember9} className=" img-fluid" alt="" />
              </div>
            </div>
          </Col>
          <Col className=" d-lg-none">
            <h2 className="deep-blue-100 fw-bolder text-center text-uppercase mb-5 mt-2">
              Meet the <br /> <span className="green-100">kodecamp</span> team
            </h2>

            {/* team mate */}
            <div>
              <img src={TeamMember1} alt="" className="img-fluid " />
              <div className="white-100 px-3 pt-3 pb-2 bg-deep-blue-100 mt-2 mb-5 ">
                <p
                  className="mb-1"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  Ogochukwu Odom
                </p>
                <p
                  className="mb-2"
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Frontend Web Development
                </p>
                <p style={{ fontSize: "14px", fontWeight: "300" }}>
                  A frontend developer with experience in React, Vue, NodeJs.
                  Free spirited, creative, goal-oriented and your random guy.
                </p>
              </div>
            </div>

            {/* team mate */}
            <div>
              <img src={TeamMember2} alt="" className="img-fluid " />
              <div className="white-100 px-3 pt-3 pb-2 bg-deep-blue-100 mt-2 mb-5">
                <p
                  className="mb-1"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  Menim Joseph
                </p>
                <p
                  className="mb-2"
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  UI/UX Design
                </p>
                <p style={{ fontSize: "14px", fontWeight: "400" }}>
                  A Product Designer ( UI/UX) with experience in graphics design
                  and front-end development.
                </p>
              </div>
            </div>

            {/* team mate */}
            <div>
              <img src={TeamMember3} alt="" className="img-fluid " />
              <div className="white-100 px-3 pt-3 pb-2 bg-deep-blue-100 mt-2 mb-5">
                <p
                  className="mb-1"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  Menim Joseph
                </p>
                <p
                  className="mb-2"
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  UI/UX Design
                </p>
                <p style={{ fontSize: "14px", fontWeight: "400" }}>
                  A Product Designer ( UI/UX) with experience in graphics design
                  and front-end development.
                </p>
              </div>
            </div>

            {/* team mate */}
            <div>
              <img src={TeamMember4} alt="" className="img-fluid " />
              <div className="white-100 px-3 pt-3 pb-2 bg-deep-blue-100 mt-2 mb-5">
                <p
                  className="mb-1"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  Favour Sunday
                </p>
                <p
                  className="mb-2"
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  UI/UX Design
                </p>
                <p style={{ fontSize: "14px", fontWeight: "400" }}>
                  Graphics, Web and Mobile Designer, Tech Enthsiast. A cool
                  breeze and a hurricane.
                </p>
              </div>
            </div>

            {/* team mate */}
            <div>
              <img src={TeamMember5} alt="" className="img-fluid " />
              <div className="white-100 px-3 pt-3 pb-2 bg-deep-blue-100 mt-2 mb-5">
                <p
                  className="mb-1"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  Victor Emmanuel
                </p>
                <p
                  className="mb-2"
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  CAD
                </p>
                <p style={{ fontSize: "14px", fontWeight: "400" }}>
                  CAD | CAM | Product Design | Industial Design. He listens a
                  lot more than he speaks.
                </p>
              </div>
            </div>

            {/* team mate */}
            <div>
              <img src={TeamMember6} alt="" className="img-fluid " />
              <div className="white-100 px-3 pt-3 pb-2 bg-deep-blue-100 mt-2 mb-5">
                <p
                  className="mb-1"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  Boma Agina-obu
                </p>
                <p
                  className="mb-2"
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  UI/UX Design
                </p>
                <p style={{ fontSize: "14px", fontWeight: "400" }}>
                  A UI/UX Designer with experience in creating digital product
                  and solving design problems.
                </p>
              </div>
            </div>

            {/* team mate */}
            <div>
              <img src={TeamMember7} alt="" className="img-fluid " />
              <div className="white-100 px-3 pt-3 pb-2 bg-deep-blue-100 mt-2 mb-5">
                <p
                  className="mb-1"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  Saviour Bassey
                </p>
                <p
                  className="mb-2"
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Python and Javascript, Django
                </p>
                <p style={{ fontSize: "14px", fontWeight: "400" }}>
                  A technology enthusiast
                </p>
              </div>
            </div>

            <div>
              <img src={TeamMember8} alt="" className="img-fluid " />
              <div className="white-100 px-3 pt-3 pb-2 bg-deep-blue-100 mt-2 mb-5">
                <p
                  className="mb-1"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  Chiehiura Basil
                </p>
                <p
                  className="mb-2"
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  UI/UX Design
                </p>
                <p style={{ fontSize: "14px", fontWeight: "400" }}>
                  A professional product designer based in Nigeria, experienced
                  in designing mobile apps and websites.
                </p>
              </div>
            </div>

            <div>
              <img src={TeamMember9} alt="" className="img-fluid " />
              <div className="white-100 px-3 pt-3 pb-2 bg-deep-blue-100 mt-2 mb-5">
                <p
                  className="mb-1"
                  style={{ fontSize: "18px", fontWeight: "700" }}
                >
                  Unyime Etim
                </p>
                <p
                  className="mb-2"
                  style={{ fontSize: "16px", fontWeight: "500" }}
                >
                  Python
                </p>
                <p style={{ fontSize: "14px", fontWeight: "400" }}>
                  Rust, Python, Backend Engineer. Reserved and Open minded.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Teams;
