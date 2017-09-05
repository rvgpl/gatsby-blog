module.exports = {
  siteMetadata: {
    title: "Gatsby Blog"
  },
  pathPrefix: `/gatsby-blog`,
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          // {
          //   resolve: "gatsby-remark-images",
          //   options: {
          //     maxWidth: 590
          //   }
          // },
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    // "gatsby-transformer-sharp",
    // "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components"
  ]
};
