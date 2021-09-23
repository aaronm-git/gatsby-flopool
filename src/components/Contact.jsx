import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { useForm, ValidationError } from "@formspree/react";
import States from "../states";
import { TelephoneFill } from "react-bootstrap-icons";
import "../styles/contact-section.css";
import Helmet from "react-helmet";

const Contact = () => {
  const [state, handleSubmit] = useForm("contact");
  return (
    <section id="contactform" className="subsection bg-light">
      <Helmet>
        <script
          src="https://www.google.com/recaptcha/api.js"
          async
          defer
        ></script>
      </Helmet>
      <Container>
        <div className="text-center mb-2">
          <h2 className="text-primary">
            <span className="font-weight-light text-dark mx-2">
              Got Questions?
            </span>
            <br className="d-md-none" />
            We Have Answers
          </h2>
          <p>
            Contact FloPool to learn more about our products and service
            solutions today.
          </p>
        </div>
        <Row className="">
          <Col lg={6} className="position-relative">
            <StaticImage
              src="../images/contact-us.jpg"
              alt="Contact Us Today!"
              placeholder="blurred"
              className="rounded shadow-sm mb-4"
              layout="fullWidth"
              quality={100}
            />
            <div
              className="text-center w-75"
              style={{
                position: "absolute",
                bottom: "2%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <p
                className="h1 text-white text-uppercase rounded"
                style={{
                  textShadow: "#343a40c4 2px 2px 4px",
                  // backgroundColor: "rgba(255,255,255,.75",
                  padding: "1rem",
                }}
              >
                Schedule a <strong>FREE</strong> Estimate
              </p>
              <a href="tel:3052537665" className="btn btn-lg btn-warning">
                <TelephoneFill />
                CALL TODAY
              </a>
            </div>
          </Col>
          <Col lg={6}>
            {state.succeeded ? (
              <h5 className="text-center">Thank you for reaching out!</h5>
            ) : (
              <Form onSubmit={handleSubmit}>
                <h3 className="text-center text-uppercase">Request A Quote</h3>
                <Form.Group controlId="formName">
                  <Form.Label>
                    Name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control placeholder="John Doe" name="name" required />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </Form.Group>
                <Row>
                  <Form.Group as={Col} controlId="formPhone" required>
                    <Form.Label>
                      Phone<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone"
                      name="phone"
                    />
                    <ValidationError
                      prefix="Phone"
                      field="phone"
                      errors={state.errors}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                    />
                    <ValidationError
                      prefix="Email"
                      field="email"
                      errors={state.errors}
                    />
                  </Form.Group>
                </Row>
                <h5>Property Location</h5>
                <Form.Group className="mb-3" controlId="formAddress">
                  <Form.Label>
                    Address<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    placeholder="1234 Main St"
                    required
                    name="address"
                  />
                  <ValidationError
                    prefix="Address"
                    field="address"
                    errors={state.errors}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    placeholder="Apartment, studio, or floor"
                    name="address2"
                  />
                  <ValidationError
                    prefix="Address2"
                    field="address"
                    errors={state.errors}
                  />
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formCity">
                    <Form.Label>
                      City<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control required name="city" placeholder="Miami" />
                    <ValidationError
                      prefix="City"
                      field="city"
                      errors={state.errors}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formCity">
                    <Form.Label>
                      State<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      aria-label="Default select example"
                      required
                      name="state"
                      defaultValue="FL"
                    >
                      {States.map((usStates) => {
                        return (
                          <option
                            key={usStates.abbreviation}
                            value={usStates.abbreviation}
                          >
                            {usStates.name}
                          </option>
                        );
                      })}
                    </Form.Control>
                    <ValidationError
                      prefix="State"
                      field="state"
                      errors={state.errors}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formZip">
                    <Form.Label>
                      Zip<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="number"
                      required
                      name="zip"
                      placeholder="33186"
                    />
                    <ValidationError
                      prefix="Zip"
                      field="zip"
                      errors={state.errors}
                    />
                  </Form.Group>
                </Row>
                <Form.Group controlId="formMessage">
                  <Form.Label>
                    Message<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    placeholder="Leave a comment here"
                    style={{ height: "100px" }}
                    name="message"
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </Form.Group>
                <div
                  className="g-recaptcha mb-3"
                  data-sitekey={process.env.RECAPTCHA_SITE_KEY}
                ></div>
                <Button
                  variant="primary"
                  type="submit"
                  disabled={state.submitting}
                >
                  Request A Callback
                </Button>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;

{
  /* <Row>
      <Col md={12}>
        <Card className="mb-2">
          <Card.Body>
            <Card.Title>
              <GeoAltFill className="circled" />
              Our Address
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="mb-2">
          <Card.Body>
            <Card.Title>
              <TelephoneFill className="circled" />
              Phone
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="mb-2">
          <Card.Body>
            <Card.Title>
              <EnvelopeFill />
              Email
            </Card.Title>
          </Card.Body>
        </Card>
      </Col>
    </Row> */
}
