import { typeObj } from './isType'

const { isArray } = typeObj

/**
 * 找到数组中 mean 对应的 code
 * @param {*} arr
 * @param {*} mean
 */
function meanToCode(arr: Array<any>, mean: String) {
  if (!isArray(arr)) {
    return null
  } {
    const result = arr.find(r => r.mean.toString() === mean.toString())
      ? arr.find(r => r.mean.toString() === mean.toString()).code
      : null
    return result
  }
}

/**
 * 找到数组中 code 对应的 mean
 * @param {*} arr
 * @param {*} code
 */
function codeToMean(arr: Array<any>, code: any) {
  if (!isArray(arr)) {
    return null
  } {
    return arr.find(r => r.code.toString() === code.toString())
      ? arr.find(r => r.code.toString() === code.toString()).mean
      : null
  }
}

export { meanToCode, codeToMean }