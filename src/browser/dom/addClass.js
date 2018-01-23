/**
 * 为元素添加类名
 * @param {*} element
 * @param {*} className
 */
function addClass(element, className) {
  if (element.className === '') {
    element.className = className
  } else {
    element.className = `${element.className} ${className}` // className 属性只能覆盖
  }
}

module.exports = addClass