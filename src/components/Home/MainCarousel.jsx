/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Carousel, Container, Button } from "react-bootstrap";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import { Link, graphql, useStaticQuery } from "gatsby";

const MainCarousel = () => {
  const slides = [
    {
      imgName: "holiday_pool_service",
      imgAlt: "Pool service in Miami",
      title: "Enjoy the holiday by the pool",
      subtitle: "Family and friends coming over for the holidays?",
      text: "FloPool can help maintain a safe and clean swimming pool for you and your guests. We are a licensed and insured company that specializes in weekly pool maintenance in Coral Gables, Cutler Bay, Pinecrest, Palmetto Bay, West Kendall, and more",
      imgUrl: "/get-a-quote",
      btnLinks: [
        <Button variant="light" href="tel:3052537665">
          Call Now
        </Button>,
        <Link to="/get-a-quote" className="btn btn-warning">
          Get A Quote
        </Link>,
      ],
    },
    {
      imgName: "best_pool_service_miami",
      imgAlt: "We are the best pool service company in Miami, FL",
      title: "Miami's Best Pool Service Company",
      subtitle: "",
      text: "FloPool is the preferred pool service and repair company for residential and commercial pool owners throughout South Miami. We are licensed and insured, so you know you're hiring a team of experts who are looking out for you!",
      imgUrl: "/get-a-quote",
      btnLinks: [
        <Link to="/get-a-quote" className="btn btn-warning">
          Get A Quote
        </Link>,
      ],
    },
    {
      imgName: "swimming_pool_equipment_repair",
      imgAlt: "We are the best pool service company in Miami, FL",
      title: "Professional Pool Equipment Installation and Repair",
      subtitle: "",
      text: "We install, service, and repair all brand-name pool and spa equipment. From pumps and filters to heaters and salt systems, our experts can handle it.",
      imgUrl: "/get-a-quote",
      btnLinks: [
        <Link to="/get-a-quote" className="btn btn-warning">
          Get A Quote
        </Link>,
      ],
    },
    {
      imgName: "green_pool_restoration_service",
      imgAlt: "Green Pool Restoration Services In Miami",
      title: "Green Pool Restoration Service",
      // subtitle: "We'll restore your green swimming pool back",
      text: "Maintaining a healthy blue swimming pool is no easy task, especially under Miami's sunny weather. The sun helps algae thrive and decreases chlorine levels. So when your pool is not treated properly, it can turn green fast. FloPool provides a green pool restoration service to prevent and restore green pools.",
      imgUrl: "/get-a-quote",
      btnLinks: [
        <Link to="/get-a-quote" className="btn btn-warning">
          Get A Quote
        </Link>,
      ],
    },
  ];

  const data = useStaticQuery(SliderImageQuery);
  const SlideImages = ({ imgName, imgAlt }) => {
    const smImgNodeIndex = data.sm.edges.findIndex(
      (edge) => edge.node.name === imgName + "-sm"
    );
    const lgImgNodeIndex = data.lg.edges.findIndex(
      (edge) => edge.node.name === imgName + "-lg"
    );
    const normalImgNodeIndex = data.normal.edges.findIndex(
      (edge) => edge.node.name === imgName
    );

    const small = data.sm.edges[smImgNodeIndex].node;
    const normal = data.normal.edges[normalImgNodeIndex].node;
    const large = data.lg.edges[lgImgNodeIndex].node;

    const images = withArtDirection(getImage(normal), [
      {
        media: "(max-width: 992px)",
        image: getImage(small),
      },
      {
        media: "(min-width: 2000px)",
        image: getImage(large),
      },
    ]);
    return <GatsbyImage image={images} alt={imgAlt} css={artDirected} />;
  };
  return (
    <Carousel id="maincarousel" css={carouselCSS}>
      {slides.map((slide, i) => {
        return (
          <Carousel.Item key={slide.imgName}>
            <Link to={slide.imgUrl}>
              <SlideImages imgName={slide.imgName} imgAlt={slide.imgAlt} />
            </Link>
            <Carousel.Caption>
              <Container>
                {slide.title && <h2>{slide.title}</h2>}
                {slide.subtitle && <h3>{slide.subtitle}</h3>}
                {slide.text && <p>{slide.text}</p>}
                {slide.btnLinks.map((btn, index) => (
                  <span key={"carouselBtn" + index} className="mx-1">
                    {btn}
                  </span>
                ))}
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default MainCarousel;

const SliderImageQuery = graphql`
  {
    sm: allFile(
      filter: {
        relativeDirectory: { eq: "home_slides" }
        childImageSharp: { original: { width: { eq: 1000 } } }
      }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              jpgOptions: { progressive: true }
              placeholder: BLURRED
              quality: 100
            )
          }
          name
          id
        }
      }
    }
    lg: allFile(
      filter: {
        relativeDirectory: { eq: "home_slides" }
        childImageSharp: { original: { width: { eq: 2560 } } }
      }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              jpgOptions: { progressive: true }
              placeholder: BLURRED
              quality: 100
            )
          }
          name
          id
        }
      }
    }
    normal: allFile(
      filter: {
        relativeDirectory: { eq: "home_slides" }
        childImageSharp: { original: { width: { eq: 1920 } } }
      }
      sort: { fields: name, order: ASC }
    ) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData(
              jpgOptions: { progressive: true }
              placeholder: BLURRED
              quality: 100
            )
          }
          name
          id
        }
      }
    }
  }
`;

const artDirected = css`
  @media screen and (min-width: 2000px) {
    height: 900px;
  }

  @media screen and (min-width: 600px) and (max-width: 992px) {
    height: 400px;
  }

  @media screen and (max-width: 600px) {
    height: 250px;
  }
`;

const carouselCSS = css`
  .carousel-caption {
    text-align: center;
    bottom: auto;
    left: 10%;
    top: 50%;
    transform: translateY(-50%);
    width: 40%;
    background-color: #007bff;
    border-radius: 0.25rem;
    box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
  }

  .carousel-caption h2 {
    font-family: "Lilita One";
    text-transform: uppercase;
    font-size: 2rem;
  }

  .carousel-caption h3 {
    font-size: 1.5rem;
    font-weight: lighter;
    color: #ffc107;
  }

  /* xlg and beyond */
  @media screen and (min-width: 1600px) {
    .carousel-caption {
      left: 28%;
      width: 25%;
    }
  }

  /* up to md */
  @media screen and (max-width: 992px) {
    .carousel-caption {
      position: relative;
      top: 0;
      left: 0;
      transform: translateY(0%);
      width: 100%;
      text-align: center;
      min-height: 320px;
      border-radius: 0;
    }

    .carousel-control-prev,
    .carousel-control-next {
      align-items: end;
      z-index: 999;
    }

    .carousel-control-prev span,
    .carousel-control-next span {
      margin-bottom: 1rem;
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
