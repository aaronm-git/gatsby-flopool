import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "reset-css";
import "../../styles/global.css";
import "../../styles/gfonts.css";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div id="main">{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
