import React from "react";
import PropTypes from "prop-types";
import { useStaticQuery, graphql } from "gatsby";

const CarouselPicture = (props) => {
  const data = useStaticQuery(graphql`
    query SliderImageQuery {
      allFile(
        filter: { relativeDirectory: { eq: "home_slides" } }
        sort: { fields: childrenImageSharp___fluid___originalName, order: ASC }
      ) {
        nodes {
          childImageSharp {
            fluid {
              src
              originalName
              originalImg
            }
            id
          }
        }
      }
    }
  `);

  const preciseNodes = data.allFile.nodes.filter((i) =>
    i.childImageSharp.fluid.originalName.includes(props.fileName)
  );

  const sources = preciseNodes.map((i) => i.childImageSharp.fluid.originalImg);

  return (
    <picture>
      <source media="(min-width: 2000px)" srcset={sources[0]} />
      <source media="(max-width:992px)" srcset={sources[1]} />
      <img src={sources[2]} alt={props.alt} className="img-fluid" />
    </picture>
  );
};

CarouselPicture.propTypes = {
  fileName: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default CarouselPicture;
