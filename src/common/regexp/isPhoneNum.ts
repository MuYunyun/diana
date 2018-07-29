/**
 * 判断是否为手机号
 * @param {String\Number} phoneNum
 */
function isPhoneNum(phoneNum: string | number) {
  return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(String(phoneNum))
}

export { isPhoneNum }