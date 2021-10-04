/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Container, Row, Col } from "react-bootstrap";
import { Link, graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Services = () => {
  const data = useStaticQuery(
    graphql`
      {
        residential: file(base: { eq: "residential-pool-service.jpg" }) {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        commercial: file(base: { eq: "commercial-pool-service.jpg" }) {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  );

  console.log(data);

  // Set ImageData.
  const residentialImageData = data.residential.childImageSharp.fluid;
  const commercialImageData = data.commercial.childImageSharp.fluid;

  return (
    <section id="services" className="text-center">
      <Container className="bg-warning mb-5 shadow rounded">
        <Row>
          <Col md={6} className="p-0 text-right">
            <BackgroundImage
              Tag="div"
              fluid={residentialImageData}
              backgroundColor={`#040e18`}
              css={backgroundCSS}
            />
          </Col>
          <Col
            md={6}
            className="py-4 d-flex align-items-center"
            css={textBoxCSS}
          >
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
          <Col md={6} className="p-0">
            <BackgroundImage
              Tag="div"
              fluid={commercialImageData}
              backgroundColor={`#040e18`}
              css={backgroundCSS}
            />
          </Col>
          <Col
            md={6}
            className="py-4 d-flex align-items-center"
            css={textBoxCSS}
          >
            <div>
              <h2 className="h1 text-primary font-weight-bold text-uppercase">
                Commercial
                <br />
                <span className="font-weight-light">Pool Serives</span>
              </h2>
              <p>
                Our commercial pools are backed by a team of dedicated and
                reliable pool technicians who will maintain a clean and safe
                swimming pool for every guest. You can count on FloPool to
                provide you the best pool service in Miami, Florida.
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

const textBoxCSS = css`
  @media screen and (min-width: 768px) {
    padding-right: 2rem;
    padding-left: 2rem;
  }

  @media screen and (max-width: 768px) {
    h2 {
      font-size: 26px;
    }
  }
`;

const backgroundCSS = css`
  width: 100%;
  height: 100%;
  min-height: 400px;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-size: cover;

  @media screen and (max-width: 992px) {
    height: 350px;
  }
`;
