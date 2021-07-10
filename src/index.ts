/* ---------------- common ------------------- */
// array
import uniq from './uniq'
import intersection from './intersection'
import countInArr from './countInArr'
import difference from './difference'

// random
import rdColor from './rdColor'
import rdNum from './rdNum'

// regexp
import isEmail from './isEmail'
import isPhoneNum from './isPhoneNum'

// string
import trim from './trim'
import changeCase from './changeCase'
import escapeStr from './escapeStr'
import sortStr from './sortStr'

// lang
import clone from './clone'
import cloneDeep from './cloneDeep'
import {
  isArguments,
  isFunction,
  isString,
  isDate,
  isRegExp,
  isError,
  isSymbol,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isNumber,
  isArray } from './isType'

// math
import { sum, mean, max, min, distance, gcd } from './math'
import round from './round'

// object
import equal from './equal'
import pairs2obj from './pairs2obj'
import convertInObj from './convertInObj'

// url
import obj2query from './obj2query'
import query2obj from './query2obj'

// collection
import each from './each'

// function
import { debounce, Debounce } from './debounce'
import throttle from './throttle'
import curry from './curry'

// time
import timeTaken from './timeTaken'

export {
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
  // type
  isArguments,
  isFunction,
  isString,
  isDate,
  isRegExp,
  isError,
  isSymbol,
  isMap,
  isWeakMap,
  isSet,
  isWeakSet,
  isNumber,
  isArray,
}