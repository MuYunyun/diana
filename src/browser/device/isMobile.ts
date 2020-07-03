/**
 * judge if is mobile device.
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
    return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows())
  }
}

const isMobile = mobileType.any.bind(mobileType)

export = isMobile