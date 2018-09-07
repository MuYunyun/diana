"use strict";
var typeObj = require('./isType');
var isFunction = typeObj.isFunction;
var toString = Object.prototype.toString;
function eq(a, b, aStack, bStack) {
    if (a === b)
        return a !== 0 || 1 / a === 1 / b;
    if (a == null || b == null)
        return false;
    if (a !== a)
        return b !== b;
    if (typeof a !== 'function' && typeof a !== 'object' && typeof b != 'object')
        return false;
    return deepEqual(a, b, aStack, bStack);
}
function deepEqual(a, b, aStack, bStack) {
    if (aStack === void 0) { aStack = []; }
    if (bStack === void 0) { bStack = []; }
    var className = toString.call(a);
    if (className !== toString.call(b))
        return false;
    switch (className) {
        case '[object RegExp]':
        case '[object String]':
            return '' + a === '' + b;
        case '[object Number]':
            if (+a !== +a)
                return +b !== +b;
            return +a === 0 ? 1 / +a === 1 / b : +a === +b;
        case '[object Date]':
        case '[object Boolean]':
            return +a === +b;
        case '[object Symbol]':
            return Symbol.prototype.valueOf.call(a) === Symbol.prototype.valueOf.call(b);
    }
    var areArrays = className === '[object Array]';
    if (!areArrays) {
        if (typeof a != 'object' || typeof b != 'object')
            return false;
        var aCtor = a.constructor;
        var bCtor = b.constructor;
        if (aCtor !== bCtor && !(isFunction(aCtor) && aCtor instanceof aCtor
            && isFunction(bCtor) && bCtor instanceof bCtor)) {
            return false;
        }
    }
    var length = aStack.length;
    while (length--) {
        if (aStack[length] === a)
            return bStack[length] === b;
    }
    aStack.push(a);
    bStack.push(b);
    if (areArrays) {
        var length_1 = a.length;
        if (length_1 !== b.length)
            return false;
        while (length_1--) {
            if (!eq(a[length_1], b[length_1], aStack, bStack))
                return false;
        }
    }
    else {
        var keys = Object.keys(a);
        var key = void 0;
        var length_2 = keys.length;
        if (Object.keys(b).length !== length_2)
            return false;
        while (length_2--) {
            key = keys[length_2];
            if (!(b.hasOwnProperty(key) && eq(a[key], b[key], aStack, bStack)))
                return false;
        }
    }
    aStack.pop();
    bStack.pop();
    return true;
}
module.exports = eq;
//# sourceMappingURL=eq.js.map