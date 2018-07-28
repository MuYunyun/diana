/**
 * 把在页面加载完毕时执行的函数创建为一个队列(摘自 JavaScript DOM 编程艺术)
 * @param {*} func 需加进队列的函数
 */
function addLoadEvent(func) {
  const oldFunc = window.onload
  if (typeof window.onload !== 'function') {
    window.onload = func
  } else {
    window.onload = function () { // window.onload 方法是在网页中所有元素完全加载到浏览器后才执行；如果就在这个函数中的话，window.onload 也充当了一个引用的角色；
      oldFunc()
      func()
    }
  }
  return this
}

module.exports = addLoadEvent