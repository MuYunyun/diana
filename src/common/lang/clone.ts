// https://github.com/wengjq/Blog/issues/3
/**
 * 浅拷贝
 * @param {Any} values
 */
function clone(values: any) {
  if (values instanceof Object) {
    let clone: any = {}
    for (let i in values) {
      clone[i] = values[i]
    }
    return clone
  }
}

export { clone }