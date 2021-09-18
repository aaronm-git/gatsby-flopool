import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const KeyBenefits = () => {
  return (
    <section id="keybenefits" className="subsection text-center">
      <Container>
        <h2>Reliable Swimming Pool Service & Repairs in Miami, Fl.</h2>
        <Row>
          <Col md={4}>
            <StaticImage
              src="../../images/home/key-benefits.png"
              quality={100}
              alt="Weekly residential and commercial pool service in Miami, Florida"
              layout="constrained"
              placeholder="tracedSVG"
            />
            <div className="copy">
              <h4 className="title">Pool Cleaning & Maintenance</h4>
              <p>
                South Florida residents, condos, and homeowners associations
                have many options when it comes to choosing a pool service
                company in Miami. When it is experience and reliability that
                counts, you can trust Florida Swimming Pools LLC; for all your
                pool services needs. We provide top-quality pool cleaning,
                maintenance, and repair services throughout Miami, Florida.
              </p>
            </div>
          </Col>
          <Col md={4}>
            <StaticImage
              src="../../images/home/key-benefits-3.png"
              quality={100}
              alt="We install, service and repair all brand-name pool and spa equipment in Miami, Florida"
              layout="constrained"
              placeholder="tracedSVG"
            />
            <div className="copy">
              <h4 className="title">Pool Equipement Installation & Repair</h4>
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
            <StaticImage
              src="../../images/home/key-benefits-2.png"
              quality={100}
              alt="Professional pool service care in Miami, Florida"
              layout="constrained"
              placeholder="tracedSVG"
            />
            <div className="copy">
              <h4 className="title">Licensed & Insured Company</h4>
              <p>
                Florida Swimming Pools LLC. is fully licensed and insured with
                over 15 years of industry experience. All our professional
                technicians are Certified Pool & Spa Operator® (CPO®) required
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
