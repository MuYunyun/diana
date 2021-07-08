import commonFn from '../common'

/* ---------------- browser ------------------- */
// device
import getOS from './device/getOS'
import isMobile from './device/isMobile'
import isClient from './device/isClient'

// redirect
import redirect from './http/redirect'

// dom
import addLoadEvent from './dom/addLoadEvent'
import insertAfter from './dom/insertAfter'
import addClass from './dom/addClass'
import hasClass from './dom/hasClass'

export {
  ...commonFn,
  getOS,
  isMobile,
  isClient,
  redirect,
  addLoadEvent,
  insertAfter,
  addClass,
  hasClass,
}
