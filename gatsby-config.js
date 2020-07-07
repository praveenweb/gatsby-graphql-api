module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
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
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-rss-feed`,
      options: {
        url: `https://hasura.io/blog/tagged/remote-joins/rss/`,
        name: `HasuraBlog`,
        // Optional
        // Read parser document: https://github.com/bobby-brennan/rss-parser#readme
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blogs`,
        path: `${__dirname}/src/`,
      }
    },
    {
      resolve: `gatsby-source-git`,
      options: {
        name: `graphql-engine`,
        remote: `https://github.com/hasura/graphql-engine.git`,
        // Specify the local checkout location, to avoid it being trashed on
        // cache clears.
        // Multiple patterns and negation supported. See https://github.com/mrmlnc/fast-glob
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
