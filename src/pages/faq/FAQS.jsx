import Accordion from "react-bootstrap/Accordion";
import PageWrapper from "../../layout/PageWapper/PageWrapper";
import "./FAQs.css";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function FAQS({ id, category, desc }) {
  return (
    <>
      <PageWrapper>
        <Container>
          <div className="d-flex flex-column justify-content-center align-items-center mt-5">
            <h1 className="deep-blue-100 fw-semibold  faq-header-1">FAQs</h1>
            <h2 className="deep-blue-100 fw-semibold  faq-header-2">
              Frequently asked questions
            </h2>
          </div>
          <Row>
            <Col className="col-12 faq">
              <Accordion className="py-5 px-3 px-lg-5">
                <Accordion.Item
                  eventKey="0"
                  className="mb-4 rounded-1"
                  flush="true"
                  key={id}
                >
                  <Accordion.Header className="fw-bold fs-2 outline-0 ">
                    {" "}
                    What are the courses offered
                  </Accordion.Header>
                  <Accordion.Body>
                    We offer courses ranging from design, App development, Web
                    development( Frontend and Backend development). Check out
                    all courses on our{" "}
                    <Link to="/explore">Explore Section.</Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="mb-4 rounded-1">
                  <Accordion.Header className="fw-semibold">
                    When is the program starting?
                  </Accordion.Header>
                  <Accordion.Body>
                    Registrations starts on the 3rd of March 2022.{" "}
                    <Link to="/enroll">Enroll Now</Link>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2" className="mb-4 rounded-1">
                  <Accordion.Header className=" fw-semibold">
                    How long does the internship run for?
                  </Accordion.Header>
                  <Accordion.Body>
                    he internship takes 10 weeks to be completed. 6 weeks for
                    learning and the remaining weeks are for the project phase.
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="mb-4 rounded-1">
                  <Accordion.Header className=" fw-semibold ">
                    Is the program for Nigerians only?
                  </Accordion.Header>
                  <Accordion.Body>
                    The program can be accessed by anyone, from any country. The
                    internship is remote hence suitable for everyone.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="4" className="mb-4 rounded-1">
                  <Accordion.Header className=" fw-semibold ">
                    Will certificate be issued after the program?
                  </Accordion.Header>
                  <Accordion.Body>
                    Yes. Only those who successfully completes the project phase
                    / internship will be issued a certificate.
                  </Accordion.Body>
                </Accordion.Item>

                <Accordion.Item eventKey="5" className="mb-4 rounded-1">
                  <Accordion.Header className=" fw-semibold ">
                    What are the requirements for one to be part of the program?
                  </Accordion.Header>
                  <Accordion.Body>
                    Apply for the program before the deadline. Also, a laptop
                    and internet connectivity is required as lessons will take
                    place online.
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
          </Row>

          <div className="d-flex flex-column justify-content-center align-items-center pb-5 pt-2 text-center">
            <h3 className="deep-blue-100 fw-bold fs-2 py-3">
              Still having questions?
            </h3>
            <p className="questions-p">
              If you cannot find answers to your questions in our FAQs, you can
              always contact us. We will answer you shortly.
            </p>
            <Link to="/contactus">
              <Button className="bg-green-100 px-5 py-3 my-3 fw-bold faq-contact-btn">
                Contact us
              </Button>
            </Link>
          </div>
        </Container>
      </PageWrapper>
    </>
  );
}

export default FAQS;
