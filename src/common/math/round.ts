/**
 * 数字四舍五入(可以指定保留几位小数)
 * @param value    数值
 * @param position 保留几位小数
 */
function round(value: number, position = 0) {
  const tmp = Math.pow(10, position)
  return Math.round(value * tmp) / tmp
}

export = round