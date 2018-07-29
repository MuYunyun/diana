/**
 * 是否为数组
 * @param {value}
 */
function isArray(value: any) {
  if (!Array.isArray) {
    Array.isArray = (value) => {
      return Object.prototype.toString.call(value) === '[object Array]'
    }
  }
  return Array.isArray(value)
}

export { isArray }

