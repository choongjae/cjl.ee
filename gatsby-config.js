module.exports = {
  siteMetadata: {
    title: `CJ Lee`,
    titleTemplate: `%s · CJ Lee`,
    defaultTitle: `CJ Lee`,
    description: `CJ Lee: Computer Science @ Cornell`,
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

    // `gatsby-transformer-sharp`,
    // `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `CJ Lee | Personal Site`,
        short_name: `CJ Lee`,
        start_url: `/`,
        background_color: ` FFF0DB`, //#7B1A28`,
        theme_color: `FFF0DB`, //k#D4AF37`,
        display: `standalone`,
        icon: `static/logo.svg`, // This path is relative to the root of the site.
      },
    },

    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1000,
              wrapperStyle: "margin: 0px",
            },
          },
        ],
      },
    },
    // {
    //   resolve: `gatsby-transformer-remark`,
    //   options: {
    //     plugins: [
    //       {
    //         resolve: `gatsby-remark-images`,
    //         options: {
    //           // It's important to specify the maxWidth (in pixels) of
    //           // the content container as this plugin uses this as the
    //           // base for generating different widths of each image.
    //           maxWidth: 590,
    //         },
    //       },
    //     ],
    //   },
    // },
  ],
};
