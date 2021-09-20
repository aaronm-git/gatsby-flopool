import React from "react";
import "../styles/home.css";
import Layout from "../components/layouts/Main";
import MainCarousel from "../components/Home/MainCarousel";
import KeyBenefits from "../components/Home/KeyBenefits";
import Services from "../components/Home/Services";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <Layout>
      <MainCarousel />
      <KeyBenefits />
      <Services />
      <Contact />
    </Layout>
  );
};

export default Index;
