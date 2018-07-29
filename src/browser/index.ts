import commonFn from '../common'

/* ---------------- browser ------------------- */
// device
import { getOS } from './device/getOS'
import { isMobile } from './device/isMobile'

// redirect
import { redirect } from './http/redirect'

// dom
import { addLoadEvent } from './dom/addLoadEvent'
import { insertAfter } from './dom/insertAfter'
import { addClass } from './dom/addClass'
import { hasClass } from './dom/hasClass'
import { getNextElement } from './dom/getNextElement'

const browserFn = Object.assign({}, commonFn, {
  getOS,
  isMobile,
  redirect,
  addLoadEvent,
  insertAfter,
  addClass,
  hasClass,
  getNextElement
})

export default browserFn
