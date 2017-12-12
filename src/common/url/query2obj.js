/**
 * queryurl 转成相应的对象
 * @param {queryurl} url
 * @return {Object} 返回解析后的对象
 */
function query2obj(queryurl) {
  const search = queryurl.substring(queryurl.lastIndexOf('?') + 1)
  if (!search) {
    return {}
  }
  const handleArr = decodeURIComponent(search).split('&').filter(r => r !== '')
  const obj = {}
  for (let value of handleArr) {
    const key = value.match(/.*?(?==)/) // 第一个问号是懒惰型搜索，第二个问号是正向预查，解决 a==1&&b=2& 的情况
    if (key) {
      obj[key[0]] = value.substring(value.indexOf('=') + 1)
    }
  }
  return obj
}

module.exports = query2obj
