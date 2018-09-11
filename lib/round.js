"use strict";
function round(value, position) {
    if (position === void 0) { position = 0; }
    var tmp = Math.pow(10, position);
    var result = (Math.round(value * tmp) / tmp).toString();
    var num = result.split('.')[1] ? result.split('.')[1].length : 0;
    while (num < position) {
        if (!result.includes('.')) {
            result += '.0';
        }
        else {
            result += '0';
        }
        num++;
    }
    return result;
}
module.exports = round;
//# sourceMappingURL=round.js.map