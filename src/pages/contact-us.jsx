import React from "react";
import Layout from "../components/layouts/Main";
import { Container, Row, Col, ListGroup } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { TelephoneFill } from "react-bootstrap-icons";
import ContactNetlify from "../components/ContactNetlify";
import SEOComponent from "../components/SEO";

const bottomOverlayStyle = {
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  textAlign: "center",
};

const ContactUs = () => {
  return (
    <Layout>
      <SEOComponent title="Contact page" />
      <section className="hero">
        <StaticImage
          src="../images/contact-us/hero.jpg"
          alt="Contact us for all your pool service needs in Miami, Florida"
          layout="fullWidth"
          loading="eager"
          placeholder="blurred"
        />
        <h1 className="title">Contact Us Today</h1>
      </section>
      <section id="aboutcompany" className="subsection">
        <Container>
          <Row className="flex-md-row-reverse">
            <Col md={6} className="mb-4">
              <h2 className="subtitle">South Florida Main Office</h2>
              <p>
                Thank you for visiting our website. We would love to hear from
                you. At FloPool, we value your comments. It is you the
                consumers, who have made us a leading Miami Pool Service
                provider, serving all of South Miami, including areas like
                Kendal, Pinecrest, Coral Gables, Gables by the Sea, and Palmetto
                Bay. If you have a pool, we would love to maintain it!
              </p>
              <ListGroup className="shadow-sm">
                <ListGroup.Item>
                  <ul>
                    <li>
                      <strong>Head Office</strong>
                    </li>
                    <li>13301 SW 132nd Ave, Miami, FL 33186</li>
                    <li>
                      Phone: <a href="tel:3052537665">305.253.POOL (7665)</a>
                    </li>
                    <li>
                      Emergency: <a href="tel:7863565100">786.356.5100</a>
                    </li>
                  </ul>
                </ListGroup.Item>
                <ListGroup.Item>
                  <ul>
                    <li>
                      <strong>Hours of Operations</strong>
                    </li>
                    <li>Monday – Friday | 9:00am to 5:30pm</li>
                    <li>Saturday: 9:00am – 1:00pm</li>
                    <li>Sundays: Closed</li>
                  </ul>
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={6}>
              <div className="position-relative">
                <StaticImage
                  src="../images/about-us/about-us.jpg"
                  alt="Learn Why FloPool is South Florida's #1 Pool Service Company"
                  layout="fullWidth"
                  className="rounded shadow mb-4"
                />
                <div style={bottomOverlayStyle}>
                  <a href="tel:3052537665" className="btn btn-lg btn-warning">
                    <TelephoneFill />
                    Contact Us
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <ContactNetlify reversed />
    </Layout>
  );
};

export default ContactUs;
