/**
 * 该函数可以将相应字段转化为指定格式
 * @param {*} obj
 * @param {*} ruleObj 给相应字段配置规则
 *  _.convertInObj({ att1: '1', att2: '2', att3: 'att3value', att4: '', att5: 5, att6: 0 },
      {
        number: ['att1', 'att2', 'att4'],
        string: ['att3','att5'],
        boolean: ['att6'],
      })
    => { att1: 1, att2: 2, att3: 'att3value', att4: null, att5: '5', att6: false }
 */
function convertInObj(obj: any, ruleObj: any) {
  Object.keys(obj).map(r => {
    if (ruleObj.number && ruleObj.number.length > 0) {
      if (~ruleObj.number.indexOf(r)) {
        if (obj[r] === '' || obj[r] === undefined) {
          obj[r] = null
        } else {
          obj[r] = Number(obj[r])
        }
      }
    }

    if (ruleObj.string && ruleObj.string.length > 0) {
      if (~ruleObj.string.indexOf(r)) {
        if (obj[r] === undefined) {
          obj[r] = null
        } else {
          obj[r] = String(obj[r])
        }
      }
    }

    if (ruleObj.boolean && ruleObj.boolean.length > 0) {
      if (~ruleObj.boolean.indexOf(r)) {
        if (obj[r] === undefined) {
          obj[r] = null
        } else {
          obj[r] = Boolean(Number(obj[r]))
        }
      }
    }
  })
  return obj
}

export { convertInObj }