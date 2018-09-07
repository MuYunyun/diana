"use strict";
function getOS() {
    var userAgent = navigator.userAgent.toLowerCase() || '';
    var platform = navigator.platform || '';
    var OSObject = {
        Windows: (navigator.platform === 'Win32') || (navigator.platform === 'Windows'),
        MacOSX: (navigator.platform === 'Mac68K') || (navigator.platform === 'MacPPC')
            || (navigator.platform === 'Macintosh') || (navigator.platform == 'MacIntel'),
        Unix: (navigator.platform === 'X11') && !this.Windows && !this.MacOSX,
        Linux: /linux/i.test(platform),
        ios: /iphone/i.test(userAgent) || /ipad/i.test(userAgent) || /ipod/i.test(userAgent),
        android: /android/i.test(userAgent),
        weixin: /MicroMessenger/i.test(userAgent),
        other: true,
    };
    var currentOS = Object.keys(OSObject).filter(function (r) { return OSObject[r] === true; })[0];
    return currentOS;
}
module.exports = getOS;
//# sourceMappingURL=getOS.js.map