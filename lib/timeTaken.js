"use strict";
function timeTaken(callback) {
    console.time('timeTaken');
    var r = callback();
    console.timeEnd('timeTaken');
    return r;
}
module.exports = timeTaken;
//# sourceMappingURL=timeTaken.js.map