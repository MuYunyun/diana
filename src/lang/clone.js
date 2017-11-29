// https://github.com/wengjq/Blog/issues/3
/**
 * 浅拷贝
 * @param {Any} values
 */
function clone(values) {
  if (values == null || typeof values !== 'object') {
    return values
  }

  let clone

  if (values instanceof Object) {
    clone = {}
    for (let i in values) {
      clone[i] = values[i]
    }
    return clone
  }

  if (values instanceof Array) {
    clone = []
    for (let i = 0, len = values.length; i < len; i++) {
      copy[i] = values[i]
    }
    return clone
  }
}


module.exports = clone