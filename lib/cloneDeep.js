"use strict";
var typeObj = require('./isType');
var isDate = typeObj.isDate, isRegExp = typeObj.isRegExp, isFunction = typeObj.isFunction, isArray = typeObj.isArray;
function cloneDeep(values) {
    var parents = [];
    var children = [];
    function clone(values) {
        var num = parents.indexOf(values);
        if (~num) {
            return children[num];
        }
        var copy;
        if (values == null || (typeof values !== 'object' && !isFunction(values)))
            return values;
        if (isDate(values)) {
            copy = new Date();
            copy.setTime(values.getTime());
            return copy;
        }
        if (isRegExp(values)) {
            copy = new RegExp(values.source, getRegExp(values));
            if (values.lastIndex) {
                copy.lastIndex = values.lastIndex;
            }
            return copy;
        }
        if (isFunction(values)) {
            return new Function("return " + values)();
        }
        if (isArray(values)) {
            copy = [];
            parents.push(values);
            children.push(copy);
            for (var i = 0, len = values.length; i < len; i++) {
                copy[i] = clone(values[i]);
            }
            return copy;
        }
        if (values instanceof Object) {
            var proto = Object.getPrototypeOf(values);
            copy = Object.create(proto);
            parents.push(values);
            children.push(copy);
            for (var attr in values) {
                copy[attr] = clone(values[attr]);
            }
            return copy;
        }
    }
    return clone(values);
}
var getRegExp = function (re) {
    var flags = '';
    if (re.global)
        flags += 'g';
    if (re.ignoreCase)
        flags += 'i';
    if (re.multiline)
        flags += 'm';
    return flags;
};
module.exports = cloneDeep;
//# sourceMappingURL=cloneDeep.js.map