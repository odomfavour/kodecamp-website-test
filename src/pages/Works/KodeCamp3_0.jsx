import { Container, Button  } from "react-bootstrap";
import  Row  from "react-bootstrap/esm/Row";
import Col  from "react-bootstrap/esm/Col";
import { Link } from "react-router-dom";

const KodeCamp3_0 = () => {
    const KodeCamp3_0_Style = {
        fontSize: "1.5em",
        fontWeight: "600",
        lineHeight: "1.8125em",
        width: "11.25em",
        height: "1.8125em"
    };

    const textBelowKodeCamp3_0 = {
        maxWidth: '56.625em',
        fontWeight: "500",
        fontSize: "1em",
        lineHeight: "2.25em"
    };

    const timeDaysContainer ={
        maxWidth: "600px"
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
        borderRadius: "8px"
    };

    const numDays = {
        fontWeight: "600",
        fontSize: "20px",
        lineHeight: "29px",
        width: "25px",
        height: "30px",
        padding: "14px 27px"
    };

    const Data_Style = {
        fontSize: "1.5em",
        fontWeight: "600",
        lineHeight: "1.5em",
        height: "1.5em"
    };

    const Data_Container_Style = {
        marginTop: "32px",
        borderRadius: "8px",
        maxWidth: "1070px",
        marginBottom: "50px"
    };

    const textBelowData =  {
        fontWeight: "500",
        fontSize: "0.875em",
        lineHeight: "1.5625em",
        margin: "0 42px",
        maxWidth: "740px"
    };

    const btnJoinWorks = {
        width: "160px",
        height: "44px",
        borderRadius: "4px",
        padding: "12px 16px",
        lineHeight: "19.5px",
        borderColor: "var(--green-100)"
    };


    return (
        <Container>

            <Container>
                <Row>
                    <Col>
                        <h2 className="deep-blue-100 text-center mx-auto" id="kodecamp3_0_heading" style={KodeCamp3_0_Style}>
                            KodeCamp 3.0
                        </h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <p className="sonic-silver text-center mx-auto" id="textBelowKodeCamp3_0" style={textBelowKodeCamp3_0}>
                            Want to have access to all the juicy contents and more? <Link to="/">Join</Link> the waitlist to apply for the next bootcamp training, Hurry now! 
                        </p>
                    </Col>
                </Row>
                <Row className="time-days-container mx-auto" style={timeDaysContainer}>
                    
                    <Col>
                        <p className="text-time black-60" style={textTime}>
                            Days
                        </p>
                        <div className="num-days-container text-center bg-deep-blue-100" style={numDaysContainer}>
                            <p className="white-100 num-days text-center" style={numDays}>
                                24
                            </p>
                        </div>
                    </Col>
                    
                    <Col>
                        <p className="text-time black-60" style={textTime}>
                            Hours
                        </p>
                        <div className="num-days-container text-center bg-deep-blue-100" style={numDaysContainer}>
                            <p className="white-100 num-days text-center" style={numDays}>
                                12
                            </p>
                        </div>
                    </Col>
                    
                    <Col>
                        <p className="text-time black-60" style={textTime}>
                            Mins
                        </p>
                        <div className="num-days-container text-center bg-deep-blue-100" style={numDaysContainer}>
                            <p className="white-100 num-days text-center" style={numDays}>
                                12
                            </p>
                        </div>
                    </Col>
                    
                    <Col>
                        <p className="text-time black-60" style={textTime}>
                            Secs
                        </p>
                        <div className="num-days-container text-center bg-deep-blue-100" style={numDaysContainer}>
                            <p className="white-100 num-days text-center" style={numDays}>
                                12
                            </p>
                        </div>
                    </Col>

                </Row>
            </Container>

            <Container id="data_container" style={Data_Container_Style}>
                <Row>
                    <Col>
                        <h3 className="deep-blue-100 text-center mx-auto mt-5" id="data_heading" style={Data_Style}>
                            Your Data is Safe with us
                        </h3>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <p className="sonic-silver text-center mx-auto" id="text-below-data" style={textBelowData}>
                            Whatever data given to us is treated with confidentiality and will not be disclosed to any third party, neither 
                            wil we spam your mails or send any unrelated data. We are keen to ensure there is no breach of information on our 
                            part and you can be rest assured that we will protect any information gotten
                        </p>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center mt-4 mb-4  mt-md-5 mb-md-5">
                        <Button className="bg-green-100 white-100" id="btn-join-works" style={btnJoinWorks}>
                            Join the Cohort
                        </Button>
                    </Col>
                </Row>

            </Container>

        </Container>
    );
}
 
export default KodeCamp3_0;