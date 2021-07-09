/**
 * 统计数组中特定值出现的次数
 * @param {*} arr
 * @param {*} value
 * @return {number}
 * _.countInArr([1, 1, 2, 1, 2, 3], 1) -> 3
 */
function countInArr(arr: Array<any>, value: string|number|boolean) {
  return arr.reduce((a, v) => v === value ? a + 1 : a + 0, 0)
}

export default countInArr