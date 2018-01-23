const commonFn = require('../common')

/* ---------------- browser ------------------- */
// device
const getOS = require('./device/getOS')
const isMobile = require('./device/isMobile')

// redirect
const redirect = require('./http/redirect')

// dom
const addLoadEvent = require('./dom/addLoadEvent')
const insertAfter = require('./dom/insertAfter')
const addClass = require('./dom/addClass')
const getNextElement = require('./dom/getNextElement')

const browserFn = {
  getOS,
  isMobile,
  redirect,
  addLoadEvent,
  insertAfter,
  addClass,
  getNextElement
}

module.exports = Object.assign({}, commonFn, browserFn)
