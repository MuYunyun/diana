/* ---------------- common ------------------- */
// array
const uniq = require('./array/uniq')
const intersection = require('./array/intersection')
const countInArr = require('./array/countInArr')
const difference = require('./array/difference')

// random
const rdColor = require('./random/rdColor')
const rdNum = require('./random/rdNum')

// regexp
const isEmail = require('./regexp/isEmail')
const isPhoneNum = require('./regexp/isPhoneNum')

// string
const trim = require('./string/trim')
const changeCase = require('./string/changeCase')
const escapeStr = require('./string/escapeStr')
const sortStr = require('./string/sortStr')

// lang
const clone = require('./lang/clone')
const cloneDeep = require('./lang/cloneDeep')
const typeObj = require('./lang/isType')

// math
const { sum, mean, max, min, distance, gcd } = require('./math/math')
const round = require('./math/round')

// object
const equal = require('./object/equal')
const pairs2obj = require('./object/pairs2obj')
const convertInObj = require('./object/convertInObj')

// url
const obj2query = require('./url/obj2query')
const query2obj = require('./url/query2obj')

// collection
const each = require('./collection/each')

// function
const { debounce, Debounce } = require('./function/debounce')
const throttle = require('./function/throttle')
const curry = require('./function/curry')

// time
const timeTaken = require('./time/timeTaken')

module.exports = {
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
  ...typeObj,
}