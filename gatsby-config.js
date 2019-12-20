module.exports = {
  siteMetadata: {
    title: "Natesan Sivagnanam",
    titleTemplate: "%s · The Real Hero",
    description: "Portfolio of Natesan Sivagnanam",
    url: "https://www.natesan.netlify.com", // No trailing slash allowed!
    twitterUsername: "@NatesanSiv",
    siteUrl: "https://www.natesan.netlify.com",
  },
  plugins: [
    { resolve: `gatsby-plugin-react-helmet` },
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.natesan.netlify.com`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `src`,
        path: `${__dirname}/src/`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Natesan's Portfolio`,
        short_name: `Natesan`,
        start_url: `/index`,
        background_color: `#f7f0eb`,
        theme_color: `#000`,
        display: `standalone`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/experience`, `/skills`, `/contact`],
      },
    },
    {
      resolve: "gatsby-plugin-html-attributes",
      options: {
        lang: "en",
      },
    },
    {
      resolve: "gatsby-plugin-page-transitions",
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
