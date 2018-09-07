"use strict";
function changeCase(str, type) {
    switch (type) {
        case 1:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toUpperCase() + v2.toLowerCase();
            });
        case 2:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toLowerCase() + v2.toUpperCase();
            });
        case 3:
            return ToggleCase(str);
        default:
            return str.replace(/^(\w)(\w+)/, function (v, v1, v2) {
                return v1.toUpperCase() + v2.toLowerCase();
            });
    }
}
function ToggleCase(str) {
    var itemText = '';
    str.split('').forEach(function (value) {
        if (/^[a-z]/.test(value)) {
            itemText += value.toUpperCase();
        }
        else if (/^[A-Z]/.test(value)) {
            itemText += value.toLowerCase();
        }
        else {
            itemText += value;
        }
    });
    return itemText;
}
module.exports = changeCase;
//# sourceMappingURL=changeCase.js.map