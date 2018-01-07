/**
 * 将对象中指定元素转换为 number 格式
 * @param {*} obj
 * @param {*} arr 数组的值为 obj 对象中要替换的元素;
 * str2numInObj({ att1: '1', att2: '2', att3: 'att3value', att4: '' },['att1', 'att2', 'att4'])
 * => { att1: 1, att2: 2, att3: 'att3value', att4: null }
 */
function str2numInObj(obj, arr) {
  Object.keys(obj).map(r => {
    if (~arr.indexOf(r)) {
      if (obj[r] === '' || obj[r] === undefined) {
        obj[r] = null
      } else {
        obj[r] = Number(obj[r])
      }
    }
  })
  return obj
}

module.exports = str2numInObj