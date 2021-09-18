import React from "react";
import Layout from "../components/layouts/Main";
import MainCarousel from "../components/Home/MainCarousel";
import KeyBenefits from "../components/Home/KeyBenefits";
import "../styles/home.css";

const Index = () => {
  return (
    <Layout>
      <MainCarousel />
      <KeyBenefits />
    </Layout>
  );
};

export default Index;
