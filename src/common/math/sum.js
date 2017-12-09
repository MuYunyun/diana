/**
 * 数组求和
 * @param {*} arr
 */
function sum(arr) {
  return arr.reduce((pre, cur) => pre + cur)
}

module.exports = sum
