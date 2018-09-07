"use strict";
function redirect(url, aslink) {
    if (aslink === void 0) { aslink = true; }
    aslink ? window.location.href = url : window.location.replace(url);
    return this;
}
module.exports = redirect;
//# sourceMappingURL=redirect.js.map