/**
 * 多个数组取并集 | 数组去重
 * @param {*} arr1 传入的数组
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

// 方法二
function uniq(...arr) {
  let array = []
  for (let i = 0; i < arr.length; i++) {
    array = array.concat(arr[i])
  }
  let tmpObj = {}
  let result = []
  array.forEach((value) => {
    if (!tmpObj[typeof(value) + value]) {
      tmpObj[typeof (value) + value] = value
      result.push(value)
    }
  })
  return result
}

module.exports = uniq

