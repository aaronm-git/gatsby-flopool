import * as React from "react";
import Layout from "../components/layouts/Main";
import { Link } from "gatsby";
import { ChevronLeft } from "react-bootstrap-icons";
// markup
const NotFoundPage = () => {
  return (
    <Layout>
      <section
        className="subsection text-center"
        style={{ minHeight: "400px" }}
      >
        <h1 className="display-1">404</h1>
        <p>Looks like that page does not exist.</p>
        <Link to="/" className="btn-link">
          <ChevronLeft />
          Return to the homepage
        </Link>
      </section>
    </Layout>
  );
};

export default NotFoundPage;
