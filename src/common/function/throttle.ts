/**
 * 节流函数
 * 创建并返回一个像节流阀一样的函数，当重复调用函数的时候，至少每隔 wait毫秒调用一次该函数。
 * 对于想控制一些触发频率较高的事件有帮助。
 * 默认情况下，throttle将在你调用的第一时间尽快执行这个function，(第一次和最后一次都执行function)
 * 如果你想禁用第一次首先执行的话，传递{leading: false}，
 * 还有如果你想禁用最后一次执行的话，传递{trailing: false}。
 * @param {*} func
 * @param {*} wait
 * @param {*} options
 */
function throttle(func: any, wait: number, options: any) {
  let timeout: any
  let previous = 0
  if (!options) options = {}

  const throttled: any = function (...args: Array<any>) {
    const now = new Date().getTime()
    // leading：false 表示禁用第一次执行
    if (!previous && options.leading === false) previous = now
    // 下次触发 func 剩余的时间
    const remaining = wait - (now - previous)
    // 如果没有剩余时间了或者你改了系统时间
    if (remaining <= 0 || now < previous) { // 不传 options，第一次调用 throttle 进这个方法
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      func.apply(this, args)
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(() => {
        previous = options.leading === false ? 0 : new Date().getTime()
        timeout = null
        func.apply(this, args)
      }, remaining)
    }
  }

  throttled.cancel = function (...args: Array<any>) {
    clearTimeout(timeout)
    previous = 0
    timeout = null
  }
  return throttled
}

export { throttle }