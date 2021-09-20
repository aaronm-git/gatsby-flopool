import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../../styles/footer.css";

const Footer = () => {
  return (
    <footer id="footer" className="text-light">
      <section className="bg-dark subsection">
        <Container>
          <Row className="justify-content-between">
            <Col md={3}>
              <Link to="/">
                <StaticImage
                  src="../../images/flopool-logo-white.png"
                  alt="FloPool - The best pool service company in Miami, Florida"
                  placeholder="tracedSVG"
                />
              </Link>
              <ul className="mt-2 border-top border-warning py-2">
                <li>Florida Swimming Pools LLC.</li>
                <li>13301 SW 97th St.</li>
                <li>Suite #118</li>
                <li>Miami, Florida 33186</li>
              </ul>
            </Col>
            <Col md={3}>
              <h5 className="border-bottom border-warning pb-2">
                Useful Links
              </h5>
              <ul className="ul-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/get-a-quote">Get a quote</Link>
                </li>
                <li>
                  <Link to="/jobs">We're Hiring!</Link>
                </li>
              </ul>
            </Col>
            <Col md={3}>
              <h5 className="border-bottom border-warning pb-2">Services</h5>
              <ul className="ul-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
                <li>
                  <Link to="/get-a-quote">Get a quote</Link>
                </li>
              </ul>
            </Col>{" "}
          </Row>
        </Container>
      </section>
      <section className="bg-primary py-2 text-center">
        <span className="d-block">FloPool is fully licensed and insured.</span>
        <span className="d-block">
          Master Swimming Pool Maintenance Unlimited Certified Contractor for
          Mismi Dade and Florida State
        </span>
        <span className="d-block">CC 08P000918 / RP 252555135</span>
      </section>
      <section
        className="text-center py-2"
        style={{ backgroundColor: "black" }}
      >
        <Container fluid>
          <small>
            © {new Date().getFullYear()} Florida Swimming Pools LLC. All Rights
            Reserved.
          </small>
          <br />
          <small>
            Designed by <a href="www.aaronmolina.me">www.aaronmolina.me</a>
          </small>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
