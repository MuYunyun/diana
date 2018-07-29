// 函数柯里化定义：将一个多参数的函数转化为多个单参数的函数
/**
 * 函数柯里化。如果提供的参数 (args) 数量足够，则调用传递函数 f ，否则返回一个 curried 函数 f 。
 * @param {*} fn
 * @param {*} arity
 * @param {*} args
 * _.curry(Math.pow)(2)(10) => 1024
 */
function curry(fn: any, arity = fn.length, ...args: Array<any>) {
  return arity <= args.length
    ? fn(...args)
    : curry.bind(null, fn, arity, ...args)
}

export { curry }