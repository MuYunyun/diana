/**
 * 对象转成 url 中的 queryurl
 * @param {baseurl} 基础 url
 * @param {Object} 待解析对象
 * @return {String} 返回 queryurl
 */
function obj2query(baseurl: string, obj: any) {
  if (!obj) return 'please check if the second params is Object'
  const handleKey = Object.keys(obj).filter(key => obj[key] != null)
  const handleArray = handleKey.map(key => `${key}=${encodeURIComponent(obj[key])}`)
  return baseurl + '?' + handleArray.join('&')
}

export = obj2query
