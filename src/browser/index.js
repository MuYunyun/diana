const commonFn = require('../common')

/* ---------------- browser ------------------- */
const getOS = require('./device/getOS')
const isMobile = require('./device/isMobile')
const redirect = require('./http/redirect')

const browserFn = {
  getOS,
  isMobile,
  redirect,
}

module.exports = Object.assign({}, commonFn, browserFn)
