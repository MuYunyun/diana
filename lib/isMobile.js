"use strict";
var mobileType = {
    Android: function () {
        return (/Android/i).test(navigator.userAgent);
    },
    BlackBerry: function () {
        return (/BlackBerry/i).test(navigator.userAgent);
    },
    iOS: function () {
        return (/iPhone|iPad|iPod/i).test(navigator.userAgent);
    },
    Opera: function () {
        return (/Opera Mini/i).test(navigator.userAgent);
    },
    Windows: function () {
        return (/IEMobile/i).test(navigator.userAgent);
    },
    any: function () {
        return (this.Android() || this.BlackBerry() || this.iOS() || this.Opera() || this.Windows());
    }
};
var isMobile = mobileType.any.bind(mobileType);
module.exports = isMobile;
//# sourceMappingURL=isMobile.js.map