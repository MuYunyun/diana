/* ---------------- common ------------------- */
// array
import uniq = require('./array/uniq')
import intersection = require('./array/intersection')
import countInArr = require('./array/countInArr')
import difference = require('./array/difference')

// random
import rdColor = require('./random/rdColor')
import rdNum = require('./random/rdNum')

// regexp
import isEmail = require('./regexp/isEmail')
import isPhoneNum = require('./regexp/isPhoneNum')

// string
import trim = require('./string/trim')
import changeCase = require('./string/changeCase')
import escapeStr = require('./string/escapeStr')
import sortStr = require('./string/sortStr')

// lang
import clone = require('./lang/clone')
import cloneDeep = require('./lang/cloneDeep')
import typeObj = require('./lang/isType')

// math
import { sum, mean, max, min, distance, gcd } from './math/math'
import round = require('./math/round')

// object
import equal = require('./object/equal')
import pairs2obj = require('./object/pairs2obj')
import convertInObj = require('./object/convertInObj')

// url
import obj2query = require('./url/obj2query')
import query2obj = require('./url/query2obj')

// collection
import each = require('./collection/each')

// function
import { debounce, Debounce } from './function/debounce'
import throttle = require('./function/throttle')
import curry = require('./function/curry')

// time
import timeTaken = require('./time/timeTaken')

const fn = {
  uniq,
  intersection,
  countInArr,
  difference,
  rdColor,
  rdNum,
  isEmail,
  isPhoneNum,
  trim,
  changeCase,
  escapeStr,
  sortStr,
  clone,
  cloneDeep,
  sum,
  mean,
  max,
  min,
  distance,
  gcd,
  round,
  equal,
  pairs2obj,
  convertInObj,
  obj2query,
  query2obj,
  each,
  debounce,
  Debounce,
  throttle,
  curry,
  timeTaken,
}

const commonFn = {
  ...fn,
  ...typeObj,
}

export = commonFn