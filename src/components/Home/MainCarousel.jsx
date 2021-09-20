import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const MainCarousel = () => {
  return (
    <Carousel id="maincarousel">
      <Carousel.Item>
        <StaticImage
          src="../../images/home_slides/best_pool_service_miami.jpg"
          alt="Miami Florida's Best Pool Service Company"
          loading="eager"
          placeholder="blurred"
          layout="fullWidth"
          className="d-none d-lg-block d-xl-none"
        />
        <StaticImage
          src="../../images/home_slides/best_pool_service_miami-lg.jpg"
          alt="Miami Florida's Best Pool Service Company"
          loading="eager"
          placeholder="blurred"
          layout="fullWidth"
          className="d-none d-xl-block"
        />
        <StaticImage
          src="../../images/home_slides/best_pool_service_miami-sm.jpg"
          alt="Miami Florida's Best Pool Service Company"
          loading="eager"
          placeholder="blurred"
          layout="fullWidth"
          className="d-lg-none"
        />
        <Carousel.Caption>
          <Container>
            <Row>
              <Col lg={7} xlg={6} className="copy">
                <h1>Miami's #1 Pool Service Company</h1>
                <h2>Hire a pool company you can trust</h2>
                <p>
                  Are you looking for a reliable pool service company in Miami?
                  FloPool has been the pool service and repair company of choice
                  for residential and commercial pool owners throught South
                  Miami. We are licensed and insured so that you know you're
                  hiring a pool service comppany that looks after you.
                </p>
                <p>
                  <Link className="btn btn-lg btn-warning" to="/get-a-quote">
                    Get A Quote
                  </Link>
                </p>
              </Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <StaticImage
          src="../../images/home_slides/swimming_pool_equipment_repair.jpg"
          alt="Pool Equipment Installation and Repair"
          loading="eager"
          placeholder="blurred"
          layout="fullWidth"
          className="d-none d-lg-block d-xl-none"
          quality={100}
        />
        <StaticImage
          src="../../images/home_slides/swimming_pool_equipment_repair-lg.jpg"
          alt="Pool Equipment Installation and Repair"
          loading="eager"
          placeholder="blurred"
          layout="fullWidth"
          className="d-none d-xl-block"
          quality={100}
        />
        <StaticImage
          src="../../images/home_slides/swimming_pool_equipment_repair-sm.jpg"
          alt="Pool Equipment Installation and Repair"
          loading="eager"
          placeholder="blurred"
          layout="fullWidth"
          className="d-lg-none"
          quality={100}
        />
        <Carousel.Caption>
          <Container>
            <Row>
              <Col lg={6} className="copy">
                <h1>We'll handle all your pool equipment needs</h1>
                <p>
                  We install, service and repair all brand-name pool and spa
                  equipment. From pumps and filters to heaters and salt systems,
                  our licensed experts can handle it.
                </p>
                <p>
                  <Link className="btn btn-lg btn-warning" to="/get-a-quote">
                    Get A Quote
                  </Link>
                </p>
              </Col>
            </Row>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
