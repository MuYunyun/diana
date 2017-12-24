/**
 * 计算两点 (x0, y0), (x1, y1) 之间的欧几里得距离
 * @param {*} x0
 * @param {*} y0
 * @param {*} x1
 * @param {*} y1
 */
function distance(x0, y0, x1, y1) {
  return Math.hypot(x1 - x0, y1 - y0)
}

module.exports = distance