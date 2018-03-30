/**
 * 检测元素是否包含对应样式
 * @param {HTMLElement} element 元素
 * @param {string} className 样式名称
 */
function hasClass(element, className) {
  const aClassName = element.className.split(' ')
  for (let i = 0; i < aClassName.length; i++) {
    if (className === aClassName[i]) {
      return true
    }
  }
  return false
}

module.exports = hasClass