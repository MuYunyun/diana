"use strict";
function difference(arr1, arr2) {
    var s = new Set(arr2);
    return arr1.filter(function (x) { return !s.has(x); });
}
module.exports = difference;
//# sourceMappingURL=difference.js.map