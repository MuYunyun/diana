/**
 * 函数防抖，限制事件的频繁触发
 * 将延迟函数的执行(真正的执行)在函数最后一次调用时刻的 wait 毫秒之后，
 * 传参 immediate 为 true， 立即执行函数，wait 时间间隔内不再触发事件后才可以重新触发执行
 * @param {*} func
 * @param {*} wait ms
 * @param {*} immediate
 */
function debounce(func: any, wait: number, immediate?: boolean) {
  let timeout: any, result: any
  const debounced: any = function (...args: Array<any>) {
    if (timeout) clearTimeout(timeout)
    if (immediate) {     // 立即执行函数，n 秒内不再触发事件，才可以重新触发执行
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) result = func.apply(this, args)
    } else {
      timeout = setTimeout(() => { // 触发完事件 n 秒内不再触发事件后才可以重新触发执行
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

/**
 * 函数防抖装饰器模式
 * @param time
 * @param immediate
 */
function Debounce(time: number, immediate?: boolean) {
  return function (target: any, key: string, descriptor: any) {
    descriptor.value = debounce(target[key], time, immediate)
  }
}

export { debounce, Debounce }