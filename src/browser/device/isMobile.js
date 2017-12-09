/**
 * 判断是否为移动设备
 */
const isMobile = {
  Android() {
    return navigator.userAgent.match(/Android/i)
  },
  BlackBerry() {
    return navigator.userAgent.match(/BlackBerry/i)
  },
  iOS() {
    return navigator.userAgent.match(/iPhone|iPad|iPod/i)
  },
  Opera() {
    return navigator.userAgent.match(/Opera Mini/i)
  },
  Windows() {
    return navigator.userAgent.match(/IEMobile/i)
  },
  any() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
  }
}

module.exports = isMobile.any