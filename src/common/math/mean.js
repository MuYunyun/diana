const sum = require('../math/sum')

/**
 * 数组求平均值
 * @param {*} arr
 */
function mean(arr) {
  return sum(arr) / arr.length
}

module.exports = mean
