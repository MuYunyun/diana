"use strict";
function debounce(func, wait, immediate) {
    var timeout, result;
    var debounced = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (timeout)
            clearTimeout(timeout);
        if (immediate) {
            var callNow = !timeout;
            timeout = setTimeout(function () {
                timeout = null;
            }, wait);
            if (callNow)
                result = func.apply(this, args);
        }
        else {
            timeout = setTimeout(function () {
                func.apply(_this, args);
            }, wait);
        }
        return result;
    };
    debounced.cancel = function () {
        clearTimeout(timeout);
        timeout = null;
    };
    return debounced;
}
function Debounce(time, immediate) {
    return function (target, key, descriptor) {
        descriptor.value = debounce(target[key], time, immediate);
    };
}
var obj = { debounce: debounce, Debounce: Debounce };
module.exports = obj;
//# sourceMappingURL=debounce.js.map