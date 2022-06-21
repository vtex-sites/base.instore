require('dotenv').config({
  path: `${__dirname}/vtex.env`,
})

module.exports = {
  plugins: [
    {
      resolve: '@vtexlab/gatsby-theme-instore-core',
      options: { tenant: process.env.GATSBY_STORE_ID },
    },
  ],
}
