/**
 * 获取常见操作系统类型
 * return string
 */
function getOS() {
  const userAgent = navigator.userAgent.toLowerCase() || ''
  const platform = navigator.platform || ''

  const OSObject = {
    Windows: (navigator.platform === 'Win32') || (navigator.platform === 'Windows'),

    MacOSX: (navigator.platform === 'Mac68K') || (navigator.platform === 'MacPPC')
        || (navigator.platform === 'Macintosh') || (navigator.platform == 'MacIntel'),

    Unix: (navigator.platform === 'X11') && !OSObject.Windows && !OSObject.MacOSX,

    Linux: /linux/i.test(platform),

    ios: /iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent),

    android: /android/i.test(userAgent),

    weixin: /MicroMessenger/i.test(userAgent),

    other: true,
  }

  const currentOS = Object.keys(OSObject).filter(r => OSObject[r] === true)[0]

  return currentOS
}

module.exports = getOS