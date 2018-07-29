/**
 * 判断是否为移动设备
 */
const mobileType: any = {
  Android() {
    return (/Android/i).test(navigator.userAgent)
  },
  BlackBerry() {
    return (/BlackBerry/i).test(navigator.userAgent)
  },
  iOS() {
    return (/iPhone|iPad|iPod/i).test(navigator.userAgent)
  },
  Opera() {
    return (/Opera Mini/i).test(navigator.userAgent)
  },
  Windows() {
    return (/IEMobile/i).test(navigator.userAgent)
  },
  any() {
    return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows())
  }
}

const isMobile = mobileType.any

export { isMobile }