/**
 * 求最大公约数
 * @param {*} x
 * @param {*} y
 * @return {Number}
 * _.gcd (8, 36) -> 4
 */
function gcd(x, y) {
  return !y ? x : gcd(y, x % y)
}

module.exports = gcd