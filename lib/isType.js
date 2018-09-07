"use strict";
var each = require('./each');
var typeObj = {};
each(['Arguments', 'Function', 'String', 'Date', 'RegExp', 'Error', 'Symbol', 'Map', 'WeakMap', 'Set', 'WeakSet'], function (name) {
    typeObj["is" + name] = function (obj) {
        return Object.prototype.toString.call(obj) === "[object " + name + "]";
    };
});
typeObj.isNumber = function (obj) {
    return Object.prototype.toString.call(obj) === '[object Number]' && !isNaN(obj);
};
typeObj.isArray = function (value) {
    return Array.isArray(value);
};
module.exports = typeObj;
//# sourceMappingURL=isType.js.map