import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Services = () => {
  return (
    <section id="services" className="text-center text-md-left">
      <Container className="bg-warning">
        <Row>
          <Col md={6} className="p-0">
            <StaticImage
              src="../../images/home/services-residential.jpg"
              alt="Weekly Pool Service Available For Residential Properties"
              width={480}
            />
          </Col>
          <Col md={6} className="px-4 py-5 d-flex align-items-center">
            <div>
              <h2 className="h1 text-primary font-weight-bold text-uppercase">
                Residential
                <br />
                <span className="font-weight-light">Pool Services</span>
              </h2>
              <p>
                We'll take the hard work out of your pool. Our CPO technicians
                will do all the cleaning and maintenance so you can focus on
                enjoying your swimming pool!
              </p>
              <Link
                to="/services/residential"
                className="btn btn-lg btn-primary"
              >
                Residential Services
              </Link>
            </div>
          </Col>
        </Row>
        <Row className="flex-md-row-reverse">
          <Col md={6} className="p-0 text-right">
            <StaticImage
              src="../../images/home/services-commercial.jpg"
              alt="Weekly Pool Service Available For Commercial Properties"
              width={480}
            />
          </Col>
          <Col md={6} className="px-4 py-5 d-flex align-items-center">
            <div>
              <h2 className="h1 text-primary font-weight-bold text-uppercase">
                Commercial
                <br />
                <span className="font-weight-light">Pool Serives</span>
              </h2>
              <p>
                There's no doubt guests and residents love to use your swimming
                pool as their amenity. That is why we offer our commercial pools
                a dedicated and reliable technician team who will maintain a
                clean and safe swimming pool for everyone who uses it. You can
                count on FloPool to always provide you the best pool service in
                Miami, Florida.
              </p>
              <Link
                to="/services/commercial"
                className="btn btn-lg btn-primary"
              >
                Commercial Services
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
