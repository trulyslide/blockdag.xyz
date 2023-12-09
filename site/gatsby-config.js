/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `BlockDAG - The next evolution of blockchain technology`,
    description: `BlockDAG is next evolution of blockchain technology, enabling native Layer 1 scaling on an unprecedented level, while maintaining high levels of security and decentralization.`,
    author: `@blockdag_xyz`,
    siteUrl: `https://blockdag.xyz`,
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/static/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#000000`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/img/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-82HFS5Q55R", // Google Analytics / GA
          "AW-1069557388", // Google Ads / Adwords / AW
        ],
      },
    },
    `gatsby-transformer-remark`, // This plugin transforms the markdown files into HTML
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        // options here
      },
    },

  ],
}
