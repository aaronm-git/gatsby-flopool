import React from "react";
import Layout from "../../components/layouts/Main";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const LeakDetection = () => {
  return (
    <Layout>
      <section className="hero">
        <StaticImage
          src="../../images/services/hero-leak-detection.jpg"
          alt="FloPool provides the best pool leak detection services in Miami, Florida"
          layout="fullWidth"
        />
        <h1 className="title">Pool Leak Detection Service</h1>
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

export default LeakDetection;
