"use strict";
var uniq = require('./uniq');
function intersection() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    if (arr.length === 1) {
        var arraySort = arr[0].sort();
        var arrayResult = [];
        for (var i = 0; i < arraySort.length - 1; i++) {
            if (arraySort[i] === arraySort[i + 1]) {
                arrayResult.push(arraySort[i]);
            }
        }
        return arrayResult;
    }
    else if (arr.length > 1) {
        var array = [];
        for (var i = 0; i < arr.length; i++) {
            array = array.concat(uniq(arr[i]));
        }
        var arraySort = array.sort();
        var arrayResult = [];
        for (var i = 0; i < arraySort.length - 1; i++) {
            if (arraySort[i] === arraySort[i + (arr.length - 1)]) {
                arrayResult.push(arraySort[i]);
            }
        }
        return arrayResult;
    }
}
module.exports = intersection;
//# sourceMappingURL=intersection.js.map