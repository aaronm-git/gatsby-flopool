import React from "react";
import Layout from "../../components/layouts/Main";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import ContactNetlify from "../../components/ContactNetlify";

const LeakDetection = () => {
  return (
    <Layout>
      <section className="hero">
        <StaticImage
          src="../../images/services/hero-leak-detection.jpg"
          alt="FloPool provides the best pool leak detection services in Miami, Florida"
          layout="fullWidth"
          loading="eager"
        />
        <h1 className="title">Pool Leak Detection Service</h1>
      </section>
      <section className="subsection">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h2 className="subtitle">
                Hire a professional leak detection team
              </h2>
              <p>
                Leak detections can happen to anyone. This can happen from bad
                equipment installation to expected wear and tear. Whatever the
                reason, FloPool has a trained team of proffessionals on stand by
                for when our customers need it.
              </p>
              <p>
                If you find yourself adding more than one inch of water to your
                pool per week, you may be experiencing a leak. As part of our
                comprehensive pool service, FloPool offers leak detection
                services in Miami for residential and commercial swimming pools.
              </p>
              <p>
                When our leak detection team arrives, we'll inspect for euipment
                leaks, hidden wall leaks, spa leaks, structural leaks, and even
                plumbing leaks. You can rest asured that if there is a pool
                leak, we'll find it. A leak, even a small one, can cost you a
                lot more than you may think. Request for a free no obligation
                consultation and quote.
              </p>
            </Col>
            <Col md={6} className="text-center">
              <StaticImage
                src="../../images/services/pool-leak-detection.jpg"
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

export default LeakDetection;
