type blankType = 'all' | 'both' | 'head' | 'tail'

/**
 * 去除空格
 * @param {String} str
 * @param {type} 1-所有空格(不传), 2-前后空格，3-前空格，4-后空格
 */
function trim(str: string, type: blankType = 'all') {
  switch (type) {
    case 'all': return str.replace(/\s*/g, '')
    case 'both': return str.replace(/(^\s*)|(\s*$)/g, '')
    case 'head': return str.replace(/(^\s*)/g, '')
    case 'tail': return str.replace(/(\s*$)/g, '')
    default: return str.replace(/\s*/g, '')
  }
}

export default trim
