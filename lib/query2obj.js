"use strict";
function query2obj(queryurl) {
    var search = queryurl.substring(queryurl.lastIndexOf('?') + 1);
    if (!search) {
        return {};
    }
    var handleArr = decodeURIComponent(search).split('&').filter(function (r) { return r !== ''; });
    var obj = {};
    for (var _i = 0, handleArr_1 = handleArr; _i < handleArr_1.length; _i++) {
        var value = handleArr_1[_i];
        var key = value.match(/.*?(?==)/);
        if (key) {
            obj[key[0]] = value.substring(value.indexOf('=') + 1);
        }
    }
    return obj;
}
module.exports = query2obj;
//# sourceMappingURL=query2obj.js.map