module.exports = {
  siteMetadata: {
    title: "Gatsby Blog"
  },
  pathPrefix: `/gatsby-blog`,
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/posts/`,
        name: "posts"
      }
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          "gatsby-remark-prismjs",
          "gatsby-remark-copy-linked-files",
          "gatsby-remark-smartypants"
        ]
      }
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-styled-components"
  ]
};
