/**
 * webpack 打包入口文件
 */
const equal = require('./array/equal')
const uniq = require('./array/uniq')
const intersection = require('./array/intersection')

const rdColor = require('./random/rdColor')
const rdNum = require('./random/rdNum')

const isEmail = require('./regexp/isEmail')
const isPhoneNum = require('./regexp/isPhoneNum')

const trim = require('./string/trim')
const changeCase = require('./string/changeCase')

// lang
const isArray = require('./lang/isArray')
const clone = require('./lang/clone')
const cloneDeep = require('./lang/cloneDeep')

// math
const sum = require('./math/sum')
const mean = require('./math/mean')
const max = require('./math/max')
const min = require('./math/min')

module.exports = {
  equal,
  uniq,
  intersection,
  rdColor,
  rdNum,
  isEmail,
  isPhoneNum,
  trim,
  changeCase,
  isArray,
  clone,
  cloneDeep,
  sum,
  mean,
  max,
  min,
}