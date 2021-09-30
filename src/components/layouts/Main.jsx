import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Seo from "../Seo";
import "../../styles/global.css";
const Layout = ({ children }) => {
  return (
    <>
      <Seo />
      <Header />
      <div id="main">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
