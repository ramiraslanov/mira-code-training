/**
 * @param {number} num
 * @return {number}
 */
var numberOfSteps = function (num) {
    var steps = 0;
    for (; num; steps++) {
        if (num % 2 === 0) {
            num /= 2;
        } else {
            num--;
        }
    }

    return steps;
};
