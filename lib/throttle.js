"use strict";
function throttle(func, wait, options) {
    var timeout;
    var previous = 0;
    if (!options)
        options = {};
    var throttled = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var now = new Date().getTime();
        if (!previous && options.leading === false)
            previous = now;
        var remaining = wait - (now - previous);
        if (remaining <= 0 || now < previous) {
            if (timeout) {
                clearTimeout(timeout);
                timeout = null;
            }
            previous = now;
            func.apply(this, args);
        }
        else if (!timeout && options.trailing !== false) {
            timeout = setTimeout(function () {
                previous = options.leading === false ? 0 : new Date().getTime();
                timeout = null;
                func.apply(_this, args);
            }, remaining);
        }
    };
    throttled.cancel = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        clearTimeout(timeout);
        previous = 0;
        timeout = null;
    };
    return throttled;
}
module.exports = throttle;
//# sourceMappingURL=throttle.js.map