/**
 * 计算两点 (x0, y0), (x1, y1) 之间的欧几里得距离
 * @param {*} x0
 * @param {*} y0
 * @param {*} x1
 * @param {*} y1
 */
function distance(x0: number, y0: number, x1: number, y1: number) {
  return Math.hypot(x1 - x0, y1 - y0)
}

/**
 * 求最大公约数
 * @param {*} x
 * @param {*} y
 * @return {Number}
 * _.gcd (8, 36) -> 4
 */
function gcd(x: number, y: number) {
  return !y ? x : gcd(y, x % y)
}

/**
 * 数组最大值
 * @param {*} arr
 */
function max(arr: Array<number>) {
  return Math.max.apply(null, arr) // 将数组展开成参数
}

/**
 * 数组求平均值
 * @param {*} arr
 */
function mean(arr: Array<number>) {
  return sum(arr) / arr.length
}

/**
 * 数组最小值
 * @param {*} arr
 */
function min(arr: Array<number>) {
  return Math.min.apply(null, arr) // 将数组展开成参数
}

/**
 * 数组求和
 * @param {*} arr
 */
function sum(arr: Array<number>) {
  return arr.reduce((pre, cur) => pre + cur)
}

export { distance, gcd, max, mean, min, sum }