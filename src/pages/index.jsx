import React from "react";
import "../styles/home.css";
import Layout from "../components/layouts/Main";
import MainCarousel from "../components/Home/MainCarousel";
import KeyBenefits from "../components/Home/KeyBenefits";
import Services from "../components/Home/Services";

const Index = () => {
  return (
    <Layout>
      <MainCarousel />
      <KeyBenefits />
      <Services />
    </Layout>
  );
};

export default Index;
