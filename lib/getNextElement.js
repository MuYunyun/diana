"use strict";
function getNextElement(node) {
    var nextSibling = node.nextSibling;
    if (nextSibling) {
        return function () {
            if (nextSibling.nodeType === 1) {
                return nextSibling;
            }
            if (nextSibling.nextSibling) {
                return getNextElement(nextSibling);
            }
            return null;
        }();
    }
    return null;
}
module.exports = getNextElement;
//# sourceMappingURL=getNextElement.js.map