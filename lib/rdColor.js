"use strict";
function rdColor() {
    return '#' + ('000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}
module.exports = rdColor;
//# sourceMappingURL=rdColor.js.map