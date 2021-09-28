import React from "react";
import Layout from "../components/layouts/Main";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";
import { TelephoneFill } from "react-bootstrap-icons";
import ContactNetlify from "../components/ContactNetlify";

const bottomOverlayStyle = {
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100%",
  textAlign: "center",
};

const About = () => {
  return (
    <Layout>
      <section className="hero">
        <StaticImage
          src="../images/about-us/hero-about-us.jpg"
          alt="Learn more about FloPool and why we're the best pool service in Miami, Florida"
          layout="fullWidth"
          loading="eager"
        />
        <h1 className="title">About Our Company</h1>
      </section>
      <section id="aboutcompany" className="subsection">
        <Container>
          <Row className="flex-lg-row-reverse align-items-center">
            <Col md={6}>
              <h2 className="subtitle">Who We Are</h2>
              <p>
                We are a full-service pool service, maintenance, and repair
                company headquartered in South Miami, Florida. Our service area
                is heavily concentrated in the neighborhoods of Kendall,
                Pinecrest, Coral Gables, Coconut Grove, Gables by the Sea,
                Cocoplum and Palmetto Bay. Unlike many small pool service
                companies, we serve both commercial and residential clients and
                our pool technicians are fully licensed and insured CPOs so you
                can rest asured youre pool is being serviced by pool
                professionals.
              </p>
              <p>
                After many years of servicing pools throughout the South Florida
                area as a pool technicians, we decided to form FloPool, with the
                intent of offering a high standard pool service at an affordable
                price.
              </p>
            </Col>
            <Col md={6}>
              <div className="position-relative">
                <StaticImage
                  src="../images/about-us/about-us.jpg"
                  alt="Learn Why FloPool is South Florida's #1 Pool Service Company"
                  layout="fullWidth"
                  className="rounded shadow mb-4"
                />
                <div style={bottomOverlayStyle}>
                  <a href="tel:3052537665" className="btn btn-lg btn-warning">
                    <TelephoneFill />
                    Contact Us
                  </a>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="subsection bg-primary">
        <Container>
          <Row>
            <Col md={12} className="mb-4  text-light">
              <h2 className="subtitle  text-light">
                Quality Pool Service in Miami is our company mission!
              </h2>
              <p>
                There are many pool service companies in Miami and throughout
                South Florida. Pools are part of the South Florida lifestyle.
                That said, caring and maintaining a pool is a laborious task
                many homeowners hate and in many cases don’t know how to do,
                correctly that is! Our mission at FloPool is to make having a
                pool a fun and safe experience. With the implementation of
                scheduling software, and highly trained, motivated technician we
                make pool maintenance simple and affordable.
              </p>
              <p>
                Many who are new to owning a pool may not see the value of a
                reliable and affordable pool service provider. Just like your
                car and even your computer if neglected you pool can end up
                costing you a pretty penny. Pools require proper and regular
                maintenance, and this is where we come in.
              </p>
              <p>
                Our team of pool services professional will ensure that the
                chemical balance of the water is correct, see that proper water
                levels and circulation are maintained and make sure that your
                filtration system is doing its job.
              </p>
            </Col>
            <Col md={6} className="mb-4  text-light">
              <h2 className="subtitle  text-light">
                No pool service in Miami is too big or too small!
              </h2>
              <p>
                Florida Swimming Pools LLC., services both residential and
                commercial pools ranging from backyard residential pools to a
                commercial scale larger facility; our team of professionals can
                service it all. FloPool has the tools, the knowledge, and the
                manpower to get it done. We take our job seriously, show up to
                every task in our branded company vehicles, and are always
                uniformed and professionally attired. Rain or shine we will not
                miss your scheduled pool service. From pool remolding jobs to
                any emergency pool cleaning and repair, FloPool is one Miami
                pool service company you can count on to get the job done right
                the first time out!
              </p>
            </Col>
            <Col md={6} className="mb-4 text-light">
              <h2 className="subtitle text-light">Additional Services</h2>
              <p>
                Although we have become known as the Miami Pool Service experts,
                we would like to remind you that FloPool is the full-service
                pool maintenance and repair company of choice in Miami. We have
                the experience, tool, and expertise to handle pool leak
                detection and the installation of pool safety features such as
                Baby Guard pool fences and more. So if you are looking for
                quality maintenance with 100% satisfaction guarantee, call us
                today to schedule an appointment; or for a free estimate. We
                hope to engage you and gain your business. We know you will be
                pleased with the level of our overall service.
              </p>
            </Col>
          </Row>
        </Container>
      </section>
      <ContactNetlify reversed />
    </Layout>
  );
};

export default About;
