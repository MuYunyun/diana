/**
 * 判断两个数组是否相等
 * @param {*} arr1
 * @param {*} arr2
 */
function arrayEqual(arr1, arr2) {
  if (arr1.length !== arr2.length) return false
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr[i]) return false
  }
  return true
}

module.exports = arrayEqual