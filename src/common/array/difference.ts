/**
 * 数组取差集(即取 arr1 中存在，arr2 中不存在的值)
 * @param {*} arr1
 * @param {*} arr2
 * _.difference([1,2,3], [1,2,4]) -> [3]
 */
function difference(arr1: Array<any>, arr2: Array<any>) {
  const s = new Set(arr2)
  return arr1.filter(x => !s.has(x))
}

export = difference