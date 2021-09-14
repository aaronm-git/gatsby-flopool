import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../styles/global.css";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default Main;
