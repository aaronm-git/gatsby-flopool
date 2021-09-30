import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import "../../styles/footer.css";
import { EnvelopeFill, TelephoneFill } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer id="footer" className="text-light">
      <section className="bg-dark subsection">
        <Container>
          <Link to="/">
            <StaticImage
              src="../../images/flopool-logo-white.png"
              alt="FloPool - The best pool service company in Miami, Florida"
              placeholder="tracedSVG"
              width={200}
              className="mb-2"
            />
          </Link>
          <Row className="justify-content-between">
            <Col md={4} lg={6}>
              <h5 className="subtitle text-white">Contact Us</h5>
              <ul className="">
                <li>Florida Swimming Pools LLC.</li>
                <li>13301 SW 97th St.</li>
                <li>Suite #118</li>
                <li>Miami, Florida 33186</li>
              </ul>
              <hr className="bg-warning" />
              <ul className="">
                <h5>Miami, FL. Office</h5>
                <li>Mon-Sat: 8:30 AM – 6 PM</li>
                <li>Sunday: 10 AM – 4 PM</li>
                <li>
                  <a href="tel:3052537665">
                    <TelephoneFill />
                    (305) 253-7665
                  </a>
                </li>
                <li>
                  <a href="mailto:cs@flopool.com">
                    <EnvelopeFill />
                    cs@flopool.com
                  </a>
                </li>
              </ul>
            </Col>
            <Col md={4} lg={6}>
              <h5 className="subtitle text-white">Useful Links</h5>
              <ul className="ul-links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About Us</Link>
                </li>
                {/* <li>
                  <Link to="/services">Services</Link>
                </li> */}
                <li>
                  <Link to="/contact-us">Contact Us</Link>
                </li>
                {/* <li>
                  <Link to="/blog">Blog</Link>
                </li> */}
                <li>
                  <Link to="/get-a-quote">Get a quote</Link>
                </li>
                <li>
                  <a
                    href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=C6QC2BSJC9DY2"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Make a Payment
                  </a>
                </li>
                <li>
                  <Link to="/jobs">We're Hiring!</Link>
                </li>
              </ul>
            </Col>
            <Col md={4} lg={6}>
              <h5 className="subtitle text-white">Services</h5>
              <ul className="ul-links">
                <li>
                  <Link to="/services/residential">
                    Residential Pool Service
                  </Link>
                </li>
                <li>
                  <Link to="/services/commercial">Commercial Pool Service</Link>
                </li>
                <li>
                  <Link to="/services/repair">Pool Equipment Repair</Link>
                </li>
                <li>
                  <Link to="/services/leak-detection">Leak Detection</Link>
                </li>
                <li>
                  <Link to="/services/remodeling">
                    Pool and Deck Remodeling
                  </Link>
                </li>
              </ul>
            </Col>{" "}
          </Row>
        </Container>
      </section>
      <section className="bg-warning text-dark py-2 text-center">
        <small className="d-block">
          FloPool is fully licensed and insured.
        </small>
        <small className="d-block">
          Master Swimming Pool Maintenance Unlimited - Certified Contractor for
          Miami Dade and Florida State
        </small>
        <small className="d-block">CC 08P000918 / RP 252555135</small>
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
            Designed by{" "}
            <a href="https://www.aaronmolina.me">www.aaronmolina.me</a>
          </small>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
