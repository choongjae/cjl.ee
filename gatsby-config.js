module.exports = {
  siteMetadata: {
    title: `CJ Lee`,
    titleTemplate: `CJ Lee | %s`,
    defaultTitle: `CJ Lee`,
    description: `CJ Lee`,
    author: `@cjlee`,
    siteUrl: `https://cjl.ee`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-image`,
    `gatsby-plugin-anchor-links`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `CJ Lee`,
    //     short_name: `CJ Lee`,
    //     start_url: `/`,
    //     // background_color: ` FFF0DB`, //#7B1A28`,
    //     theme_color: `FFF0DB`, //k#D4AF37`,
    //     display: `standalone`,
    //     icon: `static/logo.svg`, // This path is relative to the root of the site.
    //   },
    // },

    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 450,
              linkImagesToOriginal: false,
              // wrapperStyle: "width: 100%; margin-left: auto;",
            },
          },
        ],
      },
    },
  ],
};
