/**
 * 生成指定范围随机整数
 * @param {Number} max
 * @param {Number} min
 * @param {String} 'both'(default)、'left'、'right'、'no'
 */
function randomNum(min, max, border) {
  if (min === max) {
    return 'randomNum() 边界值不合理'
  }
  const range = max - min
  let random = Math.random()
  switch (border) {
    case 'left':
      return min + Math.floor(random * range)
    case 'right':
      if (random === 0) {
        random = 1
      }
      return min + Math.ceil(random * range)
    case 'no':
      if (max === min + 1) throw ('randomNum() 边界值不合理')
      if (random === 0) {
        random = 1
      }
      return min + Math.ceil(random * (range - 1))
    default:
      return min + Math.round(random * range)
  }
}

module.exports = randomNum

