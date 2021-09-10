module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "FloPool LLC",
  },
  plugins: [
    {
      resolve: "gatsby-source-contentful",
      options: {
        accessToken: "nrnQSLVqQzDOhGYfIKD8AukNX7eUtxL3etSUNlhDaDI",
        spaceId: "8pv04imr670y",
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-MSLR9R5ESB",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};
