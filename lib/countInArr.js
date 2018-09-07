"use strict";
function countInArr(arr, value) {
    return arr.reduce(function (a, v) { return v === value ? a + 1 : a + 0; }, 0);
}
module.exports = countInArr;
//# sourceMappingURL=countInArr.js.map