"use strict";
function round(value, position) {
    var tmp = Math.pow(10, position);
    return Math.round(value * tmp) / tmp;
}
module.exports = round;
//# sourceMappingURL=round.js.map