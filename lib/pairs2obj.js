"use strict";
function pairs2obj(arr) {
    return arr.reduce(function (a, v) { return (a[v[0]] = v[1], a); }, {});
}
module.exports = pairs2obj;
//# sourceMappingURL=pairs2obj.js.map