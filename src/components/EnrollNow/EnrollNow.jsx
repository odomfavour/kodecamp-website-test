import { useState } from "react";
import { useEffect } from "react";
import React from "react";
import img1 from "../../Images/Pexels Photo by Cytonn Photography.jpg";
import img2 from "../../Images/picture1.jpg"
import "./EnrollNow.css";
import PageWrapper from "../../layout/PageWapper/PageWrapper";
const EnrollNow = () => {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [phonenumber, setPhonenumber] = useState("");
    const [gender, setGender] = useState("");
    const [countryy, setCountryy] = useState("");
    const [statee, setStatee] = useState("");
    const [cityy, setCityy] = useState("");
    const [level, setLevel] = useState("");
    const [learningtrack, setLearningtrack] = useState("");
    const [referal, setReferal] = useState("");
    const [aboutyou, setAboutyou] = useState("");
    const [aim, setAim] = useState("");
    function handleSubmit(e) {
        e.preventDefault();
        setFirstname("");
        setLastname("");
        setEmail("");
        setPhonenumber("");
        setGender("");
        setCountryy("");
        setStatee("");
        setCityy("");
        setLevel("");
        setLearningtrack("");
        setReferal("");
        setAboutyou("");
        setAim("");
        alert("form submited");
    }

    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);

    const countries = [
        { id: "1", name: "Nigeria" },
        { id: "2", name: "Usa" },
    ];

    const states = [
        { id: "1", countryId: "1", name: "Lagos" },
        { id: "2", countryId: "1", name: "AkwaIbom" },
        { id: "3", countryId: "2", name: "Texas" },
        { id: "4", countryId: "2", name: "California" },
    ];

    const cities = [
        { id: "1", stateId: "1", name: "lekki" },
        { id: "2", stateId: "1", name: "Ikeja" },
        { id: "3", stateId: "2", name: "Uyo" },
        { id: "4", stateId: "2", name: "Eket" },
        { id: "1", stateId: "3", name: "Houston" },
        { id: "2", stateId: "3", name: "Austin" },
        { id: "3", stateId: "4", name: "Los Angeles" },
        { id: "4", stateId: "4", name: "Son Diego" },
        { id: "5", stateId: "1", name: "Agbara" },
    ];

    useEffect(() => {
        setCountry(countries);
    }, []);

    const handleCountry = (name) => {
        const dt = states.filter((x) => x.countryId === name);
        setState(dt);
    };

    const handleState = (name) => {
        const dt = cities.filter((x) => x.stateId === name);
        setCity(dt);
    };

    const ImageStyle1 = {
        borderRadius: "4px",
        width: "600px",
        //height: "600px",
        left: "100px",
        marginTop: "90px",
        // paddingRight : "16px"
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
    const label = {
        width: "147px",
        height: "29px",
        fontSize: "18px",
        lineHeight: "120%",
    };
    const input = {
        width: "585px",
        height: "75px",
        fontSize: "18px",
        border: "0.5px solid #757575",
        borderRadius: "4px",
    };
    const textarea = {
        width: "900px",
        height: "200px",
    };
    const bgcolor = {
        background: "#669E00",
        color: "#fff",
    };
    return (
        <PageWrapper>
            <div className="container-md">
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
                        The tech space is waiting to see the amazing things you are
                        capable of.
                    </h6>
                </div>
                <div>
                    <div>
                        <form onSubmit={handleSubmit}>
                            <div className="my-4">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-6   text-md-start">
                                        <label
                                            htmlFor="firstname"
                                            className="fw-bold fw-bold form-label enrollalignlabel"
                                        >
                                            First Name
                                        </label>
                                        <input
                                            value={firstname}
                                            onChange={(e) => {
                                                setFirstname(e.target.value);
                                            }}
                                            type="text"
                                            className="form-control enroll-input"
                                            placeholder="Name"
                                        />
                                    </div>
                                    <div className="col-md-6  text-md-start d-none d-md-block">
                                        <label
                                            htmlFor="lastname"
                                            className="fw-bold form-label enrollalignlabel "
                                        >
                                            Last Name
                                        </label>
                                        <input
                                            value={lastname}
                                            onChange={(e) => {
                                                setLastname(e.target.value);
                                            }}
                                            type="text"
                                            className="form-control enroll-input"
                                            placeholder="Last Name"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 my-4 text-md-start d-md-none d-lg-none">
                                    <label
                                        htmlFor="name"
                                        className="fw-bold form-label enrollalignlabel"
                                    >
                                        Last Name
                                    </label>
                                    <input
                                        value={lastname}
                                        onChange={(e) => {
                                            setLastname(e.target.value);
                                        }}
                                        type="text"
                                        className="form-control enroll-input"
                                        placeholder="Last Name"
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-6  text-md-start">
                                        <label className="fw-bold form-label enrollalignlabel">
                                            Email address
                                        </label>
                                        <input
                                            value={email}
                                            onChange={(e) => {
                                                setEmail(e.target.value);
                                            }}
                                            type="email"
                                            className="form-control enroll-input"
                                            placeholder="Enter your Email address"
                                        />
                                    </div>
                                    <div className="col-md-6  text-md-start d-none d-md-block">
                                        <label className="fw-bold form-label enrollalignlabel">
                                            Phone Number
                                        </label>
                                        <input
                                            value={phonenumber}
                                            onChange={(e) => {
                                                setPhonenumber(e.target.value);
                                            }}
                                            type="text"
                                            className="form-control enroll-input"
                                            placeholder="Enter your Phone Number"
                                        />
                                    </div>
                                </div>
                                <div className="col-md-6 my-4  text-md-start  d-md-none  d-lg-none">
                                    <label className="fw-bold form-label enrollalignlabel">
                                        Phone Number
                                    </label>
                                    <input
                                        value={phonenumber}
                                        onChange={(e) => {
                                            setPhonenumber(e.target.value);
                                        }}
                                        type="text"
                                        className="form-control enroll-input"
                                        placeholder="Enter your Phone Number"
                                    />
                                </div>
                            </div>
                            <div className="my-4">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-6  text-md-start">
                                        <label className="fw-bold form-label enrollalignlabel">
                                            Gender
                                        </label>
                                        <select
                                            value={gender}
                                            onChange={(e) => {
                                                setGender(e.target.value);
                                            }}
                                            className="form-select enroll-input"
                                            name="gender"
                                            id="gender"
                                        >
                                            <option value="male" selected disabled>
                                                Select Gender
                                            </option>
                                            <option value="male">Male</option>
                                            <option value="female">Female</option>
                                            <option value="disclose">Choose not to disclose</option>
                                            <option value="others">Others</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6  text-md-start d-none d-md-block">
                                        <label className="fw-bold form-label enrollalignlabel">
                                            Country
                                        </label>
                                        <select
                                            id="ddlCountry"
                                            className="form-control enroll-input select-class"
                                            onChange={(e) => [
                                                handleCountry(e.target.value),
                                                setCountryy(e.target.value),
                                            ]}
                                        >
                                            <option value="0">Select Country</option>
                                            {country && country !== undefined
                                                ? country.map((ctr, index) => {
                                                    return (
                                                        <option key={index} value={ctr.id}>
                                                            {ctr.name}
                                                        </option>
                                                    );
                                                })
                                                : "No Country"}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 my-4 text-md-start  d-md-none d-lg-none">
                                    <label className="fw-bold form-label enrollalignlabel">
                                        Country
                                    </label>
                                    <select
                                        id="ddlCountry"
                                        className="form-control enroll-input select-class"
                                        onChange={(e) => [
                                            handleCountry(e.target.value),
                                            setCountryy(e.target.value),
                                        ]}
                                    >
                                        <option value="0">Select Country</option>
                                        {country && country !== undefined
                                            ? country.map((ctr, index) => {
                                                return (
                                                    <option key={index} value={ctr.id}>
                                                        {ctr.name}
                                                    </option>
                                                );
                                            })
                                            : "No Country"}
                                    </select>
                                </div>
                            </div>
                            <div className="my-4">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-6  text-md-start">
                                        <label className="fw-bold form-label enrollalignlabel">
                                            State
                                        </label>
                                        <select
                                            id="ddlStates"
                                            className="form-control enroll-input select-class"
                                            onChange={(e) => [
                                                handleState(e.target.value),
                                                setStatee(e.target.value),
                                            ]}
                                        >
                                            <option value="0">Select State</option>
                                            {state && state !== undefined
                                                ? state.map((ctr, index) => {
                                                    return (
                                                        <option key={index} value={ctr.id}>
                                                            {ctr.name}
                                                        </option>
                                                    );
                                                })
                                                : "No State"}
                                        </select>
                                    </div>
                                    <div className="col-md-6  text-md-start d-none d-md-block">
                                        <label className="fw-bold form-label enrollalignlabel">
                                            City
                                        </label>
                                        <select
                                            id="ddlCity"
                                            className="form-control enroll-input select-class"
                                            onChange={(e) => setCityy(e.target.value)}
                                        >
                                            <option value="0">Select City</option>
                                            {city && city !== undefined
                                                ? city.map((ctr, index) => {
                                                    return (
                                                        <option key={index} value={ctr.id}>
                                                            {ctr.name}
                                                        </option>
                                                    );
                                                })
                                                : "No City"}
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-6 my-4 text-md-start  d-md-none  d-lg-none">
                                    <label className="fw-bold form-label enrollalignlabel">
                                        City
                                    </label>
                                    <select
                                        id="ddlCity"
                                        className="form-control enroll-input select-class"
                                        onChange={(e) => setCityy(e.target.value)}
                                    >
                                        <option value="0">Select City</option>
                                        {city && city !== undefined
                                            ? city.map((ctr, index) => {
                                                return (
                                                    <option key={index} value={ctr.id}>
                                                        {ctr.name}
                                                    </option>
                                                );
                                            })
                                            : "No City"}
                                    </select>
                                </div>
                            </div>
                            <div className="my-4">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-6  text-md-start">
                                        <label className="fw-bold form-label enrollalignlabel">
                                            What level are you applying for
                                        </label>
                                        <select
                                            className="form-select enroll-input "
                                            name="level"
                                            id="level"
                                            onChange={(e) => setLevel(e.target.value)}
                                        >
                                            <option value="level" selected disabled>
                                                Select Level
                                            </option>
                                            <option value="beginner">Beginner</option>
                                            <option value="intermediate">Intermediate</option>
                                            <option value="advanced">Advanced</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6  text-md-start d-none d-md-block">
                                        <label className="fw-bold form-label enrollalignlabel">
                                            Learning track
                                        </label>
                                        <select
                                            className="form-select enroll-input"
                                            name="track"
                                            id="track"
                                            onChange={(e) => setLearningtrack(e.target.value)}
                                        >
                                            <option selected disabled>
                                                Select a learning track
                                            </option>
                                            <option value="Product Design">Product Design </option>
                                            <option value="Enterpreneurship">
                                                Enterpreneurship
                                            </option>
                                            <option value="Frontend development">
                                                Frontend development
                                            </option>
                                            <option value="Android Development">
                                                Android Development{" "}
                                            </option>
                                            <option value="Backend Development">
                                                Backend Development{" "}
                                            </option>
                                            <option value="Digital Marketing">
                                                Digital Marketing
                                            </option>
                                            <option value="AutoCAD ">AutoCAD </option>
                                            <option value="Internet of Things (IOT)">
                                                Internet of Things (IOT)
                                            </option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="my-4">
                                <div className="row justify-content-center align-items-center">
                                    <div className="col-md-6  text-md-start">
                                        <label className="fw-bold form-label enrollalignlabel">
                                            How did you hear about kodecamp
                                        </label>
                                        <select
                                            className="form-select enroll-input"
                                            name="gender"
                                            id="gender"
                                            onChange={(e) => setReferal(e.target.value)}
                                        >
                                            <option selected disabled>
                                                Select from list
                                            </option>
                                            <option value="Linkedln">Linkedln</option>
                                            <option value="Facebook">Facebook</option>
                                            <option value="Twitter">Twitter</option>
                                            <option value="Instagram">Instagram </option>
                                            <option value="From a Friend">From a Friend</option>
                                            <option value="Newspaper Advert">
                                                Newspaper Advert
                                            </option>
                                            <option value="Youtube">Youtube </option>
                                            <option value="Others">Others</option>
                                        </select>
                                    </div>
                                    <div className="col-md-6  text-md-start d-none d-md-block"></div>
                                </div>
                            </div>
                            <div className="row mx-1 justify-content-center align-items-center">
                                <label
                                    htmlFor="query"
                                    className="fw-bold form-label enrollalignlabel"
                                >
                                    Tell us about yourself
                                </label>
                                <textarea
                                    value={aboutyou}
                                    className="form-control z-depth-1 enrollaligntextarea"
                                    onChange={(e) => setAboutyou(e.target.value)}
                                    rows="3"
                                    name="aboutyourself"
                                    id="aboutyourself"
                                    placeholder="About you"
                                ></textarea>
                            </div>
                            <div className="row mx-1 justify-content-center align-items-center mt-4">
                                <label
                                    htmlFor="query"
                                    className="fw-bold form-label enrollalignlabel"
                                >
                                    What do you aim to achieve at the end of the program
                                </label>
                                <textarea
                                    value={aim}
                                    className="form-control z-depth-1 enrollaligntextarea"
                                    onChange={(e) => setAim(e.target.value)}
                                    rows="3"
                                    name="aboutyourself"
                                    id="aboutyourself"
                                    placeholder="Your Aim(s)"
                                ></textarea>
                            </div>
                            <div className="justify-content-center align-items-center text-center">
                                <button type="submit" className="btn m-4 " style={bgcolor}>
                                    Join the Cohort
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            </PageWrapper>
    );
};

export default EnrollNow;
