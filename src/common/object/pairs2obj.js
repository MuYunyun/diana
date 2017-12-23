/**
 * 给定的键值对转换为一个对象
 * [['a',1],['b',2]] -> {a: 1, b: 2}
 * @param {*} arr
 */
function pairs2obj(arr) {
  arr.reduce((a, v) => (a[v[0]] = v[1], a), {})
}

module.exports = pairs2obj