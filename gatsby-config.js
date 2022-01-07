module.exports = {
  siteMetadata: {
    title: `CJ Lee`,
    titleTemplate: `%s • CJ Lee`,
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
        background_color: `#7B1A28`,
        theme_color: `#D4AF37`,
        display: `standalone`,
        icon: `static/logo.svg`, // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-mdx",
  ],
};
