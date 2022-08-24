/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
    var sum = 0;
    return nums.map(function (num) {
        return (sum += num);
    });
};
