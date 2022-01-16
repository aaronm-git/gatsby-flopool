import React from "react";
import Layout from "../../components/layouts/Main";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import PoolServiceSection from "../../components/PoolServiceSection";
import ContactNetlify from "../../components/ContactNetlify";
import SeoComponent from "../../components/SEO";

const Residential = () => {
  return (
    <Layout>
      <SeoComponent title="We specialize in providing the best weekly pool services in South Miami, FL." />
      <section className="hero">
        <StaticImage
          src="../../images/services/hero-residential.jpg"
          alt="FloPool provides the best residential pool services in Miami, Florida"
          layout="fullWidth"
          loading="eager"
          placeholder="blurred"
        />
        <h1 className="title">Residential Pool Service</h1>
      </section>
      <PoolServiceSection />
      <section className="subsection bg-primary text-light">
        <Container>
          <Row>
            <Col md={6} className="text-center">
              <StaticImage
                src="../../images/services/weekly-pool-service.jpg"
                alt="FloPool provides weekly pool service to residential pool owners in Miami, Florida"
                className="rounded shadow mb-4"
                height={450}
              />
            </Col>
            <Col md={6}>
              <h4 className="subtitle text-light">
                Why weekly pool cleaning is important
              </h4>
              <p>
                We recommend cleaning your swimming pool weekly instead of every
                other week or once a month. weekly pool cleaning is the golden
                standard in South Florida. Our year-long sunny weather means
                that one week without service may lead to unnecessary use of
                higher dosages of chemicals to compensate for the casual pool
                service routine, which will be expensive.
              </p>
              <p>
                By cleaning your pool every week, you avoid big chemical
                fluctuations in the pool water and keeps your pool clean and
                beautiful every day of the week. We also recommend installing a
                autocleaner to keep you pool clean between pool services.
              </p>
              <p>
                FloPool provides reliable weekly pool services in all of South
                Miami Florida. Taking on the hard work of owning a swimming pool
                so you can focus on relaxing by a clean and beautiful pool with
                your family.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <ContactNetlify reversed />
    </Layout>
  );
};

export default Residential;
