import React from "react";
import { graphql, StaticQuery } from "gatsby";
import { Carousel, Container, Row, Col, Card } from "react-bootstrap";

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
          <section className="subsection">
            <Container>
              <div className="text-center">
                <h2 className="title text-primary">
                  <span className="d-none d-md-inline">⭐️ ⭐️ </span>⭐️
                  Testimonials ⭐️
                  <span className="d-none d-md-inline"> ⭐️ ⭐️</span>
                </h2>
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
                    stars.push(<span className="mr-2">⭐️</span>);
                  }

                  return (
                    <Carousel.Item key={review.id}>
                      <Row
                        style={{ minHeight: "400px" }}
                        className="align-items-center"
                      >
                        <Col md={{ span: 8, offset: 2 }}>
                          <Card className="shadow">
                            <Card.Body>
                              <h5>{review.name}</h5>
                              <p>{stars}</p>
                              <p>{review.text.text}</p>
                              <p className="text-muted float-right">
                                {review.source ? review.source : "Google"}
                              </p>
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
