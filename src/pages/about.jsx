import React from "react";
import Layout from "../components/layouts/Main";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { TelephoneFill } from "react-bootstrap-icons";
import Contact from "../components/Contact";

const bottomOverlayStyle = {
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  textAlign: "center",
};

const About = () => {
  return (
    <Layout>
      <section className="hero">
        <StaticImage
          src="../images/about-us/hero.jpg"
          alt="Learn more about FloPool"
          layout="fullWidth"
        />
        <h1 className="title">About Our Company</h1>
      </section>
      <section id="aboutcompany" className="subsection">
        <Container>
          <Row className="flex-lg-row-reverse">
            <Col md={6}>
              <h2 className="title">
                Welcome To The FloPool Official Website!
              </h2>
              <p>
                We are a full-service pool service, maintenance, and repair
                company headquartered in South Miami, Florida. Our service area
                is heavily concentrated in the neighborhoods of Kendall,
                Pinecrest, Coral Gables, Coconut Grove, Gables by the Sea,
                Cocoplum and Palmetto Bay. Unlike many small pool service
                companies, we serve both commercial and residential clients and
                our pool technicians are fully licensed and insured CPOs so you
                can rest asured youre pool is being serviced by pool
                professionals.
              </p>
              <p>
                After many years of servicing pools throughout the South Florida
                area as a pool technicians, we decided to form Florida Swimming
                Pools LLC., (FloPool.Com) with the intent of offering a high
                standard pool service at an affordable price.
              </p>
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

      <Contact reversed />
    </Layout>
  );
};

export default About;
