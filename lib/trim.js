"use strict";
function trim(str, type) {
    switch (type) {
        case 1: return str.replace(/\s*/g, '');
        case 2: return str.replace(/(^\s*)|(\s*$)/g, '');
        case 3: return str.replace(/(^\s*)/g, '');
        case 4: return str.replace(/(\s*$)/g, '');
        default: return str.replace(/\s*/g, '');
    }
}
module.exports = trim;
//# sourceMappingURL=trim.js.map