"use strict";
function insertAfter(newNode, referenceNode) {
    var parent = referenceNode.parentNode;
    if (referenceNode === parent.lastChild) {
        parent.appendChild(newNode);
    }
    else {
        parent.insertBefore(newNode, referenceNode.nextSibling);
    }
    return this;
}
module.exports = insertAfter;
//# sourceMappingURL=insertAfter.js.map