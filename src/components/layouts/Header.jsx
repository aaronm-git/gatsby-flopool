import React from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  Container,
} from "react-bootstrap";

import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="fixed-top">
      <Navbar expand="lg" variant="light" bg="light">
        <Container>
          <span>
            Call us today: <a href="tel:3052537665">(305) 253-7665</a> |{" "}
            <a href="/request-a-quote">Request A Quote</a> |{" "}
            <a href="/make-a-payment">Make A Payment</a>
          </span>
          <span className="ml-lg-auto">
            Email Customer Service:{" "}
            <a href="mailto:cs@flopool.com">cs@flopool.com</a>
          </span>
        </Container>
      </Navbar>
      <Navbar id="mainnavbar" bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Link to="/" className="navbar-brand">
            <StaticImage
              src="../../images/logo-full.png"
              loading="eager"
              alt="Florida Swimming Pools LLC - FloPool"
              placeholder="tracedSVG"
              layout="fixed"
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
              <div className="">
                <Link to="/request-a-quote" className="btn btn-primary">
                  Request A Quote
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
