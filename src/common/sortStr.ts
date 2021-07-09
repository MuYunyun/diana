/**
 * 将字符串按字母顺序排序
 * @param {*} str
 * sortStr('cabbage') -> 'aabbceg'
 */
function sortStr(str: String) {
  return str.split('').sort((a, b) => a.localeCompare(b)).join('')
}

export default sortStr