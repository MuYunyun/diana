import { isFunction } from './isType'

/**
 * 判断两个数组是否相等
 * @param {*} arr1
 * @param {*} arr2
 */
const toString = Object.prototype.toString

function eq(a: any, b: any, aStack?: any, bStack?: any) {
  // +0 === -0, 但是它们行为不相等，所以要进行区分
  if (a === b) return a !== 0 || 1 / a === 1 / b
  // undefined !== null
  if (a == null || b == null) return false
  // NaN !== NaN，但是我们希望是 NaN === NaN
  if (a !== a) return b !== b
  // 判断参数 a 类型，如果是基本类型，在这里可以直接返回 false
  if (typeof a !== 'function' && typeof a !== 'object' && typeof b != 'object') return false
  // 更复杂的对象使用 deepEq 函数进行深度比较, aStack 和 bStack 后面用来判断循环引用
  return deepEqual(a, b, aStack, bStack)
}

function deepEqual(a: any, b: any, aStack: Array<any> = [], bStack: Array<any> = []) {
  const className = toString.call(a)
  // a 和 b 的内部属性 [[class]] 不同时 返回 false
  if (className !== toString.call(b)) return false
  switch (className) {
    // Strings, numbers, regular expressions, dates, and booleans 通过隐式转换进行比较.
    case '[object RegExp]':
    case '[object String]':
      // '5' 应该等于 new String(5)
      return '' + a === '' + b
    case '[object Number]':
      // Object(NaN) 应该等于 NaN
      if (+a !== +a) return +b !== +b
      // Object(+0) 与 0 相等，与 -0 不相等
      return +a === 0 ? 1 / +a === 1 / b : +a === +b
    case '[object Date]':
    case '[object Boolean]':
      return +a === +b
    case '[object Symbol]':
      return Symbol.prototype.valueOf.call(a) === Symbol.prototype.valueOf.call(b)
  }

  const areArrays = className === '[object Array]'
  // 不是数组
  if (!areArrays) {
    // 只要有一方是 function、undefined、null，就当作不相等
    if (typeof a != 'object' || typeof b != 'object') return false

    // 构造函数是 Object，而且键值对也相等的对象，我们认为是相等的；构造函数是其它的，我们认为是不相等的。
    const aCtor = a.constructor
    const bCtor = b.constructor
    // aCtor 不等于 bCtor 且都不是 Object 构造函数的情况下,(相当于是除了 Object 以外的构造函数)
    if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor
      && isFunction(bCtor) && bCtor instanceof bCtor)) {
      return false
    }
  }

  // 仅仅需要对数组和对象进行判断循环引用，所以写在这里
  let length = aStack.length
  // 检查是否有循环引用的部分
  while (length--) {
    if (aStack[length] === a) return bStack[length] === b
  }

  // 将对象添加到堆栈
  aStack.push(a)
  bStack.push(b)

  // 递归地比较数组
  if (areArrays) {
    // 比较数组长度以确定是否需要深度比较
    let length = a.length
    if (length !== b.length) return false
    while (length--) {
      if (!eq(a[length], b[length], aStack, bStack)) return false
    }
  } else {
    // 递归比较对象
    const keys = Object.keys(a)
    let key
    let length = keys.length
    // 递归对象前确保两个对象包含相同数量的属性个数
    if (Object.keys(b).length !== length) return false
    while (length--) {
      key = keys[length]
      if (!(b.hasOwnProperty(key) && eq(a[key], b[key], aStack, bStack))) return false
    }
  }
  // 将对象从堆栈中移除
  aStack.pop()
  bStack.pop()
  return true
}

export default eq
