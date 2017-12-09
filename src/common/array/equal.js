const isArray = require('../lang/isArray')
/**
 * 判断两个数组是否相等
 * @param {*} arr1
 * @param {*} arr2
 */
function equal(arr1, arr2) {
  if (isArray(arr1) && isArray(arr2)) {
    return arr1.toString() === arr2.toString()
  } else {
    return 'parameter error in equal()'
  }
}

module.exports = equal
