// // https://github.com/wengjq/Blog/issues/3
// /**
//  * 深拷贝，支持常见类型
//  * @param {Any} values
//  */
import typeObj = require('./isType')
const { isDate, isRegExp, isFunction, isArray } = typeObj

function cloneDeep(values: any) {
  const parents: Array<any> = []
  const children: Array<any> = []

  function clone(values: any) {
    // handle loop reference
    const num = parents.indexOf(values)
    if (~num) {
      return children[num]
    }
    let copy: any

    if (values == null || (typeof values !== 'object' && !isFunction(values))) return values

    // handle Date
    if (isDate(values)) {
      copy = new Date()
      copy.setTime(values.getTime())
      return copy
    }

    if (isRegExp(values)) {
      copy = new RegExp(values.source, getRegExp(values))
      if (values.lastIndex) { copy.lastIndex = values.lastIndex }
      return copy
    }

    if (isFunction(values)) {
      return new Function(`return ${values}`)()
    }

    // handle Array
    if (isArray(values)) {
      copy = []
      parents.push(values)
      children.push(copy)
      for (let i = 0, len = values.length; i < len; i++) {
        copy[i] = clone(values[i])
      }
      return copy
    }

    // handle Object
    if (values instanceof Object) {
      // the last two codes is to make the constructor equal，考虑 Object 为实例的情形
      const proto = Object.getPrototypeOf(values)
      copy = Object.create(proto)
      parents.push(values) // handle loop reference
      children.push(copy) // handle loop reference，忽略一些执行顺序的细节后比较容易理解，比如 children 里 push 最后得到的是后面加工返回的 copy 值
      for (let attr in values) {
        copy[attr] = clone(values[attr])
      }
      return copy
    }
  }

  return clone(values)
}

const getRegExp = (re: any) => {
  var flags = ''
  if (re.global) flags += 'g'
  if (re.ignoreCase) flags += 'i'
  if (re.multiline) flags += 'm'
  return flags
}

export = cloneDeep