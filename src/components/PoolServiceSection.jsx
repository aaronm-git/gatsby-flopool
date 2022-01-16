import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const PoolServiceSection = () => {
  return (
    <section className="subsection bg-light">
      <Container>
        <Row className="flex-lg-row-reverse">
          <Col md={6}>
            <StaticImage
              src="../images/services/pool-cleaner.jpg"
              alt="Pool and pool cleaning tools"
              height={280}
              layout="constrained"
              className="rounded shadow mb-4 mb-lg-0"
            />
          </Col>
          <Col>
            <h2 className="subtitle text-primary">
              Weekly Pool Services in Miami, Florida!
            </h2>
            <p>
              If reputation, quality, and professionalism matter to you, then
              FloPool should be your Miami Pool Service company of choice. We
              service both residential and commercial pools, are fully licensed
              and insured and offer one time or customized recurring packages
              designed to meet the requirement of your pool.
            </p>
            <p>
              The dedicated team of expert pool technicians at FloPool will keep
              your pool looking and functioning great.
            </p>
          </Col>
        </Row>
        <Row className="my-4">
          <Col md={6}>
            <ul className="core-services">
              <li className="service">BRUSH POOL SURFACE & TILE</li>
              <li className="service">REMOVE SURFACE DEBRIS</li>
              <li className="service">VACUUM POOL & SPA SURFACES</li>
            </ul>
          </Col>
          <Col md={6}>
            <ul className="core-services">
              <li className="service">BALANCE POOL CHEMICALS</li>
              <li className="service">CLEAR SKIMMER BASKETS</li>
              <li className="service">MONTHLY POOL FILTER FLUSH</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PoolServiceSection;
