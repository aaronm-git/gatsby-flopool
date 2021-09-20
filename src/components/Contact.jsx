import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { useForm, ValidationError } from "@formspree/react";
import States from "../states";

const Contact = () => {
  const [state, handleSubmit] = useForm("contact");
  if (state.errors.length) {
    console.error(state.errors);
  }
  return (
    <section className="subsection bg-light text-black">
      <Container>
        <div className="text-center mb-5">
          <h2 className="text-primary">
            <span className="font-weight-light text-dark">Got Questions?</span>{" "}
            We Have Answers
          </h2>
          <p>
            Contact FloPool to learn more about our products and service
            solutions today.
          </p>
        </div>
        <Row className="justify-content-center align-items-center">
          <Col lg={6}>
            <StaticImage
              src="../images/contact-us.png"
              quality={100}
              className="d-none d-lg-block"
              alt="Contact Us Today!"
            />
          </Col>
          <Col lg={6}>
            {state.succeeded ? (
              <h5>Thank you for reaching out!</h5>
            ) : (
              <Form onSubmit={handleSubmit}>
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
                    <Form.Control required name="city" />
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
                    <Form.Control type="number" required name="zip" />
                    <ValidationError
                      prefix="Zip"
                      field="zip"
                      errors={state.errors}
                    />
                  </Form.Group>
                </Row>
                <Form.Group controlId="formMessage" className="mb-3">
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
