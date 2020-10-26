module.exports = {
  siteMetadata: {
    title: "The Art of Education University | Software Engineering",
    description: "A great education system depends on great software...",
    author: "The Art of Education University Software Engineering Team",
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "aoeu-software-engineering-portal",
        short_name: "AOEU Software Engineering Portal",
        start_url: "/",
        background_color: "#00b2dc",
        theme_color: "#00b2dc",
        display: "minimal-ui",
        icon: "src/images/app-icons/aoeu-icon.png", // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // "gatsby-plugin-offline",
    {
      resolve: "gatsby-plugin-sass",
      options: {}
    },
    {
      resolve: "gatsby-plugin-intl",
      options: {
        path: `${__dirname}/src/intl`,
        languages: ["en"],
        defaultLanguage: "en",
        redirect: true
      }
    }
  ],
}
