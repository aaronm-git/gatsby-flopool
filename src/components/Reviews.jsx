import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";
import { Star, StarFill, StarHalf } from "react-bootstrap-icons";
import { StaticImage } from "gatsby-plugin-image";

const query = graphql`
  query {
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

const Reviews = () => {
  return (
    <StaticQuery
      query={query}
      render={(data) => {
        const reviews = data.allContentfulReviews.nodes;
        return (
          <section className="subsection bg-primary text-white">
            <Container>
              <div className="text-center">
                <h2 className="title">Testimonials</h2>
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
                      <Row style={{ minHeight: "350px" }}>
                        <Col md={{ span: 8, offset: 2 }}>
                          <Card className="shadow text-dark mx-2">
                            <Card.Body className="position-relative">
                              <h5>{review.name}</h5>
                              <p>{stars}</p>
                              <blockquote class="blockquote">
                                <p class="mb-0">{review.text.text}</p>
                              </blockquote>
                              <StaticImage
                                src="../images/google-logo.png"
                                alt=""
                                layout="fixed"
                                placeholder="blurred"
                                width={100}
                                style={{
                                  position: "absolute",
                                  top: ".5rem",
                                  right: "1rem",
                                }}
                              />
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
