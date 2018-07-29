/**
 * 函数防抖，限制事件的频繁触发
 * 将延迟函数的执行(真正的执行)在函数最后一次调用时刻的 wait 毫秒之后，
 * 传参 immediate 为 true， debounce会在 wait 时间间隔的开始调用这个函数。
 * @param {*} func
 * @param {*} wait 毫秒
 * @param {*} immediate
 */
function debounce(func: any, wait: number, immediate?: boolean) {
  let timeout: any, result: any
  const debounced: any = function (...args: Array<any>) {
    if (timeout) clearTimeout(timeout)
    // 立即执行函数，停止触发 n 秒后，才可以重新触发执行
    if (immediate) {
      // 如果已经执行过，不再执行
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) result = func.apply(this, args) // 箭头函数不会传递 this、arguments
    } else {
      // 触发完事件 n 秒内不再触发事件，才执行函数
      timeout = setTimeout(() => {
        func.apply(this, args)
      }, wait)
    }
    return result
  }

  debounced.cancel = () => {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}

export { debounce }