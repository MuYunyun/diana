/**
 * 多个数组取并集 | 数组去重
 * @param {Array} ...arr 可传入 1 个或多个数组
 * ... 
 */
// 方法一
// function uniq(...arr) {
//   let array = []
//   for (let i = 0; i < arr.length; i++) {
//     array = array.concat(arr[i])
//   }
//   return Array.from(new Set(array))
// }

// 方法二
// function uniq(...arr) {
//   let array = []
//   for (let i = 0; i < arr.length; i++) {
//     array = array.concat(arr[i])
//   }
//   const result = array.filter(i => array.indexOf(i) === array.lastIndexOf(i))
//   return result
// }

// 方法三
function uniq(...arr) {
  let array: Array<any> = []
  for (let i = 0; i < arr.length; i++) {
    array = array.concat(arr[i])
  }
  let tmpObj: any = {}
  let result: Array<any> = []
  array.forEach((value) => {
    if (!tmpObj[typeof(value) + value]) {
      tmpObj[typeof (value) + value] = value
      result.push(value)
    }
  })
  return result
}

export { uniq }

