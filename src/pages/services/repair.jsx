import React from "react";
import Layout from "../../components/layouts/Main";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import ContactNetlify from "../../components/ContactNetlify";
const Repair = () => {
  return (
    <Layout>
      <section className="hero">
        <StaticImage
          src="../../images/services/hero-repair.jpg"
          alt="FloPool provides the best pool equipment repair services in Miami, Florida"
          layout="fullWidth"
          loading="eager"
        />
        <h1 className="title">Pool Equipment Repair Service</h1>
      </section>
      <section className="subsection">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="subtitle">
                We repair and install all name brand pool equipment.
              </h2>
              <p>
                All of the FloPool team of trained pool technicians have the
                experience and skills necessary to diagnose and repair your pool
                equipment. Contact us for a quote of your pool equipment repair
                needs and we'll accurtely and swiftly troubleshoot and repair
                your equipment.
              </p>
              <p>
                A lot of the time we can do the repairs at your property, but in
                some cases we may need to take the equipment for a full
                diagnostic back at our main office to better service your
                equipment.
              </p>
              <p>
                Most importantly, you will be advised of any costs involved and
                be kept informed along the repair process.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <StaticImage
                src="../../images/services/pool-equipment-repair.jpg"
                alt="FloPool provides weekly pool service to residential pool owners in Miami, Florida"
                className="rounded shadow mb-4"
                height={450}
              />
            </Col>
          </Row>
        </Container>
      </section>
      <ContactNetlify />
    </Layout>
  );
};

export default Repair;
