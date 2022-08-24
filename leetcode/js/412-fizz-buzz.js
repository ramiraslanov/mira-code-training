/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
    var result = [];

    for (var i = 1; i <= n; i++) {
        var str = `${!(i % 3) ? "Fizz" : ""}${!(i % 5) ? "Buzz" : ""}`;
        result.push(str || `${i}`);
    }

    return result;
};
