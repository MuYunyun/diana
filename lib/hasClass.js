"use strict";
function hasClass(element, className) {
    var aClassName = element.className.split(' ');
    for (var i = 0; i < aClassName.length; i++) {
        if (className === aClassName[i]) {
            return true;
        }
    }
    return false;
}
module.exports = hasClass;
//# sourceMappingURL=hasClass.js.map