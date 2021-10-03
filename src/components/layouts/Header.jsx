/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { Row, Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";
import { TelephoneFill } from "react-bootstrap-icons";

const mobileCSS = css`
  @media screen and (max-width: 992px) {
    .btn {
      box-shadow: none;
    }
  }
`;

const Header = () => {
  return (
    <header className="shadow-sm fixed-top">
      <Navbar expand="lg" bg="light" className="d-none d-lg-block">
        <Container>
          <span>
            Call us today: <a href="tel:3052537665">(305) 253-POOL</a> |{" "}
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
              <div className="ml-lg-4" css={mobileCSS}>
                <Row>
                  <a
                    href="tel:3052537665"
                    className="btn btn-warning flex-fill d-md-none flex-fill mx-1"
                  >
                    <TelephoneFill /> Call Today
                  </a>
                  <Link
                    to="/get-a-quote"
                    className="btn btn-primary flex-fill mx-1"
                  >
                    Get A Quote
                  </Link>
                </Row>
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
