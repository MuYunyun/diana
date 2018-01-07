/**
 * webpack 打包入口文件
 */
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
const isArray = require('./lang/isArray')
const clone = require('./lang/clone')
const cloneDeep = require('./lang/cloneDeep')
const isType = require('./lang/isType')

// math
const sum = require('./math/sum')
const mean = require('./math/mean')
const max = require('./math/max')
const min = require('./math/min')
const distance = require('./math/distance')
const gcd = require('./math/gcd')

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
const debounce = require('./function/debounce')
const throttle = require('./function/throttle')
const curry = require('./function/curry')

// time
const timeTaken = require('./time/timeTaken')

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
  isArray,
  clone,
  cloneDeep,
  sum,
  mean,
  max,
  min,
  distance,
  gcd,
  equal,
  pairs2obj,
  convertInObj,
  obj2query,
  query2obj,
  each,
  debounce,
  throttle,
  curry,
  timeTaken,
}

const commonFn = Object.assign({}, fn, isType)

module.exports = commonFn
