"use strict";
function uniq() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var array = [];
    for (var i = 0; i < arr.length; i++) {
        array = array.concat(arr[i]);
    }
    var tmpObj = {};
    var result = [];
    array.forEach(function (value) {
        if (!tmpObj[typeof (value) + value]) {
            tmpObj[typeof (value) + value] = value;
            result.push(value);
        }
    });
    return result;
}
module.exports = uniq;
//# sourceMappingURL=uniq.js.map