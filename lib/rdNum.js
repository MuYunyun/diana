"use strict";
function rdNum(min, max, border) {
    if (min === max) {
        return 'rdNum() 边界值不合理';
    }
    var range = max - min;
    var random = Math.random();
    switch (border) {
        case 'left':
            return min + Math.floor(random * range);
        case 'right':
            if (random === 0) {
                random = 1;
            }
            return min + Math.ceil(random * range);
        case 'no':
            if ((max - min < 1) || (max - min) === 1)
                return 'rdNum() 边界值不合理';
            if (random === 0) {
                random = 1;
            }
            return min + Math.ceil(random * (range - 1));
        default:
            return min + Math.round(random * range);
    }
}
module.exports = rdNum;
//# sourceMappingURL=rdNum.js.map