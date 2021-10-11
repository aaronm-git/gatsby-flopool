import React from "react";
import Layout from "../components/layouts/Main";
import { Container, Row, Col, Card } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { BriefcaseFill } from "react-bootstrap-icons";
const Jobs = () => {
  return (
    <Layout>
      <section className="hero">
        <StaticImage
          src="../images/jobs/hero.jpg"
          alt="Pool Service Company Jobs"
          layout="fullWidth"
          loading="eager"
          placeholder="blurred"
        />
        <h1 className="title">We're Hiring!</h1>
      </section>
      <section className="subsection">
        <Container>
          <Row>
            <Col md={{ span: 6, offset: 2 }}>
              <Card className="shadow">
                <Card.Body>
                  <BriefcaseFill className="mr-2 mb-1" />
                  No Jobs Avaialble Now. Check Back Soon!
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>
    </Layout>
  );
};

export default Jobs;
