import * as commonFn from '../common'

/* ---------------- browser ------------------- */
// device
import getOS = require('./device/getOS')
import isMobile = require('./device/isMobile')
import isClient = require('./device/isClient')

// redirect
import redirect = require('./http/redirect')

// dom
import addLoadEvent = require('./dom/addLoadEvent')
import insertAfter = require('./dom/insertAfter')
import addClass = require('./dom/addClass')
import hasClass = require('./dom/hasClass')

const browserFn = Object.assign({}, commonFn, {
  getOS,
  isMobile,
  isClient,
  redirect,
  addLoadEvent,
  insertAfter,
  addClass,
  hasClass,
})

export = browserFn
