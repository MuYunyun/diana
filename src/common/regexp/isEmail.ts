/**
 * judge if is email
 * https://regexper.com/
 * @param {String} email
 */
function isEmail(email: string) {
  return /^[a-z0-9]+([._\\-]*[a-z0-9])*@(\w+([-.]\w+)*\.){1,63}[a-z0-9]+$/.test(email)
}

export default isEmail