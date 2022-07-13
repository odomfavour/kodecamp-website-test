import React from "react";
import { Col, Card } from "react-bootstrap";

// import circular progress bar
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Analytics = ({ cohort, value }) => {
  return (
    <Col className="col-11 col-md-5 col-lg-5 text-center">
      <Card
        // border="secondary"
        className="mx-auto py-2 px-3 deep-blue-100 shadow-sm"
      >
        <Card.Body>
          <Card.Title
            className="fw-bold mb-3 fs-2 "
            style={{ fontWeight: "500" }}
          >
            KodeCamp {cohort}
          </Card.Title>
          <Card.Text className="lh-lg fs-5 mb-3  fw-normal">
            Over the course of the Kodecamp {cohort} we have had over {value}%
            of interns learn using our platform as seen on our analytics
            diagram.
          </Card.Text>
          <div
            className="p-2 mx-auto"
            style={{ width: "130px", height: "130px" }}
          >
            <CircularProgressbar
              value={value}
              text={`${value}%`}
              styles={buildStyles({
                textColor: "var(--green-100)",
                //   trailColor: "var(--green-100)",
                trailColor: "var(--green-20)",
                pathColor: `var(--green-100)`,
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
