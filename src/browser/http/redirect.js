/**
 * 重定向到 URL
 * @param {*} url 待跳转 URL
 * @param {*} aslink 默认为 true, 传 false 时，你不能通过 “前进” 和 “后退” 来访问已经被替换的 URL
 */
function redirect(url, aslink = true) {
  aslink ? window.location.href = url : window.location.replace(url)
}

module.exports = redirect