/**
 * 获取常见操作系统类型
 */
function getOS() {
  const userAgent = navigator.userAgent.toLowerCase() || ''
  const platform = navigator.platform || ''

  const isWin = (navigator.platform === 'Win32') || (navigator.platform === 'Windows')

  const isMac = (navigator.platform === 'Mac68K') || (navigator.platform === 'MacPPC')
    || (navigator.platform === 'Macintosh') || (navigator.platform == 'MacIntel')

  const isUnix = (navigator.platform === 'X11') && !isWin && !isMac

  const isLinux = /linux/i.test(platform)

  const isIos = /iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent)

  const isAndroid = /android/i.test(userAgent)

  const isWeixin = /MicroMessenger/i.test(userAgent)

  if (isMac) return 'MacOSX'
  if (isWin) return 'Windows'
  if (isUnix) return 'Unix'
  if (isLinux) return 'Linux'
  if (isIos) return 'ios'
  if (isAndroid) return 'android'
  if (isWeixin) return 'weixin'
  return 'other'
}

module.exports = getOS