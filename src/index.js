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

module.exports = {
  equal,
  uniq,
  intersection,
  rdColor,
  rdNum,
  isEmail,
  isPhoneNum,
}