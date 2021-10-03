import React from "react";
import Layout from "../components/layouts/Main";
import MainCarousel from "../components/Home/MainCarousel";
import KeyBenefits from "../components/Home/KeyBenefits";
import Services from "../components/Home/Services";
import ContactNetlify from "../components/ContactNetlify";
import Reviews from "../components/Reviews";
import SEOComponent from "../components/SEO";

const Index = () => {
  return (
    <Layout>
      <SEOComponent />
      <MainCarousel />
      <KeyBenefits />
      <Services />
      <Reviews />
      <ContactNetlify />
    </Layout>
  );
};

export default Index;
