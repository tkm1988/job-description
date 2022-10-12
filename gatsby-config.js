module.exports = {
  siteMetadata: {
    title: `職務経歴書`,
    siteUrl: `https://job-description-iota.vercel.app/`,
    description: `片ノ坂 卓磨の職務経歴書`,
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/src/markdown-pages`,
      },
    },
    `gatsby-transformer-remark`,
  ],
}
