
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./uniswap-bsc-sdk.cjs.production.min.js')
} else {
  module.exports = require('./uniswap-bsc-sdk.cjs.development.js')
}
