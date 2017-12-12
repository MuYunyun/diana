// https://github.com/wengjq/Blog/issues/3
/**
 * 浅拷贝
 * @param {Any} values
 */
function clone(values) {
  if (values instanceof Object) {
    let clone = {}
    for (let i in values) {
      clone[i] = values[i]
    }
    return clone
  }
}

module.exports = clone