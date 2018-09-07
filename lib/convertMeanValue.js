"use strict";
var typeObj = require('./isType');
var isArray = typeObj.isArray;
function meanToCode(arr, mean) {
    if (!isArray(arr)) {
        return null;
    }
    {
        var result = arr.find(function (r) { return r.mean.toString() === mean.toString(); })
            ? arr.find(function (r) { return r.mean.toString() === mean.toString(); }).code
            : null;
        return result;
    }
}
function codeToMean(arr, code) {
    if (!isArray(arr)) {
        return null;
    }
    {
        return arr.find(function (r) { return r.code.toString() === code.toString(); })
            ? arr.find(function (r) { return r.code.toString() === code.toString(); }).mean
            : null;
    }
}
var obj = { meanToCode: meanToCode, codeToMean: codeToMean };
module.exports = obj;
//# sourceMappingURL=convertMeanValue.js.map