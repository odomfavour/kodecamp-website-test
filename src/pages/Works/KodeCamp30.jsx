import { useState } from "react";
import { Container, Button } from "react-bootstrap";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import { useEffect } from "react";

const KodeCamp30 = () => {
  let countDownTimeMs = Date.parse("Aug 30 2022 00:00:00");
  const [remainingTime, setRemainingTime] = useState({
    seconds: "00",
    minutes: "00",
    hours: "00",
    days: "00",
  });

  if (
    remainingTime.seconds < 0 ||
    remainingTime.minutes < 0 ||
    remainingTime.hours < 0 ||
    remainingTime.days < 0
  ) {
    setRemainingTime({
      seconds: "0",
      minutes: "0",
      hours: "0",
      days: "0",
    });
  }

  useEffect(() => {
    const intervalId = setInterval(() => {
      updateRemainingTime(countDownTimeMs);
    }, 1000);
    return () => clearInterval(intervalId);
  }, [countDownTimeMs]);

  function updateRemainingTime(countdown) {
    const timeStampDayJs = dayjs(countdown);
    const now = dayjs();
    const seconds = timeStampDayJs.diff(now, "seconds") % 60;
    const minutes = timeStampDayJs.diff(now, "minutes") % 60;
    const hours = timeStampDayJs.diff(now, "hours") % 24;
    const days = timeStampDayJs.diff(now, "days");
    setRemainingTime({
      seconds: seconds,
      minutes: minutes,
      hours: hours,
      days: days,
    });
  }

  const KodeCamp3_0_Style = {
    fontSize: "1.5em",
    fontWeight: "600",
    lineHeight: "1.8125em",
    width: "11.25em",
    height: "1.8125em",
  };

  const textBelowKodeCamp3_0 = {
    maxWidth: "56.625em",
    fontWeight: "500",
    fontSize: "1.25em",
    lineHeight: "1.5em",
  };

  const timeDaysContainer = {
    maxWidth: "600px",
  };

  const textTime = {
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "29px",
    height: "30px",
    width: "51px",
  };

  const numDaysContainer = {
    width: "73px",
    height: "58px",
    boxShadow: "0px 4px 8px rgba(217, 217, 217, 0.8)",
    borderRadius: "8px",
  };

  const numDays = {
    fontWeight: "600",
    fontSize: "20px",
    lineHeight: "29px",
    width: "25px",
    height: "30px",
    padding: "14px 27px",
  };

  const Data_Style = {
    fontSize: "1.5em",
    fontWeight: "600",
    lineHeight: "1.5em",
    height: "1.5em",
  };

  const Data_Container_Style = {
    marginTop: "32px",
    borderRadius: "8px",
    maxWidth: "1070px",
    marginBottom: "50px",
  };

  const textBelowData = {
    fontWeight: "500",
    fontSize: "1.25em",
    lineHeight: "1.5em",
    margin: "0 42px",
    maxWidth: "740px",
  };

  const btnJoinWorks = {
    width: "160px",
    height: "44px",
    fontWeight: "600",
    borderRadius: "4px",
    padding: "12px 16px",
    lineHeight: "19.5px",
    borderColor: "var(--green-100)",
  };

  return (
    <Container>
      <Container>
        <Row>
          <Col>
            <h2
              className="deep-blue-100 text-center mx-auto"
              id="kodecamp3_0_heading"
              style={KodeCamp3_0_Style}
            >
              KodeCamp 3.0
            </h2>
          </Col>
        </Row>
        <Row>
          <Col>
            <p
              className="sonic-silver text-center mx-auto"
              id="textBelowKodeCamp3_0"
              style={textBelowKodeCamp3_0}
            >
              Want to have access to all the juicy contents and more?{" "}
              <Link to="/">Join</Link> the waitlist to apply for the next
              bootcamp training, Hurry now!
            </p>
          </Col>
        </Row>
        <Row className="time-days-container mx-auto" style={timeDaysContainer}>
          <Col xs={3}>
            <p className="text-time black-60" style={textTime}>
              Days
            </p>
            <div
              className="num-days-container text-center bg-deep-blue-100"
              style={numDaysContainer}
            >
              <p className="white-100 num-days text-center" style={numDays}>
                {remainingTime.days > 9
                  ? remainingTime.days
                  : "0" + remainingTime.days}
              </p>
            </div>
          </Col>

          <Col xs={3}>
            <p className="text-time black-60" style={textTime}>
              Hours
            </p>
            <div
              className="num-days-container text-center bg-deep-blue-100"
              style={numDaysContainer}
            >
              <p className="white-100 num-days text-center" style={numDays}>
                {remainingTime.hours > 9
                  ? remainingTime.hours
                  : "0" + remainingTime.hours}
              </p>
            </div>
          </Col>

          <Col xs={3}>
            <p className="text-time black-60" style={textTime}>
              Mins
            </p>
            <div
              className="num-days-container text-center bg-deep-blue-100"
              style={numDaysContainer}
            >
              <p className="white-100 num-days text-center" style={numDays}>
                {remainingTime.minutes > 9
                  ? remainingTime.minutes
                  : "0" + remainingTime.minutes}
              </p>
            </div>
          </Col>

          <Col xs={3}>
            <p className="text-time black-60" style={textTime}>
              Secs
            </p>
            <div
              className="num-days-container text-center bg-deep-blue-100"
              style={numDaysContainer}
            >
              <p className="white-100 num-days text-center" style={numDays}>
                {remainingTime.seconds > 9
                  ? remainingTime.seconds
                  : "0" + remainingTime.seconds}
              </p>
            </div>
          </Col>
        </Row>
      </Container>

      <Container id="data_container" style={Data_Container_Style}>
        <Row>
          <Col>
            <h3
              className="deep-blue-100 text-center mx-auto mt-sm-5"
              id="data_heading"
              style={Data_Style}
            >
              Your Data is Safe with us
            </h3>
          </Col>
        </Row>

        <Row>
          <Col>
            <p
              className="sonic-silver text-center mx-auto"
              id="text-below-data"
              style={textBelowData}
            >
              Whatever data given to us is treated with confidentiality and will
              not be disclosed to any third party, neither wil we spam your
              mails or send any unrelated data. We are keen to ensure there is
              no breach of information on our part and you can be rest assured
              that we will protect any information gotten
            </p>
          </Col>
        </Row>

        <Row>
          <Col className="text-center mt-4 mb-4  mt-md-5 mb-md-5">
            <Button
              className="bg-green-100 white-100"
              id="btn-join-works"
              style={btnJoinWorks}
            >
              Sign up now
            </Button>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default KodeCamp30;
