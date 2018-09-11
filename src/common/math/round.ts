/**
 * 数字四舍五入(可以指定保留几位小数)
 * @param value    数值
 * @param position 保留几位小数
 */
function round(value: number, position = 0) {
  const tmp = Math.pow(10, position)
  let result = (Math.round(value * tmp) / tmp).toString()
  let num = result.split('.')[1] ? result.split('.')[1].length : 0
  while (num < position) {
    if (!result.includes('.')) {
      result += '.0'
    } else {
      result += '0'
    }
    num++
  }
  return result
}

export = round