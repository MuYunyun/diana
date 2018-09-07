"use strict";
function sortStr(str) {
    return str.split('').sort(function (a, b) { return a.localeCompare(b); }).join('');
}
module.exports = sortStr;
//# sourceMappingURL=sortStr.js.map