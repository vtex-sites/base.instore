const VTEXLHConfig = require('@vtex/lighthouse-config').default

const urls = ['', '/instore/login']

module.exports = VTEXLHConfig({ urls, server: process.env.BASE_SITE_URL })
