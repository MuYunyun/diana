/**
 * 大小写转化
 * @param {str}
 * @param {type} 1：首字母大写(默认) 2：首页母小写 3：大小写转换
 */

// 知识点
// str.replace(regexp|substr, newSubstr|function)，
// function replacer(match, p1, p2, p3, offset, string) {
// return [p1, p2, p3].join(' - ');
// }
// var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
// console.log(newString);  // abc - 12345 - #$*%
function changeCase(str, type) {
  switch (type) {
    case 1:
      return str.replace(/^(\w)(\w+)/, (v, v1, v2) => {
        return v1.toUpperCase() + v2.toLowerCase()
      })
    case 2:
      return str.replace(/^(\w)(\w+)/, (v, v1, v2) => {
        return v1.toLowerCase() + v2.toUpperCase()
      })
    case 3:
      return ToggleCase(str)
    default:
      return str.replace(/^(\w)(\w+)/, (v, v1, v2) => {
        return v1.toUpperCase() + v2.toLowerCase()
      })
  }
}

function ToggleCase(str) {
  let itemText = ''
  str.split('').forEach((value) => {
    if (/^[a-z]/.test(value)) {
      itemText += value.toUpperCase()
    } else if (/^[A-Z]/.test(value)) {
      itemText += value.toLowerCase()
    } else {
      itemText += value
    }
  })
  return itemText
}

export { changeCase }