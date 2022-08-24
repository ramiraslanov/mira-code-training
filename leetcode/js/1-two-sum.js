/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        var num = nums[i];
        var j = map.get(target - num);
        if (j !== undefined) {
            return [j, i];
        }

        map.set(num, i);
    }

    return [];
};
