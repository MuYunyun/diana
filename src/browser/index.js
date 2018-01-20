const commonFn = require('../common')

/* ---------------- browser ------------------- */
const getOS = require('./device/getOS')
const isMobile = require('./device/isMobile')
const redirect = require('./http/redirect')
const addLoadEvent = require('./http/addLoadEvent')
const insertAfter = require('./http/insertAfter')

const browserFn = {
  getOS,
  isMobile,
  redirect,
  addLoadEvent,
  insertAfter,
}

module.exports = Object.assign({}, commonFn, browserFn)
