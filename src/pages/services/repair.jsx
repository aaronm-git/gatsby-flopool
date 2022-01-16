import React from "react";
import Layout from "../../components/layouts/Main";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import ContactNetlify from "../../components/ContactNetlify";
import SeoComponent from "../../components/SEO";
const Repair = () => {
  return (
    <Layout>
      <SeoComponent title="Our experienced and trained pool technicians provide the best pool & spa equipment repair service in South Miami, FL." />
      <section className="hero">
        <StaticImage
          src="../../images/services/hero-repair.jpg"
          alt="FloPool provides the best pool equipment repair services in Miami, Florida"
          layout="fullWidth"
          loading="eager"
          placeholder="blurred"
        />
        <h1 className="title">Pool Equipment Repair Service</h1>
      </section>
      <section className="subsection">
        <Container>
          <Row className="flex-lg-row-reverse">
            <Col md={6}>
              <h2 className="subtitle text-primary">
                We repair and install all name brand pool equipment.
              </h2>
              <p>
                We are fully licensed to repair and install all types of pool
                equipment for residential and commercial residencies.
              </p>
              <p>
                All of the FloPool team of trained pool technicians has the
                experience and skills necessary to diagnose and repair your pool
                equipment. Contact us for a quote of your pool equipment repair
                and we'll accurately and swiftly troubleshoot and repair your
                equipment.
              </p>
              <div className="rounded bg-light p-2 shadow-sm mb-3">
                <p className="h5 font-weight-light text-primary mb-3">
                  Our pool repair and installation service include:
                </p>
                <Row>
                  <Col>
                    <ul className="mb-0 core-services">
                      <li className="service">Pool Pumps</li>
                      <li className="service">Pool Filter</li>
                      <li className="service">Pool Cleaners</li>
                    </ul>
                  </Col>
                  <Col>
                    <ul className="core-services">
                      <li className="service">Pool salt systems</li>
                      <li className="service">Pool lights</li>
                      <li className="service">and more!</li>
                    </ul>
                  </Col>
                </Row>
              </div>
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
