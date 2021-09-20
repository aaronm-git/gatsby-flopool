import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "../../styles/global.css";
import { FormspreeProvider } from "@formspree/react";

const Main = ({ children }) => {
  return (
    <FormspreeProvider project={process.env.FORMSPREE_PROJECT_ID}>
      <Header />
      <div id="main">{children}</div>
      <Footer />
    </FormspreeProvider>
  );
};

export default Main;
