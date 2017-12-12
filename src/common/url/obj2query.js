/**
 * 对象转成 url 中的 queryurl
 * @param {baseurl} 基础 url
 * @param {Object} 待解析对象
 * @return {String} 返回 queryurl
 */
function obj2query(baseurl, obj) {
  if (!obj) return '请检查参数是否为对象'
  const handleKey = Object.keys(obj).filter(key => obj[key] != null)
  const handleArray = handleKey.map(key => `${key}=${encodeURIComponent(obj[key])}`)
  return baseurl + '?' + handleArray.join('&')
}

module.exports = obj2query
