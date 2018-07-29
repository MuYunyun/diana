/**
 * 判断是否为邮箱地址
 * https://regexper.com/
 * @param {String} email
 */
function isEmail(email) {
  return /^[a-z0-9]+([._\\-]*[a-z0-9])*@(\w+([-.]\w+)*\.){1,63}[a-z0-9]+$/.test(email)
}

export { isEmail }