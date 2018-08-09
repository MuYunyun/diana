/* ---------------- common ------------------- */
// array
import { uniq } from './array/uniq'
import { intersection } from './array/intersection'
import { countInArr } from './array/countInArr'
import { difference } from './array/difference'

// random
import { rdColor } from './random/rdColor'
import { rdNum } from './random/rdNum'

// regexp
import { isEmail } from './regexp/isEmail'
import { isPhoneNum } from './regexp/isPhoneNum'

// string
import { trim } from './string/trim'
import { changeCase } from './string/changeCase'
import { escapeStr } from './string/escapeStr'
import { sortStr } from './string/sortStr'

// lang
import { clone } from './lang/clone'
import { cloneDeep } from './lang/cloneDeep'
import { typeObj } from './lang/isType'
import { meanToCode, codeToMean } from './lang/convertMeanValue'

// math
import { sum, mean, max, min, distance, gcd } from './math/math'

// object
import { equal } from './object/equal'
import { pairs2obj } from './object/pairs2obj'
import { convertInObj } from './object/convertInObj'

// url
import { obj2query } from './url/obj2query'
import { query2obj } from './url/query2obj'

// collection
import { each } from './collection/each'

// function
import { debounce, Debounce } from './function/debounce'
import { throttle } from './function/throttle'
import { curry } from './function/curry'

// time
import { timeTaken } from './time/timeTaken'

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
  meanToCode,
  codeToMean,
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
  Debounce,
  throttle,
  curry,
  timeTaken,
}

const commonFn = Object.assign({}, fn, typeObj)

export = commonFn