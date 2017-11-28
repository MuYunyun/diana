/**
 * 数组最大值
 * @param {*} arr
 */
function max(arr) {
  return Math.max.apply(null, arr) // 将数组展开成参数
}

module.exports = max
