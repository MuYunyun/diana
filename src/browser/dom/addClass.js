const hasClass = require('./hasClass')
/**
 * 为元素添加类名
 * @param {HTMLElement} element
 * @param {string} className
 */
function addClass(element, className) {
  if (element.classList) {
    element.classList.add(className)
  } else if (!hasClass(element, className)) {
    element.setAttribute('class', `${element.className} ${className}`)
  }
  return this
}

module.exports = addClass