import React from "react";
import Layout from "../components/layouts/Main";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const Jobs = () => {
  return (
    <Layout>
      <section className="hero">
        <StaticImage
          src="../images/jobs/hero.jpg"
          alt="Pool Service Company Jobs"
          layout="fullWidth"
        />
        <h1 className="title">We're Hiring!</h1>
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

export default Jobs;
