import React from 'react'
import land from "../../Images/LandingPage/image.svg";
import sponsor1 from "../../Images/LandingPage/path31.png"
import sponsor2 from "../../Images/LandingPage/KodeHauz.png"
import sponsor3 from "../../Images/LandingPage/HNG.png"
import pattern from "../../Images/LandingPage/pattern.png"
import cross from "../../Images/LandingPage/cross.png"
import moon from "../../Images/LandingPage/moon.png"
import intern from "../../Images/LandingPage/internship.svg"
import remote from "../../Images/LandingPage/remote.png"
import mentor from "../../Images/LandingPage/mentorship.png"
import "./Land.css"
import { Link } from 'react-router-dom';
const Land = () => {
    const contain = {
        position: "relative"
    }
    const patternsty = {
        width: "240px",
        height: "130px",
        position: "absolute",
        bottom: "-15%",
        right: "15%"
    }
    const crossty = {
        width: "40px",
        height: "40px",
        position: "absolute",
        top: "10%",
        right: "8%"
    }
    const moonsty = {
        width: "100px",
        position: "absolute",
        top: "20%",
        left: "-2%"
    }
    const deskpatternsty = {
        width: "220px",
        height: "130px",
        position: "absolute",
        bottom: "10%",
        right: "60%"
    }
    const deskcrossty = {
        width: "50px",
        height: "50px",
        position: "absolute",
        top: "60%",
        right: "10%"
    }
    const deskmoonsty = {
        width: "105px",
        position: "absolute",
        top: "-2%",
        right: "70%"
    }
    const deskmentorsty = {
        position: "absolute",
        top: "15%",
        right: "45%"
    }
    const deskinternsty = {
        position: "absolute",
        top: "70%",
        right: "18%"
    }
    const deskremotesty = {
        position: "absolute",
        top: "50%",
        right: "40%"
    }
    const mentorsty = {
        position: "absolute",
        top: "-4%",
        right: "30%"
    }
    const internsty = {
        position: "absolute",
        top: "70%",
        right: "5%"
    }
    const remotesty = {
        position: "absolute",
        top: "50%",
        left: "-2%"
    }
    return (
        <div className="container-lg">
            <div className="row rowlg mt-5">
                <div className="col d-none d-md-block d-lg-block  ">
                    <h1 className='display-5 deep-blue-100 fw-bold my-4'>
                        Kickstart and
                        Develop your career
                        in <span className="green-100">Tech</span>.</h1>
                    <h5 className='my-2 lh-base  deep-blue-100'>
                        Join the KodeCamp internship and gain <br />
                        relevant skills to kickstart and develop your  <br />
                        career in the ever growing tech space.
                    </h5>
                    <button className='border-0  rounded bg-green-100 white-100 btnpadding mt-4 '>Get Started</button>
                </div>
                <div className="col d-none d-md-block d-lg-block" style={contain}>
                    <img className='img-fluid' src={land} alt="" />
                    <img src={moon} style={deskmoonsty} alt="" className="img-fluid" />
                    <img src={cross} style={deskcrossty} alt="" className="img-fluid" />
                    <img src={pattern} style={deskpatternsty} alt="" className="img-fluid" />
                    <img src={mentor} style={deskmentorsty} alt="" className="img-fluid" />
                    <img src={intern} style={deskinternsty} alt="" className="img-fluid" />
                    <img src={remote} style={deskremotesty} alt="" className="img-fluid" />
                </div>
            </div>
            <hr className='d-none d-md-block d-lg-block' />
            <div className="row rowlg d-none d-md-block d-lg-block text-center mt-5">
                <h1 className='my-5 sponsorfontsize1 deep-blue-100 fw-bold'>
                    OUR SPONSORS
                </h1>
                <h3 className='sponsorfontsize2  lh-base deep-blue-100'>
                    We are a trusted tech stop for talents globally, aiming to increase the  percentage
                    deployed into the workforce. As a sponsor, you stand to gain the audience that comes
                    with the brand and also be affiliated with us. Check out our existing sponsors today!
                </h3>
                <div className="row d-flex flex-row mt-5 ">
                    <div className="col"></div>
                        <img className="col" src={sponsor1} alt="" />
                        <img className="col" src={sponsor2} alt="" />   
                        <img className="col" src={sponsor3} alt="" />
                    <div className="col"></div>
                </div>
                <button className='btn bg-green-100 white-100 my-5 rounded sponsorwidth '>Become a sponsor</button>
            </div>
            <hr className='d-none d-md-block d-lg-block' />

            <div className="rowmobile text-center d-md-none d-lg-none">
                <h1 className='display-3 my-1 deep-blue-100 fw-bold text-center'>
                    Kickstart and 
                    Develop your career
                    in  <span className="green-100">Tech</span>.
                </h1>
                <div className=" mt-4  ">
                    <div style={contain}>
                        <img src={land} alt="" className='img-fluid' />
                        <img src={moon} style={moonsty} alt="" className="img-fluid" />
                        <img src={cross} style={crossty} alt="" className="img-fluid" />
                        <img src={pattern} style={patternsty} alt="" className="img-fluid" />
                        <img src={mentor} style={mentorsty} alt="" className="img-fluid" />
                    <img src={intern} style={internsty} alt="" className="img-fluid" />
                    <img src={remote} style={remotesty} alt="" className="img-fluid" />
                    </div>
                </div>
                <div className="mt-5">
                    <button className='btn bg-green-100 white-100 mt-4 imagepaddingmobile '>Get Started</button>
                </div>
                <div className="mt-5">
                     <Link to="
                /availabletracks" className="text-decoration-none deep-blue-100 avail fw-bold">
                AVAILABLE TRACKS
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Land
