/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { graphql, StaticQuery } from "gatsby";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
import { StaticImage } from "gatsby-plugin-image";

const Reviews = () => {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const reviews = data.allContentfulReviews.nodes;
        return (
          <section
            className="subsection bg-primary text-white"
            css={componentCSS}
          >
            <Container>
              <div className="text-center">
                <h2 className="title text-white">Testimonials</h2>
                <p style={{ maxWidth: "650px", margin: "0 auto 1rem" }}>
                  FloPool is the best pool service company in South Miami,
                  Florida! But don't just take our word for it. Read our raving
                  reviews from Google, Angie's List, Bing, and more!
                </p>
              </div>
              <Carousel>
                {reviews.map((review) => {
                  const stars = [];
                  for (let index = 0; index < review.rating; index++) {
                    stars.push(
                      <span className="mr-2" key={"rating_" + index}>
                        <StarFill className="text-primary" />
                      </span>
                    );
                  }

                  return (
                    <Carousel.Item key={review.id}>
                      <Row>
                        <Col md={{ span: 8, offset: 2 }}>
                          <Card className="shadow text-dark mx-2">
                            <div className="header shadow-sm">
                              <div>
                                <h3 className="h5">{review.name}</h3>
                                <p>{stars}</p>
                              </div>
                              <StaticImage
                                src="../images/google-logo.png"
                                alt=""
                                layout="fixed"
                                placeholder="blurred"
                                width={100}
                              />
                            </div>
                            <Card.Body>
                              <p className="pb-2">{review.text.text}</p>
                            </Card.Body>
                          </Card>
                        </Col>
                      </Row>
                    </Carousel.Item>
                  );
                })}
              </Carousel>
            </Container>
          </section>
        );
      }}
    />
  );
};

export default Reviews;

const query = graphql`
  query MyReviews {
    allContentfulReviews {
      nodes {
        id
        name
        rating
        text {
          text
        }
      }
    }
  }
`;

const componentCSS = css`
  .carousel-indicators {
    bottom: -4rem;
  }

  .card {
    position: relative;
    height: 300px;
  }

  .card .header {
    position: sticky;
    top: 0;
    display: flex;
    background-color: white;
    z-index: 2;
    padding: 16px 10px 0;
  }

  .card .header .gatsby-image-wrapper {
    margin-left: auto;
  }
`;
