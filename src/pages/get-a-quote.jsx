import React from "react";
import Layout from "../components/layouts/Main";
import ContactNetlify from "../components/ContactNetlify";
import Reviews from "../components/Reviews";
const GetAQuote = () => {
  return (
    <Layout>
      <ContactNetlify />
      <Reviews />
    </Layout>
  );
};

export default GetAQuote;
