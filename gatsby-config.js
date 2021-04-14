const path = require('path')

const STORE_ID = path.basename(__dirname).replace('.instore', '')

module.exports = {
  plugins: [
    {
      resolve: '@vtexlab/gatsby-theme-instore-core',
      options: { tenant: STORE_ID },
    },
  ],
}
