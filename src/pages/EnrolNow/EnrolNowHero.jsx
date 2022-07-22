import React from 'react'
import "./EnrolNow.css"
import img1 from "../../Images/EnrollNow/image2.jpg";
import img2 from "../../Images/EnrollNow/image1.jpg";
const EnrolNowHero = () => {
    const ImageStyle1 = {
        borderRadius: "4px",
        width: "600px",
        left: "100px",
        marginTop: "90px",
    };

    const ImageStyle2 = {
        left: "738px",
        width: "600px",
        paddingLeft: "0",
    };
    const desc = {
        display: "flex",
        flexDirection: "row",
        alignItems: "flex-start",
        padding: "10px",
        gap: "10px",
    };
    return (
        <div className='container'>
                  <div className="row imgs justify-content-center align-items-center">
                    <div className="col-md-6 text-center text-md-start d-none d-md-block">
                        <img
                            style={ImageStyle1}
                            className="img-fluid"
                            src={img2}
                            alt="pic"
                        />
                    </div>
                    <div className="col-md-6 text-center ">
                        <img
                            style={ImageStyle2}
                            className="img-fluid"
                            src={img1}
                            alt="pic"
                        />
                    </div>
                </div>

                <div className="row d-none d-md-block mt-5" style={desc}>
                    <h4 className="enroll-h4 mt-5 fw-bold">Register</h4>
                    <h6 className="enroll-h6 mt-3">Welcome to Kodecamp</h6>
                    <h6 className="enroll-h6">
                        Join the next cohort and become the next tech expert.{" "}
                    </h6>
                    <h6 className="enroll-h6">
                        The tech space is waiting to see the amazing things you are capable
                        of.
                    </h6>
                </div>
        </div>
    )
}

export default EnrolNowHero