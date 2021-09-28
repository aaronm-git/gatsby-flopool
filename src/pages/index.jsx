import React from "react";
import "../styles/home.css";
import Layout from "../components/layouts/Main";
import MainCarousel from "../components/Home/MainCarousel";
import KeyBenefits from "../components/Home/KeyBenefits";
import Services from "../components/Home/Services";
import ContactNetlify from "../components/ContactNetlify";
import Reviews from "../components/Reviews";

const Index = () => {
  return (
    <Layout>
      <MainCarousel />
      <KeyBenefits />
      <Services />
      <Reviews />
      <ContactNetlify />
    </Layout>
  );
};

export default Index;
