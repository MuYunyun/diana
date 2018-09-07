"use strict";
function clone(values) {
    if (values instanceof Object) {
        var clone_1 = {};
        for (var i in values) {
            clone_1[i] = values[i];
        }
        return clone_1;
    }
}
module.exports = clone;
//# sourceMappingURL=clone.js.map