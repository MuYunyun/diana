"use strict";
function distance(x0, y0, x1, y1) {
    return Math.hypot(x1 - x0, y1 - y0);
}
function gcd(x, y) {
    return !y ? x : gcd(y, x % y);
}
function max(arr) {
    return Math.max.apply(null, arr);
}
function mean(arr) {
    return sum(arr) / arr.length;
}
function min(arr) {
    return Math.min.apply(null, arr);
}
function sum(arr) {
    return arr.reduce(function (pre, cur) { return pre + cur; });
}
var obj = { distance: distance, gcd: gcd, max: max, mean: mean, min: min, sum: sum };
module.exports = obj;
//# sourceMappingURL=math.js.map