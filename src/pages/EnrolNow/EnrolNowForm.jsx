import { useState, useEffect } from "react";
import React from "react";
import "./EnrolNow.css";
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";
const EnrolNowForm = () => {
    const [planets, setPlanets] = useState({});
    const [errors, setErrors] = useState({});
    const [country, setCountry] = useState("");
    const [fetchstates, setFetchStates] = useState({});
    const [states, setStates] = useState({});
    const [fetchCity, setFetchCity] = useState({});
    const [city, setCity] = useState({});
    useEffect(() => {
       function fetchData() {
         fetch("https://countriesnow.space/api/v0.1/countries/states")
          .then(response => response.json())
          .then(data => setPlanets(data))
          // .then(()=>console.log(planets.data))
          .catch(err => {setErrors(err)
            console.log(err)
          });
      }
      fetchData();
    }, []);
  useEffect(()=>{
    function fetchState(){
      fetch("https://countriesnow.space/api/v0.1/countries/states", {
        method: "POST",
        body: JSON.stringify({
            "country": `${country}`
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
        .then(res => setFetchStates(res.data))
      .catch(err => {setErrors(err)
        console.log(err)
      })}
      if (country){
        fetchState();
      }
    
  },[country])
  useEffect(()=>{
    function fetchCities(){
      fetch("https://countriesnow.space/api/v0.1/countries/state/cities", {
        method: "POST",
        body: JSON.stringify({
            "country": `${country}`,
            "state": `${states}`
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      })
      .then(response => response.json())
          .then(data => setFetchCity(data))
          //.then(()=>console.log(fetchCity.data))
          .catch(err => {setErrors(err)
            console.log(errors)
          });
    }
      if (states){
        fetchCities();
      }
  },[states])
    const [inputErrors, setInputErrors] = useState({});
    const [isSubmit,setIsSubmit] = useState(false);
    const [inputField , setInputField] = useState({
        firstname: '',
        lastname: '',
        emailaddress: '',
        phonenumber: '',
        aim: '',
        aboutyou:'',
        learningtrack: '',
        referal: '',
        level:'',
        gender:'',
    })
    const handleChange = (e) =>{
      let value = e.target.value;
      setInputField( {
        ...inputField,[e.target.name]: value
      });
      // console.log(inputField);
    }
    const handleSubmit = (e) =>{
      e.preventDefault();
      setInputErrors(validate(inputField));
      setIsSubmit(true);
      console.log(country);
      console.log(states);
      console.log(city);

     
    if (Object.keys(inputErrors).length === 0 && isSubmit) {
        Swal.fire({
            icon: "success",
            title: "Form Submitted",
            confirmButtonColor: "#669e00",
          })
          .then(() =>{
              setInputField({
                firstname: '',
                lastname: '',
                emailaddress: '',
                phonenumber: '',
                aim: '',
                aboutyou:'',
                learningtrack: '',
                referal: '',
                level:'',
                gender:'',
              }
              )
          })
      };
    }
    useEffect(() => {
      // console.log(inputErrors);
      if (Object.keys(inputErrors).length === 0 && isSubmit){
        console.log(inputField);
      }
    }, [inputErrors, inputField, isSubmit])
  
    const validate = (values) =>{
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if(validate){
            if(!values.firstname){
           errors.firstname = "First Name is required"
        }
        if(!values.lastname){
            errors.lastname = "Last Name is required"
          }
        if(!values.emailaddress){
          errors.emailaddress = "Email is required"
        }else if (!regex.test(values.emailaddress)){
          errors.emailaddress = "This is not a valid email format"
        }
        if(!values.phonenumber){
          errors.phonenumber = "Phone number is required"
        }
        if(!values.aboutyou){
          errors.aboutyou = "Please input your message"
        }
        if(!values.aim){
            errors.aim = "Please input your message"
          }
          if(!values.gender){
            errors.gender = "Please select a value"
          }
          if(!values.level){
            errors.level = "Please select a value"
          }
          if(!values.learningtrack){
            errors.learningtrack = "Please select a value"
          }
          if(!values.referal){
            errors.referal = "Please select a value"
          }
       return errors;
    }
       else{
        console.log(country);
        console.log(states);
        console.log(city);
        alert("form submitted")
    }
} 
  
    const fontwgt = {
        fontWeight: "500"
    }
    return (
        <div className="container">
            <form noValidate onSubmit={handleSubmit}>
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
                                name="firstname"
                                onChange={handleChange} 
                                value={inputField.firstname} 
                                type="text"
                                className="form-control enroll-input form-controll"
                                placeholder="Enter your first name"
                            />
                        <p className='err-message'>{inputErrors.firstname}</p>       
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
                                name="lastname"
                                onChange={handleChange} 
                                value={inputField.lastname} 
                                type="text"
                                className="form-control enroll-input"
                                placeholder="Enter your Last Name"
                            />
                            <p className='err-message'>{inputErrors.lastname}</p> 
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
                        name="lastname"
                            onChange={handleChange} 
                            value={inputField.lastname} 
                            type="text"
                            className="form-control enroll-input"
                            placeholder="Enter your Last Name"
                        />
                        <p className='err-message'>{inputErrors.lastname}</p>    
                    </div>
                </div>
                <div className="my-4">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6  text-md-start">
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                Email address
                            </label>
                            <input
                            name="emailaddress"
                            onChange={handleChange} 
                            value={inputField.emailaddress} 
                                type="email"
                                className="form-control enroll-input"
                                placeholder="Enter your Email address"
                            />
                            <p className='err-message'>{inputErrors.emailaddress}</p>    
                        </div>
                        <div className="col-md-6  text-md-start d-none d-md-block">
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                Phone Number
                            </label>
                            <input
                            name="phonenumber"
                            id="phonenumber"
                            onChange={handleChange} 
                            value={inputField.phonenumber} 
                                type="text"
                                className="form-control enroll-input"
                                placeholder="+234 812 555 0126" 
                            />
                            <p className='err-message'>{inputErrors.phonenumber}</p>    
                        </div>
                    </div>
                    <div className=" my-4 text-md-start  d-md-none  d-lg-none">
                        <label style={fontwgt} className="form-label enrollalignlabel">
                            Phone Number
                        </label>
                        <input
                        name="phonenumber"
                        onChange={handleChange} 
                        value={inputField.phonenumber} 
                            type="text"
                            className="form-control enroll-input"
                            placeholder="+234 812 555 0126" 
                        />
                        <p className='err-message'>{inputErrors.phonenumber}</p>    
                    </div>
                </div>
                <div className="my-4">
                    <div className="row justify-content-center align-items-center">
                        <div className="col-md-6  text-md-start">
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                Gender
                            </label>
                            <select
                                className="form-select enroll-input "
                                name="gender"
                                id="gender"
                                onChange={handleChange} 
                                value={inputField.gender} 
                            >
                                <option value="" selected >
                                    Select Gender
                                </option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Prefer not to disclose">Prefer not to disclose</option>
                                <option value="Others">Others</option>
                            </select>
                            <p className='err-message'>{inputErrors.gender}</p> 
                        </div>
                        <div className="col-md-6  text-md-start d-none d-md-block">
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                Country
                            </label>
                            <select
                                name="country"
                                id="country"
                                className="form-control enroll-input select-class"
                                onChange={(e) => [
                                    setCountry(e.target.value)
                                ]} 
                                value={country}
                            > 
                            <option value="" selected>Select a country</option>
                            { planets.data && planets.data.map((item ,index)=><option name={item.name} value={item.name} key={index}>{item.name}</option> )   } 
                            </select>   
                        </div>
                    </div>
                    <div className=" my-4 text-md-start   d-md-none d-lg-none">
                        <label style={fontwgt} className="form-label enrollalignlabel">
                            Country
                        </label>
                        <select
                                name="country"
                                id="country"
                                className="form-control enroll-input select-class"
                                onChange={(e) => [
                                    setCountry(e.target.value)
                                ]} 
                                value={country}
                            >         
        <option value="">Select a country</option>
      { planets.data && planets.data.map((item ,index)=><option value={item.name} key={index}>{item.name}</option> )   } 
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
                                name="states"
                                id="states"
                                onChange={(e) => [setStates(e.target.value)]} 
                                value={states}  
                                className="form-control enroll-input select-class"
                            >
        <option value="">Select a State</option>
      { fetchstates.states && fetchstates.states.map((item ,index)=><option value={item.name} key={index}>{item.name}</option> ) } 
      </select>
                        </div>
                        <div className="col-md-6  text-md-start d-none d-md-block">
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                City
                            </label>
                            <select
                                id="city"
                               name="city"
                                className="form-control enroll-input select-class"
                                onChange={(e) => [setCity(e.target.value)]} 
                                value={city}
                            >
        <option value="">Select a City</option>
      { fetchCity.data && fetchCity.data.map((item ,index)=><option value={item} key={index}>{item}</option> ) } 
      </select>
                        </div>
                    </div>
                    <div className="my-4 text-md-start   d-md-none  d-lg-none">
                        <label style={fontwgt} className="form-label enrollalignlabel">
                            City
                        </label>
                        <select
                          onChange={(e) => [setCity(e.target.value)]}
                            value={city}
                                id="city"
                               name="city"
                                className="form-control enroll-input select-class"   
                            >
                            
        <option value="">Select a City</option>
      { fetchCity.data && fetchCity.data.map((item ,index)=><option value={item} key={index}>{item}</option> ) } 
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
                                onChange={handleChange} 
                                value={inputField.level}
                            >
                                <option  selected value="">
                                    Select Level
                                </option>
                                <option value="beginner">Beginner</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="advanced">Advanced</option>
                            </select>
                            <p className='err-message'>{inputErrors.level}</p>    
                        </div>
                        <div className="col-md-6  text-md-start d-none d-md-block">
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                Learning track
                            </label>
                            <select
                                className="form-select enroll-input"
                                name="learningtrack"
                                id="learningtrack"
                                onChange={handleChange} 
                                value={inputField.learningtrack}
                            >
                                <option selected value="">
                                    Select a learning track
                                </option>
                                <option value="Product Design">Product Design </option>
                                <option value="Enterpreneurship">Enterpreneurship</option>
                                <option value="Frontend development">
                                    Frontend development
                                </option>
                                <option value="Android Development">
                                    Android Development
                                </option>
                                <option value="Backend Development">
                                    Backend Development
                                </option>
                                <option value="Digital Marketing">
                                    Digital Marketing
                                </option>
                                <option value="AutoCAD ">AutoCAD </option>
                                <option value="Internet of Things (IOT)">
                                    Internet of Things (IOT)
                                </option>
                            </select>
                            <p className='err-message'>{inputErrors.learningtrack}</p> 
                        </div>
                        <div className="col-md-6 mt-4 text-md-start d-md-none">
                            <label style={fontwgt} className="form-label enrollalignlabel">
                                Learning track
                            </label>
                            <select
                                
                                className="form-select enroll-input"
                                name="learningtrack"
                                id="learningtrack"
                                onChange={handleChange} 
                                value={inputField.learningtrack} 
                            >
                                <option selected value="">
                                    Select a learning track
                                </option>
                                <option value="Product Design">Product Design </option>
                                <option value="Enterpreneurship">Enterpreneurship</option>
                                <option value="Frontend development">
                                    Frontend development
                                </option>
                                <option value="Android Development">
                                    Android Development
                                </option>
                                <option value="Backend Development">
                                    Backend Development
                                </option>
                                <option value="Digital Marketing">
                                    Digital Marketing
                                </option>
                                <option value="AutoCAD ">AutoCAD </option>
                                <option value="Internet of Things (IOT)">
                                    Internet of Things (IOT)
                                </option>
                            </select>
                            <p className='err-message'>{inputErrors.learningtrack}</p> 
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
                                name="referal"
                                onChange={handleChange} 
                                value={inputField.referal} 
                                className="form-select enroll-input"
                                id="referal"
                            >
                                <option selected value="">
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
                            <p className='err-message'>{inputErrors.referal}</p> 
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
                        className="form-control z-depth-1 enrollaligntextarea"
                        onChange={handleChange} 
                        value={inputField.aboutyou} 
                        rows="3"
                        maxLength="500"
                        name="aboutyou"
                        id="aboutyou"
                        placeholder="About you"
                    ></textarea>
                    <p className='err-message'>{inputErrors.aboutyou}</p>  
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
                        className="form-control z-depth-1 enrollaligntextarea"
                        onChange={handleChange} 
                        value={inputField.aim} 
                        rows="3"
                        maxLength="500"
                        name="aim"
                        id="aim"
                        placeholder="Your Aim(s)"
                    ></textarea>
                    <p className='err-message'>{inputErrors.aim}</p>  
                </div>
                <div className="justify-content-center align-items-center text-center">
                    <button type="submit" className="fwbd px-5 py-3 btn m-4 bg-green-100 white-100"  >
                        Join the Cohort
                    </button>
                </div>
            </form>
        </div>
    );
};

export default EnrolNowForm;
