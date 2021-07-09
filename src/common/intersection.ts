import uniq from './uniq'

/**
 * 1 个或者多个数组取交集
 * @param {*} arr 可传入 1 个或多个数组
 * _.intersection([1, 3, 'a', 'a', 1]) => [1, 'a']
 * _.intersection([1, 'a', 'b', 1], [4, 'a', 'b'], ['a', 2, 'b', 'c']) => ['a', 'b']
 */
function intersection(...arr: Array<any>) {
  if (arr.length === 1) { // _.intersection([1, 3, 'a', 1, 'a']) => [1, 'a']
    const arraySort = arr[0].sort()
    const arrayResult = []
    for (let i = 0; i < arraySort.length - 1; i++) {
      if (arraySort[i] === arraySort[i + 1]) {
        arrayResult.push(arraySort[i])
      }
    }
    return arrayResult
  } else if (arr.length > 1) { // _.intersection([1, 2, 'a', 1], [4, 2, 'a'], [2, 'a', 'c']) => [2, 'a']
    let array: Array<any> = []
    for (let i = 0; i < arr.length; i++) {
      array = array.concat(uniq(arr[i]))
    }
    const arraySort = array.sort()
    const arrayResult = []
    for (let i = 0; i < arraySort.length - 1; i++) {
      if (arraySort[i] === arraySort[i + (arr.length - 1)]) { // 交集：传入多少个数组就应该有多少个相等的值
        arrayResult.push(arraySort[i])
      }
    }
    return arrayResult
  }
}

export default intersection
