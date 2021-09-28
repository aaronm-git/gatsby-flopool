import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import States from "../states";
import { TelephoneFill } from "react-bootstrap-icons";
import "../styles/contact-section.css";

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const ContactNetlify = ({ reversed }) => {
  const [succeeded, setSucceeded] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const rowReversed = reversed ? "flex-lg-row-reverse" : null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => {
        setSucceeded(true);
        setSubmitting(false);
      })
      .catch((error) => {
        alert(error);
        setSucceeded(false);
        setSubmitting(false);
      });
  };

  return (
    <section id="contactformnetlify" className="subsection bg-light">
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
        <Row className={rowReversed}>
          <Col lg={6} className="position-relative text-center">
            <StaticImage
              src="../images/contact-us.jpg"
              alt="Contact us today!"
              placeholder="blurred"
              layout="constrained"
              height={800}
              quality={100}
              className="rounded shadow"
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
            {succeeded ? (
              <h5 className="text-center">Thank you for reaching out!</h5>
            ) : (
              <Form
                onSubmit={handleSubmit}
                name="contact"
                method="post"
                data-netlify={true}
                data-netlify-honeypot="bot-field"
              >
                <input type="hidden" name="form-name" value="contact" />
                <input name="bot-field" type="hidden" onChange={handleChange} />
                <h4 className="text-center text-uppercase subtitle">
                  Request A Quote
                </h4>
                <Form.Group controlId="formName">
                  <Form.Label>
                    Name<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    placeholder="John Doe"
                    name="name"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                <Row>
                  <Form.Group as={Col} controlId="formPhone">
                    <Form.Label>
                      Phone<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Enter phone"
                      name="phone"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formEmail">
                    <Form.Label>
                      Email<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      name="email"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>
                <h5 className="mb-0 mt-3">Property Location</h5>
                <p className="text-muted">Where you wish to receive service</p>
                <Form.Group className="mb-3" controlId="formAddress">
                  <Form.Label>
                    Address<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    placeholder="1234 Main St"
                    name="address"
                    required
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control
                    placeholder="Apartment, studio, or floor"
                    name="address2"
                    onChange={handleChange}
                  />
                </Form.Group>
                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formCity">
                    <Form.Label>
                      City<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      required
                      name="city"
                      placeholder="Miami"
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formState">
                    <Form.Label>
                      State<span className="text-danger">*</span>
                    </Form.Label>
                    <Form.Control
                      as="select"
                      aria-label="Default select example"
                      required
                      name="state"
                      defaultValue="FL"
                      required
                      onChange={handleChange}
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
                      required
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>
                <Form.Group controlId="formType">
                  <Form.Label>
                    Type of Service<span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control
                    as="select"
                    required
                    name="serviceType"
                    defaultValue="Weekly pool service"
                    required
                    onChange={handleChange}
                  >
                    <option>Weekly pool service</option>
                    <option>Pool equipment repair</option>
                    <option>Leak detection</option>
                    <option>Pool or deck remodeling</option>
                    <option>Green pool restoration</option>
                    <option>Other</option>
                  </Form.Control>
                </Form.Group>

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
                    onChange={handleChange}
                  />
                </Form.Group>
                <Button
                  variant="primary"
                  type="submit"
                  size="lg"
                  disabled={submitting}
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

export default ContactNetlify;
