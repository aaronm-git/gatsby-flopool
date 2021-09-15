import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../styles/global.css";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <div id="main">{children}</div>
      <Footer />
    </>
  );
};

export default Main;
