/**
 * 转义特殊字符
 * @param {*} str
 * _.escapeRegExp('(test)') => \\(test\\)
 */
function escapeStr(str: String) {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export = escapeStr