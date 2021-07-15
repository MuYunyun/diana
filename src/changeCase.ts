type caseType = 'upperCaseFirst' | 'lowerCaseFirst' | 'toggle'

/**
 * 大小写转化
 * @param {str}
 * @param {type} 'upperCaseFirst'：首字母大写(默认) 'lowerCaseFirst'：首页母小写 'toggle'：大小写转换
 */
function changeCase(str: String, type: caseType = 'upperCaseFirst') {
  switch (type) {
    case 'upperCaseFirst':
      return str.replace(/^(\w)(\w+)/, (_v, v1, v2) => {
        return v1.toUpperCase() + v2.toLowerCase()
      })
    case 'lowerCaseFirst':
      return str.replace(/^(\w)(\w+)/, (_v, v1, v2) => {
        return v1.toLowerCase() + v2.toUpperCase()
      })
    case 'toggle':
      return ToggleCase(str)
    default:
      return str.replace(/^(\w)(\w+)/, (_v, v1, v2) => {
        return v1.toUpperCase() + v2.toLowerCase()
      })
  }
}

function ToggleCase(str: String) {
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

export default changeCase