import React from "react";
import Layout from "../../components/layouts/Main";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import ContactNetlify from "../../components/ContactNetlify";
import SeoComponent from "../../components/SEO";
const Remodeling = () => {
  return (
    <Layout>
      <SeoComponent title="We are licensed and insured pool & deck construction and remodeling contractors." />
      <section className="hero">
        <StaticImage
          src="../../images/services/hero-remodeling.jpg"
          alt="FloPool provides the best pool and deck remodeling services in Miami, Florida"
          layout="fullWidth"
          loading="eager"
          placeholder="blurred"
        />
        <h1 className="title">Pool & Deck Remodeling</h1>
      </section>
      <section className="subsection">
        <Container>
          <Row>
            <Col md={6} className="text-center">
              <StaticImage
                src="../../images/services/pool-remodeling.jpg"
                alt="FloPool provides weekly pool service to residential pool owners in Miami, Florida"
                height={450}
                className="rounded shadow mb-4"
              />
            </Col>
            <Col md={6}>
              <h4 className="subtitle text-primary">
                Pool and Deck Remodeling Services
              </h4>
              <p>
                Is your pool looking old and in need of a facelift, or perhaps
                you just purchase a new home and have some renovation plans for
                your backyard? Call the Miami pool remodeling experts at
                FloPool. Today there are many options for those looking to
                improve the look and efficiency of your existing swimming pool.
                Technological advance in pool design and equipment has made
                swimming pool ownership more enjoyable, less expensive.
              </p>
              <h4 className="subtitle text-primary">
                Swimming Pool Construction
              </h4>
              <p>
                Here in sunny south Florida, we understand the benefit of owning
                a swimming pool. It's a great relaxation spot, brings family
                together, and increases property value. But sometimes all we can
                to is dream of what could be ove that empty plot of grass. We
                want to help you make your dreams a reality. FloPool works with
                a variety of professional contractors who work hard to provide
                Floridians with a beautiful crystal clear investment. We
                specialize in custom in-ground pool construction as well as
                renovations and repair. From the initial design phase through
                construction, our qualified team of experts will guide you
                through the process of building or remodeling your dream pool.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <ContactNetlify reversed />
    </Layout>
  );
};

export default Remodeling;
