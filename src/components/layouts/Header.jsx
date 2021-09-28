import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const Header = () => {
  return (
    <header className="shadow-sm fixed-top">
      <Navbar
        expand="lg"
        variant="light"
        bg="light"
        className="d-none d-lg-block"
      >
        <Container>
          <span>
            Call us today: <a href="tel:3052537665">(305) 253-7665</a> |{" "}
            <Link to="/get-a-quote">Get A Quote</Link> |{" "}
            <a
              href="https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&amp;hosted_button_id=C6QC2BSJC9DY2"
              target="_blank"
              rel="noreferrer"
            >
              Make a Payment
            </a>
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
                About Us
              </Link>
              <NavDropdown title="Services" id="collasible-nav-dropdown">
                <Link className="dropdown-item" to="/services/residential">
                  Residential Pool Service
                </Link>
                <Link className="dropdown-item" to="/services/commercial">
                  Commercial Pool Service
                </Link>
                <Link className="dropdown-item" to="/services/repair">
                  Pool Equipment Repair
                </Link>
                <Link className="dropdown-item" to="/services/leak-detection">
                  Leak Detection
                </Link>
                <Link className="dropdown-item" to="/services/remodeling">
                  Pool and Deck Remodeling
                </Link>
              </NavDropdown>
              <Link to="/contact-us" className="nav-link">
                Contact Us
              </Link>
              {/* <Link to="/blog" className="nav-link">
                Blog
              </Link> */}
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
