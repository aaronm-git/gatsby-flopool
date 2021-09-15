import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="shadow-sm fixed-top">
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <span>
            Call us today: <a href="tel:3052537665">(305) 253-7665</a> |{" "}
            <Link to="/get-a-quote">Get A Quote</Link> |{" "}
            <Link to="/make-a-payment">Make A Payment</Link>
          </span>
          <span className="ml-lg-auto">
            Email Customer Service:{" "}
            <a href="mailto:cs@flopool.com">cs@flopool.com</a>
          </span>
        </Container>
      </Navbar>
      <Navbar id="mainnavbar" bg="white" expand="lg">
        <Container>
          <Link to="/" className="navbar-brand">
            <StaticImage
              src="../../images/flopool-logo-colored.png"
              loading="eager"
              alt="Florida Swimming Pools LLC - FloPool"
              placeholder="tracedSVG"
              objectFit="contain"
              height={60}
            />
          </Link>
          <Navbar.Toggle aria-controls="main-navbar-nav" />
          <Navbar.Collapse id="main-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/about" className="nav-link">
                About
              </Link>
              <Link to="/services" className="nav-link">
                Pool Services
              </Link>
              <Link to="/contact-us" className="nav-link">
                Contact Us
              </Link>
              <Link to="/blog" className="nav-link">
                Blog
              </Link>
              <div className="ml-lg-3">
                <Link
                  to="/get-a-quote"
                  className="btn btn-primary d-block d-lg-inline-block"
                >
                  Get A Quote
                </Link>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
