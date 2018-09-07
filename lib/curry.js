"use strict";
function curry(fn, arity) {
    if (arity === void 0) { arity = fn.length; }
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return arity <= args.length
        ? fn.apply(void 0, args) : curry.bind.apply(curry, [null, fn, arity].concat(args));
}
module.exports = curry;
//# sourceMappingURL=curry.js.map