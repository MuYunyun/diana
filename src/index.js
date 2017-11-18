/**
 * webpack 打包入口文件
 */
const arrayEqual = require('./array/arrayEqual')
const arrayUniq = require('./array/arrayUniq')

const randomColor = require('./random/randomColor')
const randomNum = require('./random/randomNum')

const isEmail = require('./regexp/isEmail')
const isPhoneNum = require('./regexp/isPhoneNum')

module.exports = {
  arrayEqual,
  arrayUniq,
  randomColor,
  randomNum,
  isEmail,
  isPhoneNum,
}