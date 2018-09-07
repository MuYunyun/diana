"use strict";
function convertInObj(obj, ruleObj) {
    Object.keys(obj).map(function (r) {
        if (ruleObj.number && ruleObj.number.length > 0) {
            if (~ruleObj.number.indexOf(r)) {
                if (obj[r] === '' || obj[r] === undefined) {
                    obj[r] = null;
                }
                else {
                    obj[r] = Number(obj[r]);
                }
            }
        }
        if (ruleObj.string && ruleObj.string.length > 0) {
            if (~ruleObj.string.indexOf(r)) {
                if (obj[r] === undefined) {
                    obj[r] = null;
                }
                else {
                    obj[r] = String(obj[r]);
                }
            }
        }
        if (ruleObj.boolean && ruleObj.boolean.length > 0) {
            if (~ruleObj.boolean.indexOf(r)) {
                if (obj[r] === undefined) {
                    obj[r] = null;
                }
                else {
                    obj[r] = Boolean(Number(obj[r]));
                }
            }
        }
    });
    return obj;
}
module.exports = convertInObj;
//# sourceMappingURL=convertInObj.js.map