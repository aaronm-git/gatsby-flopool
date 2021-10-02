import React from "react";
import Layout from "../../components/layouts/Main";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import PoolServiceSection from "../../components/PoolServiceSection";
import ContactNetlify from "../../components/ContactNetlify";
import SEOComponent from "../../components/SEO";
const Commercial = () => {
  return (
    <Layout>
      <SEOComponent title="Commercial Pool Service" />
      <section className="hero">
        <StaticImage
          src="../../images/services/hero-commercial.jpg"
          alt="FloPool provides the best commercial pool services in Miami, Florida"
          layout="fullWidth"
          loading="eager"
        />
        <h1 className="title">Commercial Pool Service</h1>
      </section>
      <PoolServiceSection />
      <section className="subsection bg-primary text-light">
        <Container>
          <h2 className="title text-center text-light">
            Quality Commercial Pools Service Done by PROFESSIONALS
          </h2>
          <Row>
            <Col md={6} className="text-center">
              <StaticImage
                src="../../images/home/services-commercial.jpg"
                alt="FloPool provides weekly pool service to residential pool owners in Miami, Florida"
                className="rounded shadow mb-4"
                height={450}
              />
            </Col>
            <Col md={6}>
              <h4 className="subtitle text-light">
                Hire professional pool technicians for your commercial pools
              </h4>
              <p>
                Regular weekly pool service is important. Having a professional
                technician servicing your swimming pool is even more important.
                With thausands of commercial swimming pools in Miami in regular
                use, all Florida businesses must meet all the regulations
                established by the Florida Department of Health. FloPool has
                been a leader in commercial pool service for over 15 years. Our
                trained technicians will make sure your swimming pools are up to
                code and safe for all your guests.
              </p>
              <p>
                We understand the value of keeping a pool clean and safe for
                guests. Rain or shine we'll make sure your swimming pool is
                clean and operational. As a commercial client of ours you will
                receive a dedicated team to look after your pool equipment and
                swimming pool every week. Schedule regular service with our
                experts and you’re commercial pool with be ready for your guests
                at all times.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <ContactNetlify reversed />
    </Layout>
  );
};

export default Commercial;
