import React from "react";
import { Container, Carousel } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import CarouselPicture from "../CarouselPicture";

const MainCarousel = () => {
  return (
    <Carousel id="maincarousel">
      <Carousel.Item>
        <CarouselPicture
          fileName="best_pool_service_miami"
          alt="Miami Florida's Best Pool Service Company"
        />
        <Carousel.Caption>
          <Container>
            <h2>Miami's Best Pool Service Company</h2>
            <h3>Hire a pool company you can trust</h3>
            <p>
              FloPool is the preferred pool service and repair company for
              residential and commercial pool owners throughout South Miami. We
              are licensed and insured, so you know you're hiring a pool service
              company that looks after you.
            </p>
            <Link className="btn btn-lg btn-warning mb-2" to="/get-a-quote">
              Get A Quote
            </Link>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <CarouselPicture
          fileName="swimming_pool_equipment_repair"
          alt="Pool Equipment Installation and Repair"
        />
        <Carousel.Caption>
          <Container>
            <h2>We'll handle all your pool equipment needs</h2>
            <p>
              We install, service and repair all brand-name pool and spa
              equipment. From pumps and filters to heaters and salt systems, our
              licensed experts can handle it.
            </p>
            <Link className="btn btn-lg btn-warning mb-2" to="/get-a-quote">
              Get A Quote
            </Link>
          </Container>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default MainCarousel;
