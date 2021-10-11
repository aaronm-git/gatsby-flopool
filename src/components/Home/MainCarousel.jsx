/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Carousel, Container } from "react-bootstrap";
import { GatsbyImage, getImage, withArtDirection } from "gatsby-plugin-image";
import { Link, graphql, useStaticQuery } from "gatsby";

const MainCarousel = () => {
  const slides = [
    {
      imgName: "best_pool_service_miami",
      imgAlt: "We are the best pool service company in Miami, FL",
      title: "Miami's Best Pool Service Company",
      subtitle: "",
      text: `FloPool is the preferred pool service and repair company
      for residential and commercial pool owners throughout South Miami.
      We are licensed and insured, so you know you're hiring a pool 
      service company that looks after you.`,
      imgUrl: "/get-a-quote",
      btnLinks: [
        {
          text: "Get A Quote",
          url: "/get-a-quote",
          btnClass: "btn-warning",
        },
      ],
    },
    {
      imgName: "swimming_pool_equipment_repair",
      imgAlt: "We are the best pool service company in Miami, FL",
      title: "Professional Pool Equipment Installation and Repair",
      subtitle: "",
      text: `We install, service and repair all brand-name pool and spa
      equipment. From pumps and filters to heaters and salt systems, our
      licensed experts can handle it.`,
      imgUrl: "/get-a-quote",
      btnLinks: [
        {
          text: "Get A Quote",
          url: "/get-a-quote",
          btnClass: "btn-warning",
        },
      ],
    },
    {
      imgName: "green_pool_restoration_service",
      imgAlt: "Green Pool Restoration Services In Miami",
      title: "Green Pool Restoration Service",
      // subtitle: "We'll restore your green swimming pool back",
      text: "Maintaing a healthy blue is no easy task, especially under Miami's sunny weather. The sun helps algie thrive and deminishes chlorine levels. So when your pools is not treated properly, your pool can turn green fast. FloPool provides a green pool restoration service to prevent and restore green pools.",
      imgUrl: "/get-a-quote",
      btnLinks: [
        {
          text: "Get A Quote",
          url: "/get-a-quote",
          btnClass: "btn-warning",
        },
        // {
        //   text: "Learn More",
        //   url: "/services/green-pool-restoration",
        //   btnClass: "btn-outline-light",
        // },
      ],
    },
  ];

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
    const large = data.lg.edges[lgImgNodeIndex].node;
    const normal = data.normal.edges[normalImgNodeIndex].node;

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
    return (
      <GatsbyImage
        image={images}
        alt={imgAlt}
        css={artDirected}
        // className="w-100"
        // imgClassName="img-fluid"
      />
    );
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
                {slide.btnLinks.length &&
                  slide.btnLinks.map((btn, t) => {
                    return (
                      <Link
                        className={"btn btn-lg mb-2 mr-2 " + btn.btnClass}
                        to={btn.url}
                        key={i + "-maincarouselbtn-" + t}
                      >
                        {btn.text}
                      </Link>
                    );
                  })}
              </Container>
            </Carousel.Caption>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
};

export default MainCarousel;

const artDirected = css`
  width: 100%;
  // width: 1920px;
  // height: 800px;
  @media screen and (min-width: 2000px) {
    // width: 2560px;
    height: 900px;
  }
  @media screen and (max-width: 992px) {
    height: 60vw;
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
