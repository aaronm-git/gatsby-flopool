import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

const KeyBenefits = () => {
  return (
    <section id="keybenefits" className="subsection text-center">
      <Container>
        <h1 className="title">
          We are the BEST pool service company in Miami, FL
        </h1>
        <Row>
          <Col md={4}>
            <Link to="/services/residential">
              <StaticImage
                src="../../images/home/key-benefits.png"
                alt="Weekly residential and commercial pool service in Miami, Florida"
                placeholder="tracedSVG"
                height={250}
              />
            </Link>
            <div className="copy">
              <Link to="/services/residential" className="text-decoration-none">
                <h2 className="subtitle text-primary">
                  Pool Cleaning & Maintenance
                </h2>
              </Link>
              <p>
                South Florida residents, condos, and homeowner associations have
                many options when it comes to choosing a pool service company in
                Miami. When it is experience and reliability that counts, you
                can trust FloPool for all your pool services needs. We provide
                top-quality pool cleaning, maintenance, and repair services
                throughout Miami, Florida.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <Link to="/services/repair">
              <StaticImage
                src="../../images/home/key-benefits-3.png"
                alt="We install, service and repair all brand-name pool and spa equipment in Miami, Florida"
                placeholder="tracedSVG"
                height={250}
              />
            </Link>
            <div className="copy">
              <Link to="/services/repair" className="text-decoration-none">
                <h2 className="subtitle text-primary">
                  Pool Equipement Installation & Repair
                </h2>
              </Link>
              <p>
                FloPool provides leak detection service, repairs, and equipment
                installations for any type of pool, whether commercial or
                residential. Our repair technicians are certified to repair and
                install a wide range of pool equipment and upgrades such as pool
                heaters, pumps, LED lights, salt systems, pool automation
                systems, eco-efficient pumps, and more; for pool repair in
                Miami, Florida.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <Link to="/about">
              <StaticImage
                src="../../images/home/key-benefits-2.png"
                alt="Professional pool service care in Miami, Florida"
                placeholder="tracedSVG"
                height={250}
              />
            </Link>
            <div className="copy">
              <Link to="/about" className="text-decoration-none">
                <h2 className="subtitle text-primary">
                  Licensed & Insured Company
                </h2>
              </Link>
              <p>
                Florida Swimming Pools LLC. is fully licensed and insured with
                over 15 years of industry experience. All our professional
                technicians are Certified Pool & Spa Operator?? (CPO??) required
                by Florida Law. We work with a variety of systems such as
                HAYWARD, PENTAIR, ZODIAC, and more. Quality of service is our
                guarantee.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default KeyBenefits;
