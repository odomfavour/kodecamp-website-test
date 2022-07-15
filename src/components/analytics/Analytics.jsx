import React from "react";
import { Col, Card } from "react-bootstrap";

// import circular progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Analytics = ({ cohort, value }) => {
  return (
    <Col className="col-12 col-md-6 col-lg-5 text-center p-0">
      <Card
        // border="secondary"
        className="mx-auto py-2 px-2 px-md-3 deep-blue-100 shadow-sm"
      >
        <Card.Body className="pb-0">
          <Card.Title
            className="fw-semibold mb-3 "
            style={{ fontSize: "2rem" }}
          >
            KodeCamp {cohort}
          </Card.Title>
          <Card.Text
            style={{ fontWeight: "500" }}
            className="lh-lg fs-5 mb-3 sonic-silver "
          >
            Over the course of the Kodecamp {cohort} we have had over {value}%
            of interns learn using our platform as seen on our analytics
            diagram.
          </Card.Text>
          <div
            className="p-2 mx-auto"
            style={{ width: "120px", height: "120px" }}
          >
            <CircularProgressbar
              value={value}
              text={`${value}%`}
              styles={buildStyles({
                textColor: "var(--green-100)",
                trailColor: "var(--green-20)",
                pathColor: "var(--green-100)",
              })}
            />
          </div>
          ;
        </Card.Body>
      </Card>
    </Col>
  );
};

export default Analytics;
