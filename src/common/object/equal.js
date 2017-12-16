/**
 * 判断两个数组是否相等
 * @param {*} arr1
 * @param {*} arr2
 */
const toString = Object.prototype.toString

function equal(a, b) {
  // +0 === -0, 但是它们行为不相等，所以要进行区分
  if (a === b) return a !== 0 || 1 / a === 1 / b
  // null === null, 但是 null/undefined 只应该等于自身
  if (a == null || b == null) return false
  // NaN !== NaN，但是我们希望是 NaN === NaN
  if (a !== a) return b !== b
  // 判断参数 a 类型，如果是基本类型，在这里可以直接返回 false
  if (typeof a !== 'function' && typeof a !== 'object' && typeof b != 'object') return false
  // 更复杂的对象使用 deepEq 函数进行深度比较
  return deepEqual(a, b)
}

function deepEqual(a, b) {
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
    // 只要
  }
}

module.exports = equal
