/**
 * 将字符串按字母顺序排序
 * @param {*} str
 * sortStr('cabbage') -> 'aabbceg'
 */
function sortStr(str) {
  return str.split('').sort((a, b) => a.localeCompare(b)).join('')
}

export { sortStr }