// https://github.com/wengjq/Blog/issues/3
/**
 * 深拷贝，支持常见类型
 * @param {Any} values
 */
function cloneDeep(values) {
  let copy

  if (values == null || typeof values !== 'object') return values

  // handle Date
  if (values instanceof Date) {
    copy = new Date()
    copy.setTime(values.getTime())
    return copy
  }

  // handle Array
  if (values instanceof Array) {
    copy = []
    for (let i = 0, len = values.length; i < len; i++) {
      copy[i] = cloneDeep(values[i])
    }
    return copy
  }

  // handle Object
  if (values instanceof Object) {
    copy = {}
    for (let attr in values) {
      copy[attr] = cloneDeep(values[attr])
    }
    return copy
  }
}

module.exports = cloneDeep