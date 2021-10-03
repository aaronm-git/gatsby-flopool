/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Container, Carousel } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import CarouselPicture from "../CarouselPicture";

const MainCarousel = () => {
  return (
    <Carousel id="maincarousel" css={carouselCSS}>
      <Carousel.Item>
        {/* <CarouselPicture
          fileName="best_pool_service_miami"
          alt="Miami Florida's Best Pool Service Company"
        /> */}
        <StaticImage
          src="../../images/home_slides/best_pool_service_miami.jpg"
          alt="We are the best pool service company in Miami, FL"
          layout="fullWidth"
          loading="eager"
          placeholder="blurred"
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
        <StaticImage
          src="../../images/home_slides/swimming_pool_equipment_repair.jpg"
          alt="We are the best pool service company in Miami, FL"
          layout="fullWidth"
          loading="eager"
          placeholder="blurred"
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

      {/* <Carousel.Item>
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
      </Carousel.Item> */}
    </Carousel>
  );
};

export default MainCarousel;

const carouselCSS = css`
  .carousel-caption {
    text-align: center;
    bottom: auto;
    left: 10%;
    top: 18%;
    width: 45%;
    background-color: #007bff;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }

  .carousel-caption h2 {
    text-transform: uppercase;
    font-size: 2rem;
  }

  .carousel-caption h3 {
    font-size: 1.5rem;
    font-weight: lighter;
    color: #ffc107;
  }

  /* lg and beyond */
  @media screen and (min-width: 1600px) {
    .carousel-caption {
      top: 30%;
      left: 25%;
      width: 25%;
    }
  }

  /* up to md */
  @media screen and (max-width: 992px) {
    .carousel-caption {
      position: relative;
      top: 0;
      left: 0;
      width: 100%;
      text-align: center;
      min-height: 300px;
      padding: 1rem 0.5rem;
      border-radius: 0;
      display: flex;
      align-items: center;
    }

    .carousel-control-prev,
    .carousel-control-next {
      align-items: flex-start;
      margin-top: 20%;
    }

    .carousel-caption h3 {
      font-size: 22px;
      font-weight: lighter;
      color: #ffc107;
    }
  }

  /* sm only */
  @media screen and (max-width: 576px) {
    .carousel-caption {
      min-height: 380px;
    }

    .carousel-caption h2 {
      font-size: x-large;
    }

    .carousel-caption h3 {
      font-size: 20px;
    }
  }
`;
