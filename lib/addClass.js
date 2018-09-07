"use strict";
var hasClass = require('./hasClass');
function addClass(element, className) {
    if (element.classList) {
        element.classList.add(className);
    }
    else if (!hasClass(element, className)) {
        element.setAttribute('class', element.className + " " + className);
    }
    return this;
}
module.exports = addClass;
//# sourceMappingURL=addClass.js.map