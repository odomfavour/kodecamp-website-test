import React, { useState, useEffect } from "react";
import { Container, Form, Button } from "react-bootstrap";
import PageWrapper from "../../layout/PageWapper/PageWrapper";
import "./Sponsor.css";

// custom alert
import Swal from "sweetalert2";

const Sponsor = () => {
  const [newSponsor, setNewSponsor] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    business: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setNewSponsor(function (prevSponsorData) {
      return {
        ...prevSponsorData,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setFormErrors(validate(newSponsor));
    setIsSubmit(true);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      Swal.fire({
        icon: "success",
        title: "Form Submitted",
        confirmButtonColor: "#669e00",
      }).then(() =>
        setNewSponsor({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          business: "",
        })
      );
    }
  }

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(newSponsor);
    }
  }, [formErrors, newSponsor, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.firstName) {
      errors.firstName = "First name is required";
    }
    if (!values.lastName) {
      errors.lastName = "Last name is required";
    }
    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format";
    }
    if (!values.phone) {
      errors.phone = "Pnone number is required";
    }

    return errors;
  };

  return (
    <>
      <PageWrapper>
        <div className="d-flex  flex-column justify-content-center align-items-center p-lg-5 p-md-5 py-5 sponsor-wraper">
          <Container className="sponsor-form">
            <h3 className="py-3 sponsor-header">Become a sponsor</h3>
            <p className="sponsor-text pb-2">
              As a sponsor, you stand to gain the audience and also top talents
              from our internship for a period of 3months.
            </p>

            <Form onSubmit={handleSubmit} className="d-flex  flex-column">
              <div className="d-lg-flex d-md-flex d-sm-block">
                <div className="left me-lg-3 me-md-3">
                  <Form.Group
                    className="mb-lg-4 "
                    controlId="formBasicFirstName"
                  >
                    <Form.Label className="sponsor-text pt-4">
                      First name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="firstName"
                      value={newSponsor.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="sponsor-input mb-2 mb-md-4 mb-lg-4"
                    />
                  </Form.Group>
                  <p className="err-message ">{formErrors.firstName}</p>

                  <Form.Group className="mb-lg-4" controlId="formBasicLastName">
                    <Form.Label className="sponsor-text pt-4">
                      Last name
                    </Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={newSponsor.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="sponsor-input mb-2 mb-md-4 mb-lg-4"
                    />
                  </Form.Group>
                  <p className="err-message">{formErrors.lastName}</p>
                </div>

                <div className="right ms-lg-3 ms-md-3">
                  <Form.Group className="mb-lg-4" controlId="formBasicEmail">
                    <Form.Label className="sponsor-text pt-4">
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={newSponsor.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className="sponsor-input mb-2 mb-md-4 mb-lg-4"
                    />
                  </Form.Group>
                  <p className="err-message">{formErrors.email}</p>

                  <Form.Group
                    className="mb-lg-4"
                    controlId="formBasicPhoneNumber"
                  >
                    <Form.Label className="sponsor-text pt-4">
                      Phone number
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      name="phone"
                      value={newSponsor.phone}
                      onChange={handleChange}
                      placeholder="Enter your number"
                      className="sponsor-input mb-2 mb-md-4 mb-lg-4"
                    />
                  </Form.Group>
                  <p className="err-message">{formErrors.phone}</p>
                </div>
              </div>

              <Form.Group className="mb-3" controlId="formBasicBusinessName">
                <Form.Label className="sponsor-text pt-4">
                  Business name (optional)
                </Form.Label>
                <Form.Control
                  type="text"
                  name="business"
                  value={newSponsor.business}
                  onChange={handleChange}
                  placeholder="Enter business name"
                  className="sponsor-input mb-2 mb-md-4 mb-lg-4"
                />
              </Form.Group>

              <Button type="submit" className="sponsor-btn my-4">
                Become a sponsor
              </Button>

              {/* {Object.keys(formErrors).length === 0 && isSubmit ? (
                alert("You have successfully registered as a Sponsor")
              ) : (
                <p>{""} </p>
              )} */}
            </Form>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};

export default Sponsor;
