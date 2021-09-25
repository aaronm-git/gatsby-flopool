import React from "react";
import Layout from "../../components/layouts/Main";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
const Residential = () => {
  return (
    <Layout>
      <section className="hero">
        <StaticImage
          src="../../images/services/hero-residential.jpg"
          alt="FloPool provides the best residential pool services in Miami, Florida"
          layout="fullWidth"
        />
        <h1 className="title">Residential Pool Service</h1>
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

export default Residential;
