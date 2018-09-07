"use strict";
function isEmail(email) {
    return /^[a-z0-9]+([._\\-]*[a-z0-9])*@(\w+([-.]\w+)*\.){1,63}[a-z0-9]+$/.test(email);
}
module.exports = isEmail;
//# sourceMappingURL=isEmail.js.map