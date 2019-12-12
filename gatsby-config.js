module.exports = {
  siteMetadata: {
    title: "Natesan Sivagnanam",
    titleTemplate: "%s · The Real Hero",
    description: "Portfolio of Natesan Sivagnanam",
    url: "https://www.natesan.netlify.com", // No trailing slash allowed!
    image: "/favicon.ico", // Path to your image you placed in the 'static' folder
    twitterUsername: "@NatesanSiv",
  },
  plugins: [
    { resolve: `gatsby-plugin-react-helmet` },
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
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#000`,
        display: `standalone`,
        icon: `src/images/favicon.ico`,
      },
    },
  ],
}
