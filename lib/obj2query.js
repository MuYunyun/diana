"use strict";
function obj2query(baseurl, obj) {
    if (!obj)
        return '请检查参数是否为对象';
    var handleKey = Object.keys(obj).filter(function (key) { return obj[key] != null; });
    var handleArray = handleKey.map(function (key) { return key + "=" + encodeURIComponent(obj[key]); });
    return baseurl + '?' + handleArray.join('&');
}
module.exports = obj2query;
//# sourceMappingURL=obj2query.js.map