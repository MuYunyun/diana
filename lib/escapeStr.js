"use strict";
function escapeStr(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
module.exports = escapeStr;
//# sourceMappingURL=escapeStr.js.map