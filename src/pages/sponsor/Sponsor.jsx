import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import PageWrapper from "../../layout/PageWapper/PageWrapper";
import "./Sponsor.css";

const Sponsor = () => {
  const [newSponsor, setNewSponsor] = useState({
    firstName: "",
    lastName: "",
    
    email: "",
    phone: "",
    business: "",
  });

  // useEffect(() => {}, [newSponsor])

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
    console.log(newSponsor);
  }

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
                    <Form.Label className="sponsor-text pt-3">
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

                  <Form.Group className="mb-lg-4" controlId="formBasicLastName">
                    <Form.Label className="sponsor-text pt-3">
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
                </div>

                <div className="right ms-lg-3 ms-md-3">
                  <Form.Group className="mb-lg-4" controlId="formBasicEmail">
                    <Form.Label className="sponsor-text pt-3">
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

                  <Form.Group
                    className="mb-lg-4"
                    controlId="formBasicPhoneNumber"
                  >
                    <Form.Label className="sponsor-text pt-3">
                      Phone number
                    </Form.Label>
                    <Form.Control
                      type="number"
                      name="phone"
                      value={newSponsor.phone}
                      onChange={handleChange}
                      placeholder="Enter your number"
                      className="sponsor-input mb-2 mb-md-4 mb-lg-4"
                    />
                  </Form.Group>
                </div>
              </div>

              <Form.Group className="mb-3" controlId="formBasicBusinessName">
                <Form.Label className="sponsor-text pt-3">
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

              <Button variant="success" type="submit" className="sponsor-btn">
                Become a sponsor
              </Button>
            </Form>
          </Container>
        </div>
      </PageWrapper>
    </>
  );
};

export default Sponsor;
