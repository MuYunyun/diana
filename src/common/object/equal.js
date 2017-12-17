const eq = require('./eq')
/**
 * 执行两个对象之间的优化深度比较，确定他们是否应被视为相等
 * @param {*} a
 * @param {*} b
 */
function equal(a, b) {
  return eq(a, b)
}

module.exports = equal