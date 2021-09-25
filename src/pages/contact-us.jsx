import React from "react";
import Layout from "../components/layouts/Main";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const ContactUs = () => {
  return (
    <Layout>
      <section className="hero">
        <StaticImage
          src="../images/contact-us/hero.jpg"
          alt="Contact us for all your pool service needs in Miami, Florida"
          layout="fullWidth"
        />
        <h1 className="title">Contact Us Today</h1>
      </section>
      <section className="subsection">
        <Container>
          <Row>
            <Col md={6}></Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default ContactUs;
