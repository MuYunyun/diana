/**
 * 数组最小值
 * @param {*} arr
 */
function min(arr) {
  return Math.min.apply(null, arr) // 将数组展开成参数
}

module.exports = min
