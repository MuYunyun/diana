"use strict";
var optimizeCb = function (func, context, argCount) {
    if (context === void 0)
        return func;
    switch (argCount) {
        case 1: return function (value) {
            return func.call(context, value);
        };
    }
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return func.apply(context, args);
    };
};
var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
var each = function (obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
        for (i = 0, length = obj.length; i < length; i++) {
            iteratee(obj[i], i, obj);
        }
    }
    else {
        var keys = Object.keys(obj);
        for (i = 0, length = keys.length; i < length; i++) {
            iteratee(obj[keys[i]], keys[i], obj);
        }
    }
    return this;
};
var isArrayLike = function (collection) {
    var length = collection === null ? void 0 : collection['length'];
    return typeof length === 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
};
module.exports = each;
//# sourceMappingURL=each.js.map