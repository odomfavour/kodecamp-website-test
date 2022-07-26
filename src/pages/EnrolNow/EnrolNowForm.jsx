import { useState, useEffect } from "react";
import React from "react";
import "./EnrolNow.css";
import { useFormik } from 'formik';
import { Formval } from "./FormVal";
const EnrolNowForm = () => {
    const onSubmit = async(values, actions) => {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        actions.resetForm();
        alert("form submitted")
    };
    const {
        handleSubmit,
        errors,
        values,
        touched,
        handleChange,
        isSubmitting,
    } = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            phonenumber: '',
            gender: '',
            countryy: '',
            statee: '',
            cityy: '',
            level: '',
            learningtrack: '',
            aboutyou: '',
            aim: '',
            referal: ''
        },
        validationSchema: Formval,
        onSubmit,
    });
    const [country, setCountry] = useState([]);
    const [state, setState] = useState([]);
    const [city, setCity] = useState([]);

    const countries = [
        { id: "1", name: "Nigeria" },
        { id: "2", name: "USA" },
        { id: "3", name: "Canada" },
        { id: "4", name: "Ghana" },
        { id: "5", name: "Togo" },
        { id: "6", name: "Cameroun" },
        { id: "7", name: "India" },
        { id: "8", name: "Ghana" },
        { id: "9", name: "Japan" },
        { id: "10", name: "China" },
    ];

    const states = [
        { id: "1", countryId: "1", name: "Abia" },
        { id: "2", countryId: "1", name: "Adamawa" },
        { id: "3", countryId: "1", name: "AkwaIbom" },
        { id: "4", countryId: "1", name: "Anambra" },
        { id: "5", countryId: "1", name: "Bauchi" },
        { id: "6", countryId: "1", name: "Bayelsa" },
        { id: "7", countryId: "1", name: "Benue" },
        { id: "8", countryId: "1", name: "Cross River" },
        { id: "9", countryId: "1", name: "Delta" },
        { id: "10", countryId: "1", name: "Ebonyi" },
        { id: "11", countryId: "1", name: "Edo" },
        { id: "12", countryId: "1", name: "Ekiti" },
        { id: "13", countryId: "1", name: "Enugu" },
        { id: "14", countryId: "1", name: "Gombe" },
        { id: "15", countryId: "1", name: "Imo" },
        { id: "16", countryId: "1", name: "Jigawa" },
        { id: "17", countryId: "1", name: "Kaduna" },
        { id: "18", countryId: "1", name: "Kano" },
        { id: "19", countryId: "1", name: "Kastina" },
        { id: "20", countryId: "1", name: "Kebbi" },
        { id: "21", countryId: "1", name: "Kogi" },
        { id: "22", countryId: "1", name: "Kwara" },
        { id: "23", countryId: "1", name: "Lagos" },
        { id: "24", countryId: "1", name: "Nasarawa" },
        { id: "25", countryId: "1", name: " Niger" },
        { id: "26", countryId: "1", name: "Ogun" },
        { id: "27", countryId: "1", name: "Ondo" },
        { id: "28", countryId: "1", name: "Osun" },
        { id: "29", countryId: "1", name: "Oyo" },
        { id: "30", countryId: "1", name: "Plateau" },
        { id: "31", countryId: "1", name: "River" },
        { id: "32", countryId: "1", name: "Sokoto" },
        { id: "33", countryId: "1", name: "Taraba" },
        { id: "34", countryId: "1", name: "Yobe" },
        { id: "35", countryId: "1", name: "Nasarawa" },
        { id: "36", countryId: "1", name: "Zamfara" },
        { id: "37", countryId: "2", name: "Texas" },
        { id: "38", countryId: "2", name: "California" },
    ];

    const cities = [
        { id: "1", stateId: "23", name: "lekki" },
        { id: "2", stateId: "23", name: "Ikeja" },
        { id: "3", stateId: "3", name: "Uyo" },
        { id: "4", stateId: "3", name: "Eket" },
        { id: "5", stateId: "37", name: "Houston" },
        { id: "6", stateId: "37", name: "Austin" },
        { id: "7", stateId: "38", name: "Los Angeles" },
        { id: "8", stateId: "38", name: "Son Diego" },
        { id: "9", stateId: "23", name: "Agbara" },
        { id: "10", stateId: "1", name: "Umuahia" },
        { id: "11", stateId: "1", name: "ABA" },
        { id: "12", stateId: "1", name: "Eluoma" },
        { id: "13", stateId: "1", name: "Alayi" },
        { id: "14", stateId: "1", name: "Abiriba" },
        { id: "15", stateId: "1", name: "Arochukwu" },
        { id: "16", stateId: "1", name: "Ohuhu" },
        { id: "17", stateId: "1", name: "Umukabia" },
        { id: "18", stateId: "23", name: "Ikorodu" },
        { id: "19", stateId: "23", name: "Agbara" },
        { id: "20", stateId: "23", name: "Agege" },
        { id: "21", stateId: "23", name: "Alimosho" },
        { id: "22", stateId: "23", name: "Ifako-Ijaye" },
        { id: "23", stateId: "23", name: "Shomolu" },
        { id: "24", stateId: "23", name: "Oshodi-isolo" },
        { id: "25", stateId: "23", name: "Apapa" },
        { id: "26", stateId: "23", name: "Ajeromi-Ifelodun" },
        { id: "27", stateId: "23", name: "Lagos-Island" },
        { id: "28", stateId: "38", name: "Son Diego" },
        { id: "29", stateId: "23", name: "Agbara" },
        { id: "30", stateId: "23", name: "Ojo" },
        { id: "31", stateId: "23", name: "Epe" },
        { id: "32", stateId: "3", name: "Ikot Ekepene" },

    ];
    useEffect((country) => {
        setCountry(countries);
    },
        // eslint-disable-next-line react-hooks/exhaustive-deps
        []);
    const handleCountry = (name) => {
        const dt = states.filter((x) => x.countryId === name);
        setState(dt);
    };

    const handleState = (name) => {
        const dt = cities.filter((x) => x.stateId === name);
        setCity(dt);
    };
    const fontwgt = {
        fontWeight: "500"
    }
    return (
        <div className="container">
            <form onSubmit={handleSubmit} >
                <div className="my-4">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6   text-md-start">
                            <label
                                style={fontwgt}
                                htmlFor="firstname"
                                className="form-label enrollalignlabel"
                            >
                                First Name
                            </label>
                            <input
                                onChange={handleChange}
                                value={values.firstName}
                                id="firstName"
                                type="text"
                                className="form-control enroll-input form-controll"
                                placeholder="Name"
                                required
                            /> {errors.firstName && touched.firstName && <p className="error">{errors.firstName}</p>}
                        </div>
                        <div className="col-md-6  text-md-start d-none d-md-block">
                            <label
                                style={fontwgt}
                                htmlFor="lastname"
                                className="form-label enrollalignlabel "
                            >
                                Last Name
                            </label>
                            <input
                                onChange={handleChange}
                                value={values.lastName}
                                type="text"
                                id="lastName"
                                className="form-control enroll-input"
                                placeholder="Last Name"
                            /> {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
                        </div>
                    </div>
                    <div className=" my-4 text-md-start d-md-none d-lg-none">
                        <label
                            style={fontwgt}
                            htmlFor="name"
                            className="form-label enrollalignlabel"
                        >
                            Last Name
                        </label>
                        <input
                            onChange={handleChange}
                            value={values.lastName}
                            type="text"
                            id="lastName"
                            className="form-control enroll-input"
                            placeholder="Last Name"
                        /> {errors.lastName && touched.lastName && <p className="error">{errors.lastName}</p>}
                        
                    </div>
                </div>
                <div className="my-4">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6  text-md-start">
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                Email address
                            </label>
                            <input
                                onChange={handleChange}
                                value={values.email}
                                type="email"
                                id="email"
                                className="form-control enroll-input"
                                placeholder="Enter your Email address"
                            /> {errors.email && touched.email && <p className="error">{errors.email}</p>}
                        </div>
                        <div className="col-md-6  text-md-start d-none d-md-block">
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                Phone Number
                            </label>
                            <input
                                onChange={handleChange}
                                value={values.phonenumber}
                                type="text"
                                id="phonenumber"
                                className="form-control enroll-input"
                                placeholder="Enter your Phone Number"
                            />{errors.phonenumber && touched.phonenumber && <p className="error">{errors.phonenumber}</p>}
                        </div>
                    </div>
                    <div className=" my-4 text-md-start  d-md-none  d-lg-none">
                        <label style={fontwgt} className="form-label enrollalignlabel">
                            Phone Number
                        </label>
                        <input
                            onChange={handleChange}
                            value={values.phonenumber}
                            type="text"
                            id="phonenumber"
                            className="form-control enroll-input"
                            placeholder="Enter your Phone Number"
                        /> {errors.phonenumber && touched.phonenumber && <p className="error">{errors.phonenumber}</p>}
                    </div>
                </div>
                <div className="my-4">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6  text-md-start">
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                Gender
                            </label>
                            <select
                                onChange={handleChange}
                                value={values.gender}
                                className="form-select enroll-input "
                                name="gender"
                                id="gender"
                            >
                                <option value="level" selected disabled>
                                    Select Gender
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Prefer not to disclose">Prefer not to disclose</option>
                                <option value="Others">Others</option>
                            </select>
                            {errors.gender && touched.gender && <p className="error">{errors.gender}</p>}
                        </div>
                        <div className="col-md-6  text-md-start d-none d-md-block">
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                Country
                            </label>
                            <select
                                id="ddlCountry countryy"
                                name="countryy"
                                className="form-control enroll-input select-class"
                                onChange={(e) => {handleCountry(e.target.value)}}
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
                    <div className=" my-4 text-md-start   d-md-none d-lg-none">
                        <label style={fontwgt} className="form-label enrollalignlabel">
                            Country
                        </label>
                        <select
                            id="ddlCountry countryy"
                            name="countryy"
                            className="form-control enroll-input select-class"
                            onChange={(e) => {handleCountry(e.target.value) }}
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
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                State
                            </label>
                            <select
                                id="ddlStates"
                                className="form-control enroll-input select-class"
                                onChange={(e) => {handleState(e.target.value)}}
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
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                City
                            </label>
                            <select
                                id="ddlCity"
                                className="form-control enroll-input select-class"
                                onChange={handleChange}
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
                    <div className="my-4 text-md-start   d-md-none  d-lg-none">
                        <label style={fontwgt} className="form-label enrollalignlabel">
                            City
                        </label>
                        <select
                            id="ddlCity"
                            className="form-control enroll-input select-class"
                            onChange={handleChange}
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
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                What level are you applying for
                            </label>
                            <select
                                className="form-select enroll-input "
                                name="level"
                                id="level"
                                value={values.level}
                                onChange={handleChange}
                            >
                                <option value="level" selected disabled>
                                    Select Level
                                </option>
                                <option value="Beginner">Beginner</option>
                                <option value="Intermediate">Intermediate</option>
                                <option value="Advanced">Advanced</option>
                            </select> {errors.level && touched.level && <p className="error">{errors.level}</p>}
                        </div>
                        <div className="col-md-6  text-md-start d-none d-md-block">
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                Learning track
                            </label>
                            <select
                                value={values.learningtrack}
                                onChange={handleChange}
                                className="form-select enroll-input"
                                name="learningtrack"
                                id="learningtrack"
                            >
                                <option selected disabled>
                                    Select a learning track
                                </option>
                                <option value="Product Design">Product Design </option>
                                <option value="Enterpreneurship">Enterpreneurship</option>
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
                            </select> {errors.learningtrack && touched.learningtrack && <p className="error">{errors.learningtrack}</p>}
                        </div>
                        <div className="col-md-6 mt-4 text-md-start d-md-none">
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                Learning track
                            </label>
                            <select
                                value={values.learningtrack}
                                onChange={handleChange}
                                className="form-select enroll-input"
                                name="learningtrack"
                                id="learningtrack"
                            >
                                <option selected disabled>
                                    Select a learning track
                                </option>
                                <option value="Product Design">Product Design </option>
                                <option value="Enterpreneurship">Enterpreneurship</option>
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
                            {errors.learningtrack && touched.learningtrack && <p className="error">{errors.learningtrack}</p>}
                        </div>
                    </div>
                </div>
                <div className="my-4">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6  text-md-start">
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                How did you hear about kodecamp
                            </label>
                            <select
                                value={values.referal}
                                onChange={handleChange}
                                className="form-select enroll-input"
                                name="referal"
                                id="referal"
                            >
                                <option selected disabled>
                                    Select from list
                                </option>
                                <option value="Linkedln">Linkedln</option>
                                <option value="Facebook">Facebook</option>
                                <option value="Twitter">Twitter</option>
                                <option value="Instagram">Instagram </option>
                                <option value="From a Friend">From a Friend</option>
                                <option value="Newspaper Advert">Newspaper Advert</option>
                                <option value="Youtube">Youtube </option>
                                <option value="Others">Others</option>
                            </select>
                           {errors.referal && touched.referal && <p className="error">{errors.referal}</p>}
                        </div>
                        <div className="col-md-6  text-md-start d-none d-md-block"></div>
                    </div>
                </div>
                <div className="row mx-1 justify-content-center align-items-center">
                    <label
                        style={fontwgt}
                        htmlFor="query"
                        className="form-label enrollalignlabel"
                    >
                        Tell us about yourself
                    </label>
                    <textarea
                        value={values.aboutyou}
                        onChange={handleChange}
                        className="form-control z-depth-1 enrollaligntextarea"
                        rows="3"
                        maxLength="500"
                        name="aboutyou"
                        id="aboutyou"
                        placeholder="About you"
                    ></textarea>
                   {errors.aboutyou && touched.aboutyou && <p className="error">{errors.aboutyou}</p>}
                </div>
                <div className="row mx-1 justify-content-center align-items-center mt-4">
                    <label
                        style={fontwgt}
                        htmlFor="query"
                        className="form-label enrollalignlabel"
                    >
                        What do you aim to achieve at the end of the program
                    </label>
                    <textarea
                        value={values.aim}
                        onChange={handleChange}
                        className="form-control z-depth-1 enrollaligntextarea"
                        rows="3"
                        maxLength="500"
                        name="aim"
                        id="aim"
                        placeholder="Your Aim(s)"
                    ></textarea>
                     {errors.aim && touched.aim && <p className="error">{errors.aim}</p>}
                </div>
                <div className="justify-content-center align-items-center text-center">
                    <button type="submit"  disabled={isSubmitting} className="buttondisabled fwbd px-4 py-3 btn m-4 bg-green-100 white-100"  >
                        Join the Cohort
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EnrolNowForm;